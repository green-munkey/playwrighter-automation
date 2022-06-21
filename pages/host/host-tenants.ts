//import { expect, Locator, Page } from '@playwright/test';

import { expect, Page, TestInfo } from '@playwright/test';

export class HostTenant {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public async HostDashboardLoaded(testInfo: TestInfo) {

        await expect(this.page.locator('text=Tenancy name')).toBeVisible();

        testInfo.annotations.push({ type: "info", description: "Tenant Dashboard" });
        const screenshotDashBoardBefore = await this.page.screenshot({ path: `./screenshots/${testInfo.project.name}_${testInfo.title}.png` });
        await testInfo.attach('screenshot', { body: screenshotDashBoardBefore, contentType: 'image/png' });

    }

    public async ImpersonateTenant(testInfo: TestInfo) {

        await this.page.locator('text=ENVIROTECHNWENVIROTECHNWCarrier 1/3/2022 >> [aria-label="Impersonate"]').click();

        testInfo.annotations.push({ type: "info", description: "Fill Form For Admin" });
        const screenshotLogin = await this.page.screenshot();
        await testInfo.attach('screenshot', { body: screenshotLogin, contentType: 'image/png' });

    }
    public async LoginAsUser(testInfo: TestInfo) {
        await Promise.all([
            this.page.waitForNavigation(
                { url: `${process.env.ENVIROMENT_URL}/app/dashboard` }
            ),
            this.page.locator('text=Useradmin admin (ENVIROTECHNW@trutik.com) >> button').click()
        ]);
    }
}

