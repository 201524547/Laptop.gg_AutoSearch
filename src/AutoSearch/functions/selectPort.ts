import { Port } from 'AutoSearch/utils/PortMapper';
import { Page } from 'playwright';

export default async function selectPort(page: Page, port: Port): Promise<void> {
  if (port.hdmi)
    await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(46) >> #searchAttributeValue21942');
  if (port.microSd)
    await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(52) >> #searchAttributeValue624581');
  if (port.usbC)
    await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(47) >> #searchAttributeValue194982');
  if (port.usbA) {
    await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(47) >> #searchAttributeValue174147');
  }
  if (port.thunderBolt) {
    await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(48) >> #searchAttributeValue657833');
    await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(48) >> #searchAttributeValue657836');
    await page.check('#extendSearchOptionpriceCompare > div > dl:nth-child(48) >> #searchAttributeValue657839');
  }
}
