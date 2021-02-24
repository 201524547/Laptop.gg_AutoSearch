import { Result, SearchTypeEnum, SearchTypeMapper } from 'AutoSearch/utils/result.type';
import { Page } from 'playwright';

export default async function getResult(page: Page, type: SearchTypeEnum): Promise<Result> {
  await page.click(`#productListArea >> li[data-sort-method="${SearchTypeMapper[type]}"] > a`);

  const products = await page.$$(
    '#productListArea > div.main_prodlist.main_prodlist_list >> li.prod_item > div.prod_main_info',
  );
  try {
    const model = await products[0].$('div.prod_info > p > a').then((data) => data?.innerText());
    const imageSrc = await products[0].$('div.thumb_image > a > img').then((data) => data?.getAttribute('src'));
    const spec: string[] = [];
    const specs = await products[0].$$(`div.prod_info > dl.prod_spec_set > dd > div.spec_list > a`);
    for (const specication of specs) {
      const specItem = await specication.innerText();
      spec.push(specItem);
    }
    return { imageSrc, model, spec };
  } catch (error) {
    console.log(error);
    return { imageSrc: '', model: '', spec: [] };
  }
}
