import { Page } from 'playwright';

export default async function (page: Page): Promise<void> {
  await page.click(`#extendSearchOptionpriceCompare > div > dl:nth-child(7) >> button.btn_view_more`);
  await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(7) >> #searchAttributeValueRep617822');
}
