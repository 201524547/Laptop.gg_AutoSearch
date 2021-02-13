import { Page } from 'playwright';

const weightSection = `#extendSearchOptionpriceCompare > div > dl:nth-child(62)`;

export default async function selectWeight(page: Page, weight: boolean): Promise<void> {
  if (weight) {
    page.check(`${weightSection} >> #searchAttributeValue677198`);
    page.check(`${weightSection} >> #searchAttributeValue6296`);
  }
}
