//import { expect, Locator, Page } from '@playwright/test';

import { Page, TestInfo } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly url: string;
    readonly userName: string;
    readonly passWord: string;

    constructor(page: Page, url: string, username: string, password: string) {
        this.page = page;
        this.url = url;
        this.userName = username;
        this.passWord = password;
    }

    public async GoToLoginPage() {
        await this.page.goto(`${this.url}/Account/Login`);
    }

    public async ClickLogin(testInfo: TestInfo) {
        await Promise.all([
            this.page.waitForNavigation(
                { url: `${this.url}/app/tenants` }
            ),
            this.page.locator('button:has-text("Log in")').click()
        ]);

        testInfo.annotations.push({ type: "info", description: "After Fill Login Form For Admin" });
        const screenshotHostPage = await this.page.screenshot({ path: `./screenshots/${testInfo.project.name}_${testInfo.title}.png` });
        await testInfo.attach('screenshot', { body: screenshotHostPage, contentType: 'image/png' });


    }

    public async FillLogin(testInfo: TestInfo) {
        await this.page.locator('text=Host Login').click();
        // Click [placeholder="Email or Username"]
        await this.page.locator('[placeholder="Email or Username"]').click();
        // Fill [placeholder="Email or Username"]
        await this.page.locator('[placeholder="Email or Username"]').fill(this.userName);
        // Click [placeholder="Password"]
        await this.page.locator('[placeholder="Password"]').click();
        // Fill [placeholder="Password"]
        await this.page.locator('[placeholder="Password"]').fill(this.passWord);

        testInfo.annotations.push({ type: "info", description: "Fill Form For Admin" });
        //const screenshotLogin = await this.page.screenshot();
        //{ path:`./screenshots/${testInfo.title}.png` }
        const screenshotLogin = await this.page.screenshot({ path: `./screenshots/${testInfo.project.name}_${testInfo.title}.png` });
        await testInfo.attach('screenshot', { body: screenshotLogin, contentType: 'image/png' });

    }
}

