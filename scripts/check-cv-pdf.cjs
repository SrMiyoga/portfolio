const { chromium } = require("playwright");
const fs = require("fs");
const OUT =
  "C:/Users/pcasado/AppData/Local/Temp/claude/C--Users-pcasado/a4e29f36-775e-4572-b9a5-f6e119e8fe6a/scratchpad";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const [loc, path] of [["es", "/cv"], ["en", "/en/cv"]]) {
    await page.goto("http://localhost:3000" + path, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });
    await page.waitForTimeout(300);
    const file = OUT + "/cv-" + loc + ".pdf";
    await page.pdf({ path: file, format: "A4", printBackground: true });
    const kb = Math.round(fs.statSync(file).size / 1024);
    console.log(`cv-${loc}.pdf -> ${kb} KB`);
    // also a print-emulated screenshot to eyeball
    await page.screenshot({ path: OUT + "/cv-" + loc + "-print.png", fullPage: true });
  }
  await browser.close();
  console.log("DONE");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
