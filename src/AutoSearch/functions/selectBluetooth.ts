import { Page } from 'playwright';

const bluetoothSection = '#extendSearchOptionpriceCompare > div > dl:nth-child(45)';

export default async function selectBluetooth(page: Page, bluetooth: boolean): Promise<void> {
  if (bluetooth) page.check(`${bluetoothSection} >> #searchAttributeValue632735`);
}
