import { RamMapper, RamTypeEnum } from 'AutoSearch/mapper/RamMapper';
import { Page } from 'playwright';

const RamSector = '#extendSearchOptionpriceCompare > div > dl:nth-child(27)';

export default async function selectRam(page: Page, ram: RamTypeEnum): Promise<void> {
  if (ram <= RamTypeEnum['4GB']) page.check(`${RamSector}>> ${RamMapper[RamTypeEnum['4GB']]}`);
  if (ram <= RamTypeEnum['8GB']) page.check(`${RamSector}>> ${RamMapper[RamTypeEnum['8GB']]}`);
  if (ram <= RamTypeEnum['16GB']) page.check(`${RamSector}>> ${RamMapper[RamTypeEnum['16GB']]}`);
  if (ram <= RamTypeEnum['32GB']) page.check(`${RamSector}>> ${RamMapper[RamTypeEnum['32GB']]}`);
}
