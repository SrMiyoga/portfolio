const { chromium } = require("playwright");

const OUT =
  "C:/Users/pcasado/AppData/Local/Temp/claude/C--Users-pcasado/a4e29f36-775e-4572-b9a5-f6e119e8fe6a/scratchpad";
const BASE = "http://localhost:3000";

async function goto(page, url) {
  for (let i = 0; i < 20; i++) {
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 8000 });
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
  throw new Error("server not reachable: " + url);
}

// Scroll through the whole page to trigger all scroll-reveal animations,
// then return to the top so the full-page shot shows everything revealed.
async function settle(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = Math.round(window.innerHeight * 0.6);
    let y = 0;
    const max = () => document.body.scrollHeight;
    while (y < max()) {
      window.scrollTo(0, y);
      await sleep(180);
      y += step;
    }
    window.scrollTo(0, max());
    await sleep(300);
    window.scrollTo(0, 0);
    await sleep(200);
  });
  await page.waitForTimeout(400);
}

(async () => {
  const browser = await chromium.launch();

  // Desktop dark
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();

  await goto(page, BASE + "/");
  await settle(page);
  await page.screenshot({ path: OUT + "/p-home-dark.png", fullPage: true });

  await goto(page, BASE + "/caudal");
  await settle(page);
  await page.screenshot({ path: OUT + "/p-caudal.png", fullPage: true });

  await goto(page, BASE + "/cv");
  await page.waitForTimeout(400);
  await page.screenshot({ path: OUT + "/p-cv.png", fullPage: true });

  await goto(page, BASE + "/en");
  await page.waitForTimeout(400);
  await page.screenshot({ path: OUT + "/p-home-en-fold.png", fullPage: false });

  // Light theme (next-themes stores under "theme")
  await ctx.addInitScript(() => {
    try {
      localStorage.setItem("theme", "light");
    } catch {}
  });
  await goto(page, BASE + "/");
  await page.waitForTimeout(500);
  await page.screenshot({ path: OUT + "/p-home-light-fold.png", fullPage: false });
  await ctx.close();

  // Mobile
  const mctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const mpage = await mctx.newPage();
  await goto(mpage, BASE + "/");
  await settle(mpage);
  await mpage.screenshot({ path: OUT + "/p-home-mobile.png", fullPage: true });
  await mctx.close();

  await browser.close();
  console.log("DONE");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
