const { chromium } = require("playwright");
const OUT =
  "C:/Users/pcasado/AppData/Local/Temp/claude/C--Users-pcasado/a4e29f36-775e-4572-b9a5-f6e119e8fe6a/scratchpad";
const BASE = "http://localhost:3000";

async function goto(page, url) {
  for (let i = 0; i < 25; i++) {
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 12000 });
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await goto(page, BASE + "/ca");
  await page.waitForTimeout(900);
  await page.screenshot({ path: OUT + "/ca-home-fold.png" });
  // CV designed (print look)
  await goto(page, BASE + "/ca/cv");
  await page.waitForTimeout(900);
  await page.emulateMedia({ media: "print" });
  await page.waitForTimeout(300);
  await page.screenshot({ path: OUT + "/ca-cv-print.png", fullPage: true });
  await browser.close();
  console.log("DONE");
})();
