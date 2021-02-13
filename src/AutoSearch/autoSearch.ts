import selectBluetooth from 'AutoSearch/functions/selectBluetooth';
import selectCPU from 'AutoSearch/functions/selectCPU';
import selectPort from 'AutoSearch/functions/selectPort';
import selectRam from 'AutoSearch/functions/selectRam';
import selectUsage from 'AutoSearch/functions/selectUsage';
import selectWeight from 'AutoSearch/functions/selectWeight';
import { RamTypeEnum } from 'AutoSearch/mapper/RamMapper';
import { UsageTypeEnum } from 'AutoSearch/mapper/UsageMapper';
import { Page } from 'playwright';

export class AutoSearch {
  static DANAWA_URL = 'http://prod.danawa.com/list/?cate=112758&15main_11_02';
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async search(): Promise<void> {
    const { page } = this;
    await page.goto(AutoSearch.DANAWA_URL);
    await page.click(`button.btn_all_opt`);

    await selectCPU(page);
    await selectRam(page, RamTypeEnum['16GB']);
    await selectBluetooth(page, true);
    await selectWeight(page, true);
    await selectPort(page, { hdmi: true, microSd: true, usbC: true, usbA: true, thunderBolt: true });
    await selectUsage(page, UsageTypeEnum.OFFICE);
  }
}
