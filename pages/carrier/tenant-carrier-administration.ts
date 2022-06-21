//import { expect, Locator, Page } from '@playwright/test';

import { expect, Page, TestInfo } from '@playwright/test';

export class HostTenant {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    // TODO
}

