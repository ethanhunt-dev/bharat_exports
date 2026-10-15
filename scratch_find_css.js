const fs = require('fs');
const html = fs.readFileSync('C:/Users/hp/.gemini/antigravity-ide/brain/042ec369-2b64-435f-8f82-cb423e3b9392/skanda_full.html', 'utf8');

const cssMatches = html.match(/href="([^"]+\.css)"/g) || [];
console.log('CSS files:', cssMatches);
