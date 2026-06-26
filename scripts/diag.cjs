const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  for (const reduced of [false, true]) {
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: reduced ? "reduce" : "no-preference",
    });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push("PAGEERR: " + e.message));
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    const info = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const wrap = h1 ? h1.closest("[style]") || h1.parentElement : null;
      const cs = wrap ? getComputedStyle(wrap) : null;
      return {
        h1Text: h1 ? h1.innerText.slice(0, 40) : "NO H1",
        wrapOpacity: cs ? cs.opacity : "n/a",
        wrapTransform: cs ? cs.transform : "n/a",
        bodyMatchesReduce: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      };
    });
    console.log("reduced=" + reduced, JSON.stringify(info), "errors=", errors.slice(0, 3));
    await ctx.close();
  }
  await browser.close();
})();
