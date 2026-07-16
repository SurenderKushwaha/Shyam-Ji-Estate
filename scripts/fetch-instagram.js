import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const IG_USERNAME = "shyamji_estate";
const REELS_JSON_PATH = path.join(__dirname, "../public/reels.json");
const ASSETS_DIR = path.join(__dirname, "../public/ig-assets");

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// Utility to download an image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 200) {
          res
            .pipe(fs.createWriteStream(filepath))
            .on("error", reject)
            .once("close", () => resolve(filepath));
        } else {
          res.resume();
          reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
        }
      })
      .on("error", reject);
  });
};

// Utility to format numbers (e.g., 12400 -> 12.4K)
const formatViews = (views) => {
  if (views >= 1000000) return (views / 1000000).toFixed(1) + "M";
  if (views >= 1000) return (views / 1000).toFixed(1) + "K";
  return views.toString();
};

async function fetchInstagramReels() {
  if (!APIFY_TOKEN) {
    console.warn("⚠️ APIFY_TOKEN is not set. Skipping Instagram fetch.");
    console.log(
      "Please create a free account on Apify, get your API token, and add it to your GitHub Repository Secrets as APIFY_TOKEN.",
    );
    return;
  }

  console.log(`Fetching latest reels for @${IG_USERNAME}...`);

  try {
    // We use the apify/instagram-profile-scraper actor
    const apifyUrl = `https://api.apify.com/v2/acts/apify~instagram-profile-scraper/run-sync-get-dataset-items?token=${APIFY_TOKEN}`;

    const response = await fetch(apifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usernames: [IG_USERNAME],
        resultsLimit: 6, // We only need the latest 4, fetching 6 just in case
      }),
    });

    if (!response.ok) {
      throw new Error(`Apify API Error: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data || data.length === 0 || !data[0].latestPosts) {
      console.log("No posts found or rate limited.");
      return;
    }

    // Filter only video posts (Reels)
    const videoPosts = data[0].latestPosts.filter((post) => post.type === "Video").slice(0, 4);

    const formattedReels = [];

    for (const post of videoPosts) {
      const id = post.shortCode;
      const imageUrl = post.displayUrl;
      const filename = `${id}.jpg`;
      const localImagePath = path.join(ASSETS_DIR, filename);

      console.log(`Downloading thumbnail for ${id}...`);
      try {
        await downloadImage(imageUrl, localImagePath);
      } catch (err) {
        console.error(`Failed to download image for ${id}:`, err.message);
      }

      // Determine category based on keywords in caption (optional)
      const caption = post.caption || "";
      const lowerCaption = caption.toLowerCase();
      let category = "Buy / Rent";
      if (lowerCaption.includes("pg") || lowerCaption.includes("hostel")) category = "PG / Hostel";
      if (
        lowerCaption.includes("commercial") ||
        lowerCaption.includes("office") ||
        lowerCaption.includes("shop")
      )
        category = "Commercial";

      formattedReels.push({
        id: id,
        title: caption.split("\n")[0].slice(0, 60) + (caption.length > 60 ? "..." : ""),
        location: data[0].fullName || "Old Rajinder Nagar", // Fallback location
        views: formatViews(post.videoViewCount || 0),
        category: category,
        thumbnail: `/ig-assets/${filename}`,
        type: "dynamic",
      });
    }

    if (formattedReels.length > 0) {
      fs.writeFileSync(REELS_JSON_PATH, JSON.stringify(formattedReels, null, 2));
      console.log("✅ Successfully updated reels.json!");
    } else {
      console.log("No video reels found to update.");
    }
  } catch (error) {
    console.error("❌ Failed to fetch Instagram reels:", error);
    process.exit(1); // Exit with error so GitHub Action knows it failed
  }
}

fetchInstagramReels();
