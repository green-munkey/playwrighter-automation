//import { expect, Locator, Page } from '@playwright/test';

import { Page, TestInfo } from '@playwright/test';
import { SaveScreenShot } from '../helper/screen-shot-extract';

export class LoginPage {
    readonly _page: Page;
    readonly _url: string;
    readonly _userName: string;
    readonly _passWord: string;

    constructor(page: Page, url: string, username: string, password: string) {
        this._page = page;
        this._url = url;
        this._userName = username;
        this._passWord = password;
    }

    public async GoToLoginPage() {
        await this._page.goto(`${this._url}/Account/Login`);
    }

    public async ClickLogin(testInfo: TestInfo) {
        await Promise.all([
            this._page.waitForNavigation(
                { url: `${this._url}/app/tenants` }
            ),
            this._page.locator('button:has-text("Log in")').click()
        ]);

        //await SaveScreenShot(`Click On Login`, testInfo);


    }

    public async FillLogin(testInfo: TestInfo) {
        await this._page.locator('text=Host Login').click();
        // Click [placeholder="Email or Username"]
        await this._page.locator('[placeholder="Email or Username"]').click();
        // Fill [placeholder="Email or Username"]
        await this._page.locator('[placeholder="Email or Username"]').fill(this._userName);
        // Click [placeholder="Password"]
        await this._page.locator('[placeholder="Password"]').click();
        // Fill [placeholder="Password"]
        await this._page.locator('[placeholder="Password"]').fill(this._passWord);

        //await SaveScreenShot(`Fill Sign In Screen`, testInfo);

    }
}

