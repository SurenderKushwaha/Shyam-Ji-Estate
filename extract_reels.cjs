const fs = require('fs');
const html = fs.readFileSync('instagram_profile.html', 'utf8');

// Show what's around the first "reel" occurrence
const reelIdx = html.indexOf('reel');
console.log('Context around first "reel" (400 chars):');
console.log(html.substring(reelIdx - 100, reelIdx + 300));

// Try to find any href or src with instagram domain
const igLinks = html.match(/https?:\/\/www\.instagram\.com[^"'\s]*/g) || [];
console.log('\n=== Instagram URLs found ===');
[...new Set(igLinks)].slice(0, 20).forEach(l => console.log(l));

// Check if this is an embedded page - look for blockquote embeds
const blockquotes = html.match(/<blockquote[^>]*class="instagram[^"]*"[^>]*>/g) || [];
console.log('\n=== Instagram embed blockquotes ===');
blockquotes.slice(0, 5).forEach(b => console.log(b));

// Look for data-instgrm-permalink
const permalinks = html.match(/data-instgrm-permalink="([^"]+)"/g) || [];
console.log('\n=== Embed permalinks ===');
permalinks.forEach(p => console.log(p));
