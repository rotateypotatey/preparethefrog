const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

test('all local entry-page assets and manifest icons exist', () => {
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (!/^(https?:|#)/.test(match[1])) assert.ok(fs.existsSync(path.join(root, match[1])), match[1]);
  }
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'site.webmanifest'), 'utf8'));
  for (const icon of manifest.icons) assert.ok(fs.existsSync(path.join(root, icon.src)));
});

test('proof button updates the full dossier, exhausts all cases, and avoids cycle-boundary repeats', () => {
  const nodes = new Map([...html.matchAll(/id="([^"]+)"/g)].map(m => ['#' + m[1], {
    textContent: '', addEventListener(event, handler) { this[event] = handler; },
  }]));
  const element = nodes.get('#frog-truth');
  element.querySelector = selector => {
    assert.ok(nodes.has(selector), `Missing element ${selector}`);
    return nodes.get(selector);
  };
  vm.runInNewContext(script, { document: { getElementById: () => element } });
  const title = () => nodes.get('#truth-case').textContent;
  const seen = new Set([title()]);
  let previous = title();
  for (let i = 1; i < 36; i++) {
    nodes.get('#truth-dose').click();
    assert.notEqual(title(), previous);
    previous = title();
    if (i < 12) seen.add(title());
    for (const id of ['case', 'event', 'theory', 'detail']) {
      const text = nodes.get('#truth-' + id).textContent;
      assert.ok(text.length > 10);
      assert.ok(!text.includes('undefined'));
    }
  }
  assert.equal(seen.size, 12);
});

test('entry page exposes content before JavaScript and supports accessible updates', () => {
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<main /);
  assert.match(html, /aria-live="polite" aria-atomic="true"/);
  assert.match(html, /<script src="script.js" defer>/);
  assert.ok(!html.includes('user-scalable=no'));
  assert.ok(!script.includes('Tweak'));
});
