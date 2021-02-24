import { AutoSearch } from 'AutoSearch/autoSearch';
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1000 });

  const autoSearch = await new AutoSearch(page);
  await autoSearch.search();
  await autoSearch.getResults();

  return 0;
})();
