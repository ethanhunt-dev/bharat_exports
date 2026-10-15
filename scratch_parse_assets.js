const fs = require('fs');
const html = fs.readFileSync('C:/Users/hp/.gemini/antigravity-ide/brain/042ec369-2b64-435f-8f82-cb423e3b9392/skanda_full.html', 'utf8');

const imgMatches = html.match(/src="([^"]+)"/g) || [];
console.log('SRC matches:', imgMatches.slice(0, 30));

const bgMatches = html.match(/url\(['"]?([^'")]+)['"]?\)/g) || [];
console.log('BG matches:', bgMatches.slice(0, 30));

// Check product hover classes or cards
const cardMatches = html.match(/class="[^"]*product[^"]*"/gi) || [];
console.log('Product classes:', cardMatches.slice(0, 10));

// Search for footer
const footerIdx = html.indexOf('<footer');
if (footerIdx !== -1) {
  console.log('Footer snippet:', html.substring(footerIdx, footerIdx + 500));
}
