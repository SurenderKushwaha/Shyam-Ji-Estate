const fs = require("fs");

const html = fs.readFileSync("instagram_profile.html", "utf8");

// Instagram embeds state in a script tag with sharedData or inside window.__initialDataLoaded
// Let's search for shortcodes
const regex = /"shortcode":"([^"]+)"/g;
let matches = [];
let match;
while ((match = regex.exec(html)) !== null) {
  matches.push(match[1]);
}
console.log("Shortcodes found:", [...new Set(matches)].slice(0, 5));

// Try to find full post objects
const jsonRegex = /{"node":{"__typename":"GraphVideo".*?}}/g;
const nodes = [];
while ((match = jsonRegex.exec(html)) !== null) {
  nodes.push(JSON.parse(match[0]).node);
}

if (nodes.length > 0) {
  console.log("Found GraphVideo nodes:", nodes.length);
  const reels = nodes.map((n) => ({
    id: n.shortcode,
    title: n.edge_media_to_caption?.edges[0]?.node?.text?.slice(0, 50) || "",
    views: n.video_view_count,
    thumbnail: n.display_url,
  }));
  console.log(reels.slice(0, 2));
} else {
  // alternative parsing for new instagram structure
  const altRegex = /"xdt_api__v1__feed__user_timeline_graphql_connection":({"edges":\[.*?\]})/g;
  const matchAlt = altRegex.exec(html);
  if (matchAlt) {
    console.log("Found xdt_api data");
    const data = JSON.parse(matchAlt[1]);
    const reels = data.edges
      .filter((e) => e.node.media_type === 2)
      .map((e) => ({
        id: e.node.code,
        title: e.node.caption?.text?.slice(0, 50) || "",
        views: e.node.play_count || e.node.view_count,
        thumbnail: e.node.image_versions2?.candidates?.[0]?.url || e.node.thumbnail_src,
      }));
    console.log(reels.slice(0, 2));
  } else {
    console.log("Could not find standard IG JSON. Printing script tags length...");
    const scripts = html.match(/<script[^>]*>(.*?)<\/script>/g);
    console.log(
      scripts
        ? scripts
            .map((s) => s.length)
            .sort((a, b) => b - a)
            .slice(0, 5)
        : "no scripts",
    );
  }
}
