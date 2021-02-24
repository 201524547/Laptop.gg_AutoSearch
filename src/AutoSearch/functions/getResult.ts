import { Result, SearchTypeEnum, SearchTypeMapper } from 'AutoSearch/utils/result.type';
import { Page } from 'playwright';

export default async function getResult(page: Page, type: SearchTypeEnum): Promise<Result> {
  await page.click(`#productListArea >> li[data-sort-method="${SearchTypeMapper[type]}"] > a`);
  await page.waitForResponse('http://prod.danawa.com/list/ajax/getProductList.ajax.php');

  const products = await page.$$('#productListArea > div.main_prodlist.main_prodlist_list >> li.prod_item');
  products.map(async (product) => {
    const aa = 
  });

  return { imageSrc: '', model: '', spec: [] };
}
