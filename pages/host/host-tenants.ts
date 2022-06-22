//import { expect, Locator, Page } from '@playwright/test';

import { expect, Page, TestInfo } from '@playwright/test';

export class HostTenant {
    readonly _page: Page;
    readonly _adminTenantImpersonate: string;
    readonly _adminTenantImpersonateUser: string;

    constructor(page: Page, adminTenantImpersonate: string, adminTenantImpersonateUser: string) {
        this._page = page;
        this._adminTenantImpersonate = adminTenantImpersonate;
        this._adminTenantImpersonateUser = adminTenantImpersonateUser;
    }
    public async HostDashboardLoaded(testInfo: TestInfo) {

        await expect(this._page.locator('text=Tenancy name')).toBeVisible();

        testInfo.annotations.push({ type: "info", description: "Host Tenant Dashboard" });
        const screenshotDashBoardBefore = await this._page.screenshot({ path: `./screenshots/${testInfo.project.name}_${testInfo.title}.png` });
        await testInfo.attach('screenshot', { body: screenshotDashBoardBefore, contentType: 'image/png' });

    }

    public async ImpersonateTenant(testInfo: TestInfo) {
        let selector = `text=${this._adminTenantImpersonate} >> [aria-label="Impersonate"]`;
        console.log(selector);

        await this._page.locator(`${selector}`).click();

        testInfo.annotations.push({ type: "info", description: "Fill Form For Admin" });
        const screenshotLogin = await this._page.screenshot();
        await testInfo.attach('screenshot', { body: screenshotLogin, contentType: 'image/png' });

    }
    public async LoginAsUser(testInfo: TestInfo) {
        let selector = `text=${this._adminTenantImpersonateUser} >> button`;
        console.log(selector);
        await Promise.all([
            this._page.waitForNavigation(
                { url: `${process.env.ENVIROMENT_URL}/app/dashboard` }
            ),

            this._page.locator(`${selector}`).first().click()
        ]);
    }
}

