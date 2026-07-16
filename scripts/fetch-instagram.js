// scripts/fetch-instagram.js
// ESM-compatible script: fetches latest reels from @shyamji_estate via Apify

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const INSTAGRAM_USERNAME = "shyamji_estate";
const OUTPUT_FILE = path.join(__dirname, "../public/reels.json");

if (!APIFY_TOKEN) {
  console.error("❌ APIFY_TOKEN environment variable is not set!");
  process.exit(1);
}

// ── Helper: make HTTPS request ───────────────────────────────────────────────
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

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatViews(count) {
  if (!count || count === 0) return "";
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
  return String(count);
}

function extractLocation(caption = "") {
  const lower = caption.toLowerCase();
  if (lower.includes("old rajinder nagar") || lower.includes("old rn"))
    return "Old Rajinder Nagar";
  if (lower.includes("new rajinder nagar") || lower.includes("new rn"))
    return "New Rajinder Nagar";
  if (lower.includes("karol bagh")) return "Karol Bagh";
  if (lower.includes("pusa road")) return "Pusa Road";
  return "Old Rajinder Nagar";
}

function detectCategory(caption = "") {
  const lower = caption.toLowerCase();
  if (lower.includes("pg") || lower.includes("hostel") || lower.includes("girls"))
    return "PG / Hostel";
  if (lower.includes("office") || lower.includes("commercial") || lower.includes("shop"))
    return "Commercial";
  if (lower.includes("rent")) return "Rent";
  return "Buy / Rent";
}

function detectType(caption = "", category = "") {
  if (category === "PG / Hostel") return "girls";
  if (category === "Commercial") {
    if (caption.toLowerCase().includes("office")) return "office";
    return "commercial";
  }
  return "living";
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`🔍 Fetching reels for @${INSTAGRAM_USERNAME}...`);

  // 1. Start Apify actor run
  console.log("🚀 Starting Apify actor...");
  const startRes = await httpsRequest(
    `https://api.apify.com/v2/acts/apify~instagram-reel-scraper/runs?token=${APIFY_TOKEN}`,
    { method: "POST", headers: { "Content-Type": "application/json" } },
    {
      username: [INSTAGRAM_USERNAME],
      resultsType: "reels",
      resultsLimit: 30,
      proxy: { useApifyProxy: true, apifyProxyGroups: ["RESIDENTIAL"] },
    }
  );

  if (startRes.status !== 201) {
    console.error("❌ Failed to start actor:", JSON.stringify(startRes.body));
    process.exit(1);
  }

  const runId = startRes.body?.data?.id;
  const datasetId = startRes.body?.data?.defaultDatasetId;
  console.log(`✅ Run started. ID: ${runId}`);

  // 2. Poll for completion (max 8 min)
  console.log("⏳ Waiting for run to complete...");
  let status = "RUNNING";
  for (let i = 0; i < 48; i++) {
    await sleep(10_000);
    const poll = await httpsRequest(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_TOKEN}`
    );
    status = poll.body?.data?.status;
    console.log(`   Poll ${i + 1}: ${status}`);
    if (["SUCCEEDED", "FAILED", "ABORTED"].includes(status)) break;
  }

  if (status !== "SUCCEEDED") {
    console.error(`❌ Run ended with status: ${status}`);
    process.exit(1);
  }

  // 3. Fetch dataset
  console.log("📦 Fetching dataset...");
  const dataRes = await httpsRequest(
    `https://api.apify.com/v2/datasets/${datasetId}/items?token=${APIFY_TOKEN}&clean=true`
  );

  const items = Array.isArray(dataRes.body) ? dataRes.body : [];
  if (items.length === 0) {
    console.warn("⚠️ No items returned. Keeping existing reels.json.");
    process.exit(0);
  }
  console.log(`✅ Got ${items.length} items.`);

  // 4. Filter reels only (not photo posts)
  const reels = items
    .filter((item) => item.type === "Reel" || String(item.url ?? "").includes("/reel/"))
    .map((item) => {
      const urlMatch = String(item.url ?? "").match(/\/reel\/([A-Za-z0-9_-]+)/);
      const shortcode = urlMatch?.[1] ?? item.shortCode ?? String(item.id ?? "");
      const caption = String(item.caption ?? "");
      const category = detectCategory(caption);

      return {
        id: shortcode,
        title: caption.split("\n")[0]?.substring(0, 80) || "Property Tour",
        location: extractLocation(caption),
        views: formatViews(item.videoViewCount ?? item.playsCount ?? 0),
        category,
        type: detectType(caption, category),
      };
    });

  if (reels.length === 0) {
    console.warn("⚠️ No reels in results. Keeping existing reels.json.");
    process.exit(0);
  }

  // 5. Save
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(reels, null, 2));
  console.log(`✅ Saved ${reels.length} reels to public/reels.json`);
  reels.forEach((r, i) => console.log(`  ${i + 1}. [${r.id}] ${r.views} views — ${r.category}`));
}

main().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
