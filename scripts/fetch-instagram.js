// scripts/fetch-instagram.js
// Fetches latest reels from @shyamjiestate via Apify and updates public/reels.json

const https = require("https");
const fs = require("fs");
const path = require("path");

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const INSTAGRAM_USERNAME = "shyamjiestate";
const OUTPUT_FILE = path.join(__dirname, "../public/reels.json");

if (!APIFY_TOKEN) {
  console.error("❌ APIFY_TOKEN environment variable is not set!");
  process.exit(1);
}

// ── Helper: make HTTPS request ──────────────────────────────────────────────
function httpsRequest(url, options = {}, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

// ── Helper: sleep ────────────────────────────────────────────────────────────
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log(`🔍 Starting Instagram reel fetch for @${INSTAGRAM_USERNAME}...`);

  // 1. Start Apify actor run
  console.log("🚀 Starting Apify actor...");
  const startRes = await httpsRequest(
    `https://api.apify.com/v2/acts/apify~instagram-reel-scraper/runs?token=${APIFY_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
    {
      directUrls: [`https://www.instagram.com/${INSTAGRAM_USERNAME}/reels/`],
      resultsLimit: 12,
      proxy: { useApifyProxy: true, apifyProxyGroups: ["RESIDENTIAL"] },
    }
  );

  if (startRes.status !== 201) {
    console.error("❌ Failed to start actor:", JSON.stringify(startRes.body));
    process.exit(1);
  }

  const runId = startRes.body?.data?.id;
  const datasetId = startRes.body?.data?.defaultDatasetId;
  console.log(`✅ Actor run started. Run ID: ${runId}`);

  // 2. Poll until finished (max 8 minutes)
  console.log("⏳ Waiting for actor to finish...");
  let status = "RUNNING";
  for (let i = 0; i < 48; i++) {
    await sleep(10000); // wait 10 seconds between polls
    const pollRes = await httpsRequest(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_TOKEN}`
    );
    status = pollRes.body?.data?.status;
    console.log(`   Status: ${status}`);
    if (status === "SUCCEEDED" || status === "FAILED" || status === "ABORTED") {
      break;
    }
  }

  if (status !== "SUCCEEDED") {
    console.error(`❌ Actor run ended with status: ${status}`);
    process.exit(1);
  }

  // 3. Fetch results from dataset
  console.log("📦 Fetching results from dataset...");
  const dataRes = await httpsRequest(
    `https://api.apify.com/v2/datasets/${datasetId}/items?token=${APIFY_TOKEN}&clean=true`
  );

  const items = Array.isArray(dataRes.body) ? dataRes.body : [];
  if (items.length === 0) {
    console.warn("⚠️ No items returned. Keeping existing reels.json.");
    process.exit(0);
  }

  console.log(`✅ Got ${items.length} items from Apify.`);

  // 4. Filter ONLY reels (not photo posts)
  const reels = items
    .filter((item) => item.type === "Reel" || item.url?.includes("/reel/"))
    .slice(0, 8)
    .map((item) => {
      // Extract shortcode from URL like https://www.instagram.com/reel/ABC123/
      const urlMatch = item.url?.match(/\/reel\/([A-Za-z0-9_-]+)/);
      const shortcode = urlMatch ? urlMatch[1] : item.shortCode || item.id;

      return {
        id: shortcode,
        title: item.caption?.split("\n")[0]?.substring(0, 80) || "Property Tour",
        location: extractLocation(item.caption || "") || "Old Rajinder Nagar",
        views: formatViews(item.videoViewCount || item.playsCount || 0),
        category: detectCategory(item.caption || ""),
        thumbnail: item.displayUrl || item.thumbnailUrl || "",
      };
    });

  if (reels.length === 0) {
    console.warn("⚠️ No reels found in results. Keeping existing reels.json.");
    process.exit(0);
  }

  // 5. Write to public/reels.json
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(reels, null, 2));
  console.log(`✅ Saved ${reels.length} reels to public/reels.json`);
  reels.forEach((r, i) => console.log(`  ${i + 1}. [${r.id}] ${r.title}`));
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatViews(count) {
  if (!count || count === 0) return "";
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return String(count);
}

function extractLocation(caption) {
  const lower = caption.toLowerCase();
  if (lower.includes("old rajinder nagar") || lower.includes("old rn"))
    return "Old Rajinder Nagar";
  if (lower.includes("new rajinder nagar") || lower.includes("new rn"))
    return "New Rajinder Nagar";
  if (lower.includes("karol bagh")) return "Karol Bagh";
  if (lower.includes("pusa road")) return "Pusa Road";
  return "";
}

function detectCategory(caption) {
  const lower = caption.toLowerCase();
  if (lower.includes("pg") || lower.includes("hostel") || lower.includes("girls"))
    return "PG / Hostel";
  if (lower.includes("office") || lower.includes("commercial") || lower.includes("shop"))
    return "Commercial";
  if (lower.includes("rent")) return "Rent";
  return "Buy / Rent";
}

main().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
