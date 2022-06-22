//import { expect, Locator, Page } from '@playwright/test';

import { expect, Page, TestInfo } from '@playwright/test';
import { SaveScreenShot } from '../../helper/screen-shot-extract';

export class TenantOrder {
    readonly _page: Page;
    readonly _url: string;


    constructor(page: Page, url: string) {
        this._page = page;
        this._url = url;
    }

    public async OrderPageExists(testInfo: TestInfo) {

        await expect(this._page.locator('text=Orders')).toBeVisible();
        await SaveScreenShot(this._page, "Order Page Exist", testInfo);
        //testInfo.annotations.push({ type: "info", description: "Order Page Exists" });
        //const screenshotDashBoardBefore = await this._page.screenshot({ path: `./screenshots/${testInfo.project.name}_${testInfo.title}.png` });
        //await testInfo.attach('screenshot', { body: screenshotDashBoardBefore, contentType: 'image/png' });
    }

    public async ClickOnText(testInfo: TestInfo, text: string) {
        let dynamicSelector = `text=${text}`;

        await Promise.all([
            this._page.waitForNavigation(
                { url: `${this._url}/app/${text.toLowerCase()}` }
            ),
            this._page.locator(dynamicSelector).click()
        ]);

        await SaveScreenShot(this._page, `click on text ${text}`, testInfo);
    }

}