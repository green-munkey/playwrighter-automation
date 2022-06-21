// example.spec.ts
import { test, expect } from '@playwright/test';

test('my test', async ({ page, browserName, userAgent, isMobile }) => {
  console.log(browserName);
  console.log(userAgent);
  console.log(isMobile);
  const screenShots = `screenshots/${browserName}`;

  //await page.goto('https://dev.trutik.io')//;

  // Go to https://dev.trutik.io/
  //await page.goto('https://dev.trutik.io/');
  // Click #navbar >> text=Login
  //await page.locator('#navbar >> text=Login').click();
  //await page.screenshot({ path: `${screenShots}/login-page.png` });
  await page.goto('https://dev.trutik.io/Account/Login');
  await page.screenshot({ path: `${screenShots}/login-page.png` });
  // Click text=Host Login
  await page.locator('text=Host Login').click();
  // Click [placeholder="Email or Username"]
  await page.locator('[placeholder="Email or Username"]').click();
  // Fill [placeholder="Email or Username"]
  await page.locator('[placeholder="Email or Username"]').fill('');
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('');
  await page.screenshot({ path: `${screenShots}/login-page-filled.png` });
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/tenants' }*/),
    page.locator('button:has-text("Log in")').click()
  ]);
  await page.screenshot({ path: `${screenShots}/tenant-carrier-dashboard.png` });
  // Click text=ENVIROTECHNWENVIROTECHNWCarrier 1/3/2022 >> [aria-label="Impersonate"]
  await page.locator('text=ENVIROTECHNWENVIROTECHNWCarrier 1/3/2022 >> [aria-label="Impersonate"]').click();
  await page.screenshot({ path: `${screenShots}/impersonate-popup.png` });
  // Click text=Useradmin admin (ENVIROTECHNW@trutik.com) >> button

  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/dashboard' }*/),
    page.locator('text=Useradmin admin (ENVIROTECHNW@trutik.com) >> button').click()
  ]);
  await page.screenshot({ path: `${screenShots}/dashboard-page.png` });

  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Orders
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/orders' }*/),
  //   page.locator('text=Orders').click()
  // ]);
  // // Click main header button >> nth=2
  // await page.locator('main header button').nth(2).click();
  // // Click .v-input.v-input--is-readonly.theme--light.v-text-field.v-text-field--prefix.v-text-field--single-line .v-input__control .v-input__slot
  // await page.locator('.v-input.v-input--is-readonly.theme--light.v-text-field.v-text-field--prefix.v-text-field--single-line .v-input__control .v-input__slot').click();
  // // Click div[role="menu"] >> text=Pacific Ag
  // await page.locator('div[role="menu"] >> text=Pacific Ag').click();
  // // Click textarea
  // await page.locator('textarea').click();
  // // Fill textarea
  // await page.locator('textarea').fill('test notest');
  // await page.screenshot({ path: `${screenShots}/order-fill-out.png` });
  // // Click button:has-text("Submit")
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/orders/edit/484' }*/),
  //   page.locator('button:has-text("Submit")').click()
  // ]);
  // await page.screenshot({ path: 'order.png' });
  // // Click span:has-text("Orders")
  // await page.locator('span:has-text("Orders")').click();
  // await expect(page).toHaveURL('https://dev.trutik.io/app/orders');
  // Click div[role="button"]:has-text("Lists")
  await page.locator('div[role="button"]:has-text("Lists")').click();
  // Click text=Customers >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/customers' }*/),
    page.locator('text=Customers').first().click()
  ]);
  await page.screenshot({ path: `${screenShots}/list-customers.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Drivers
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/drivers' }*/),
    page.locator('text=Drivers').click()
  ]);
  await page.screenshot({ path: `${screenShots}/list-drivers.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Expense types
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/expense-types' }*/),
    page.locator('text=Expense types').click()
  ]);
  await page.screenshot({ path: `${screenShots}/list-expense-type.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click a:nth-child(6) .v-list-item__content
  await page.locator('a:nth-child(6) .v-list-item__content').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/load-types');
  await page.screenshot({ path: `${screenShots}/list-load-type.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Locations
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/locations' }*/),
    page.locator('text=Locations').click()
  ]);
  await page.screenshot({ path: `${screenShots}/list-locations.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Product Categories
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/product-categories' }*/),
    page.locator('text=Product Categories').click()
  ]);
  await page.screenshot({ path: `${screenShots}/list-product-category.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Products >> nth=0
  await page.locator('text=Products').first().click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/products');
  await page.screenshot({ path: `${screenShots}/list-products.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Trucks
  await page.locator('text=Trucks').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/trucks');
  await page.screenshot({ path: `${screenShots}/list-trucks.png` });
  if (isMobile) {
    // Click .v-app-bar__nav-icon
    await page.locator('.v-app-bar__nav-icon').click();
  }
  // Click text=Customers
  await page.locator('text=Customers').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/customers');
  await page.screenshot({ path: `${screenShots}/list-customers.png` });
  //// Click button:nth-child(10)
  //await page.locator('button:nth-child(10)').click();
  //// Click button:nth-child(10)
  //await page.locator('button:nth-child(10)').click();

});