/* Smoke test: new clean URLs render, old /resources/* URLs redirect */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const PORT = '5173'; // running dev server
const DEBUG = 9473;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CASES = [
  { url: '/academy', expect: '/academy', titlePart: 'ACADEMY' },
  { url: '/blog', expect: '/blog', titlePart: 'INSIGHTS, UPDATES, AND RESEARCH FROM THE AI TRADER TEAM' },
  { url: '/verification', expect: '/verification', titlePart: 'VERIFIED AI TRADING PERFORMANCE' },
  { url: '/blog/ai-trading-bots-arena-launch', expect: '/blog/ai-trading-bots-arena-launch', titlePart: 'AI TRADER LAUNCHES WORLD' },
  { url: '/resources/academy', expect: '/academy', titlePart: 'ACADEMY' },
  { url: '/resources/blog', expect: '/blog', titlePart: 'INSIGHTS, UPDATES, AND RESEARCH FROM THE AI TRADER TEAM' },
  { url: '/resources/verification', expect: '/verification', titlePart: 'VERIFIED AI TRADING PERFORMANCE' },
  { url: '/resources/blog/ai-trading-bots-arena-launch', expect: '/blog/ai-trading-bots-arena-launch', titlePart: 'AI TRADER LAUNCHES WORLD' },
];

async function main() {
  const chrome = spawn(
    process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    [`--remote-debugging-port=${DEBUG}`, '--remote-allow-origins=*', '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--user-data-dir=' + fs.mkdtempSync(path.join(os.tmpdir(), 'smoke-')), 'about:blank'],
    { stdio: 'ignore' }
  );
  let target = null;
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(`http://127.0.0.1:${DEBUG}/json/list`); target = (await r.json()).find((t) => t.type === 'page'); if (target) break; } catch {}
    await sleep(250);
  }
  if (!target) throw new Error('no chrome');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map();
  ws.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => { const r = await send('Runtime.evaluate', { expression: e, returnByValue: true }); return r.result?.result?.value; };
  await send('Runtime.enable'); await send('Page.enable');

  let fails = 0; let passes = 0;
  const check = async (name, cond) => { const v = await ev(cond); if (v === true) { passes++; console.log('PASS', name); } else { fails++; console.log('FAIL', name, '→', JSON.stringify(v)); } };

  for (const c of CASES) {
    await send('Page.navigate', { url: `http://localhost:${PORT}${c.url}` });
    await sleep(2600);
    await check(`url '${c.url}' → pathname '${c.expect}'`, `location.pathname === '${c.expect}'`);
    await check(`url '${c.url}' renders ${c.titlePart}`, `(document.body.innerText.toUpperCase()).includes('${c.titlePart}')`);
  }

  ws.close(); chrome.kill();
  console.log(`\nPASS ${passes} / FAIL ${fails}`);
  process.exit(fails ? 1 : 0);
}
main().catch((e) => { console.error('fatal', e); process.exit(2); });
