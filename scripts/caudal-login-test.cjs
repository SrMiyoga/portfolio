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
  page.on("pageerror", (e) => errs.push("ERR " + e.message.slice(0, 140)));

  await page.goto(APP, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2500);

  // Fill login (Ionic inputs wrap a native <input>)
  const inputs = page.locator("ion-input input, input");
  await inputs.nth(0).fill("demo.caudal@example.com");
  await inputs.nth(1).fill("Demo1234!");
  await page.screenshot({ path: OUT + "/cr-login.png" });

  // Submit
  await page.getByText("Entrar", { exact: true }).click().catch(async () => {
    await page.locator("ion-button:has-text('Entrar')").click().catch(() => {});
  });

  // Wait for navigation + initial sync
  await page.waitForTimeout(7000);
  const url = page.url();
  const body = (await page.evaluate(() => document.body.innerText || "")).slice(0, 400);
  await page.screenshot({ path: OUT + "/cr-after-login.png", fullPage: false });

  console.log("URL:", url);
  console.log("HAS_CONJUNTA:", body.includes("conjunta") || body.includes("Conjunta"));
  console.log("HAS_EUR:", body.includes("€") || body.toLowerCase().includes("balance") || body.includes("Saldo"));
  console.log("BODY:", JSON.stringify(body.slice(0, 250)));
  console.log("ERRORS:", errs.slice(0, 4));
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
