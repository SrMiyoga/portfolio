const { chromium } = require("playwright");
const OUT =
  "C:/Users/pcasado/AppData/Local/Temp/claude/C--Users-pcasado/a4e29f36-775e-4572-b9a5-f6e119e8fe6a/scratchpad";
const APP = "http://localhost:4300";

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  const errs = [];
  page.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 120)));
  page.on("pageerror", (e) => errs.push("PAGEERR " + e.message.slice(0, 120)));

  await page.goto(APP, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);
  const url = page.url();
  const title = await page.title();
  const bodyText = (await page.evaluate(() => document.body.innerText || "")).slice(0, 300);
  await page.screenshot({ path: OUT + "/c-initial.png" });
  console.log("URL:", url);
  console.log("TITLE:", title);
  console.log("TEXT:", JSON.stringify(bodyText));
  console.log("ERRORS:", errs.slice(0, 5));
  await browser.close();
})();
