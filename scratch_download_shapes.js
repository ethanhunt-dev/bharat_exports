const https = require('https');
const fs = require('fs');

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

async function run() {
  const base = 'https://cmdemo.in/html/2024/skanda/v1/';
  const files = [
    'assets/img/p-shape1.png',
    'assets/img/p-shape2.png',
    'assets/img/shape.png',
    'assets/img/shape-2.png',
    'assets/img/c-shape-3.png',
    'assets/css/main.css'
  ];

  for (const f of files) {
    const filename = f.split('/').pop();
    const dest = 'public/images/skanda/' + filename;
    try {
      await download(base + f, dest);
      console.log('Downloaded', f, 'to', dest);
    } catch (e) {
      console.error('Failed', f, e.message);
    }
  }
}
run();
