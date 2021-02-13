import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('http://prod.danawa.com/list/?cate=112758&15main_11_02');
})();
