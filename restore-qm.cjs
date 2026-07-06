const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');

  // Replace ' | ' with '?' on all lines except title tags
  let lines = content.split('\n');
  lines = lines.map(line => {
    if (line.includes('{ title:') || line.includes('og:title') || line.includes('title=')) {
      return line;
    }
    // If it's a comment like `{/* Right Image | only visible... */}` keep it
    if (line.includes('{/*') && line.includes(' | ')) {
      return line.replace(/ \| /g, ' - ');
    }
    return line.replace(/ \| /g, '?');
  });

  content = lines.join('\n');
  
  // Fix className | : string -> className?: string
  content = content.replace(/className\?:\s*string/g, 'className?: string');
  
  fs.writeFileSync(p, content, 'utf8');
});
console.log('Restored question marks');
