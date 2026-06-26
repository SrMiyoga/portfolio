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
  throw new Error("unreachable " + url);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1100, height: 1400 } });

  // Designed CV — screen
  await goto(page, BASE + "/cv");
  await page.waitForTimeout(1200);
  await page.screenshot({ path: OUT + "/cv2-design-screen.png", fullPage: true });

  // Designed CV — print emulation (what the PDF looks like)
  await page.emulateMedia({ media: "print" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: OUT + "/cv2-design-print.png", fullPage: true });
  await page.pdf({ path: OUT + "/cv2-design.pdf", format: "A4", printBackground: true });
  await page.emulateMedia({ media: "screen" });

  // ATS CV — print emulation
  await goto(page, BASE + "/cv/ats");
  await page.waitForTimeout(800);
  await page.emulateMedia({ media: "print" });
  await page.screenshot({ path: OUT + "/cv2-ats-print.png", fullPage: true });

  await browser.close();
  console.log("DONE");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
