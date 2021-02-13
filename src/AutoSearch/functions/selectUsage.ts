import { UsageMapper, UsageTypeEnum } from 'AutoSearch/mapper/UsageMapper';
import { Page } from 'playwright';

const usageSector = '#extendSearchOptionpriceCompare > div > dl:nth-child(65)';

export default async function selectUsage(page: Page, usage: UsageTypeEnum): Promise<void> {
  page.check(`${usageSector} >> ${UsageMapper[usage]}`);
}
