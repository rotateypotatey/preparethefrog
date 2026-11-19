const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });
const assets = [
  'index.html', 'styles.css', 'script.js', 'site.webmanifest',
  'favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png',
  'apple-touch-icon.png', 'android-chrome-192x192.png',
  'android-chrome-512x512.png', 'img',
];
for (const asset of assets) {
  fs.cpSync(path.join(root, asset), path.join(output, asset), { recursive: true });
}
console.log('Built static site in dist/ (no secrets or development files copied).');
