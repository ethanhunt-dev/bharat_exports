const fs = require('fs');
const html = fs.readFileSync('C:/Users/hp/.gemini/antigravity-ide/brain/042ec369-2b64-435f-8f82-cb423e3b9392/skanda_full.html', 'utf8');

// Find section around 09.jpg
const idx = html.indexOf('09.jpg');
if (idx !== -1) {
  console.log('Product section snippet:');
  console.log(html.substring(idx - 400, idx + 800));
}
