const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../frontend/src/app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;

walkDir(targetDir, function(filePath) {
  if (filePath.endsWith('.tsx') && !filePath.includes('layout.tsx') && !filePath.includes('template.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Add card-3d to glass-panels that don't already have it
    content = content.replace(/className="([^"]*glass-panel[^"]*)"/g, (match, classes) => {
      if (!classes.includes('card-3d') && !classes.includes('facilityCard') && !classes.includes('card ')) {
        return `className="${classes.trim()} card-3d"`;
      }
      return match;
    });

    // Add animate-on-load to h2 and h3 elements if not present
    content = content.replace(/<h[23]([^>]*)>/g, (match, attrs) => {
      if (!attrs.includes('className=')) {
        return match.replace(/>$/, ` className="animate-on-load">`);
      } else if (!attrs.includes('animate-on-load') && attrs.includes('className="')) {
        return match.replace(/className="/, `className="animate-on-load `);
      }
      return match;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Upgraded: ${filePath}`);
      modifiedCount++;
    }
  }
});

console.log(`Successfully upgraded ${modifiedCount} files with interactive classes.`);
