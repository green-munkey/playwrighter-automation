//import { expect, Locator, Page } from '@playwright/test';

import { expect, Page, TestInfo } from '@playwright/test';
import { SaveScreenShot } from '../../helper/screen-shot-extract';

export class TenantDashboard {
    readonly _page: Page;

    constructor(page: Page) {
        this._page = page;
    }

    public async DashboardExists(testInfo: TestInfo) {

        await expect(this._page.locator('text=Receivables')).toBeVisible();

        await SaveScreenShot(this._page, `Dashboards Exists`, testInfo);
    }
}

