Record




Target:

Playwright Test

import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://dev.trutik.io/
  await page.goto('https://dev.trutik.io/');
  // Click #navbar >> text=Login
  await page.locator('#navbar >> text=Login').click();
  await expect(page).toHaveURL('https://dev.trutik.io/Account/Login');
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
  // Click button:has-text("Log in")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/tenants' }*/),
    page.locator('button:has-text("Log in")').click()
  ]);
  // Click text=angeltruckingllcangeltruckingllcCarrier 1/19/2022 >> [aria-label="Impersonate"]
  await page.locator('text=angeltruckingllcangeltruckingllcCarrier 1/19/2022 >> [aria-label="Impersonate"]').click();
  // Click text=admin admin (angel.garza@angeltruckingllc.com)Andres Montalvo (andres@trutik.com >> button >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/dashboard' }*/),
    page.locator('text=admin admin (angel.garza@angeltruckingllc.com)Andres Montalvo (andres@trutik.com >> button').first().click()
  ]);
  // Click text=Orders
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/orders' }*/),
    page.locator('text=Orders').click()
  ]);
  // Click text=000001
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/orders/edit/100' }*/),
    page.locator('text=000001').click()
  ]);
  // Click span:has-text("Orders")
  await page.locator('span:has-text("Orders")').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/orders');
  // Click text=Load Queue
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/load-queue' }*/),
    page.locator('text=Load Queue').click()
  ]);
  // Click div[role="button"]:has-text("Payables")
  await page.locator('div[role="button"]:has-text("Payables")').click();
  // Click text=Create Payables
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/payroll' }*/),
    page.locator('text=Create Payables').click()
  ]);
  // Click text=View Payables
  await page.locator('text=View Payables').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/view-paystubs');
  // Click div[role="button"]:has-text("Lists")
  await page.locator('div[role="button"]:has-text("Lists")').click();
  // Click text=Carrier
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/Carrier' }*/),
    page.locator('text=Carrier').click()
  ]);
  // Click .v-list-group.v-list-group--active > .v-list-group__items > a:nth-child(2) > .v-list-item__content
  await page.locator('.v-list-group.v-list-group--active > .v-list-group__items > a:nth-child(2) > .v-list-item__content').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/contractors');
  // Click text=Customers
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/customers' }*/),
    page.locator('text=Customers').click()
  ]);
  // Click text=Drivers
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/drivers' }*/),
    page.locator('text=Drivers').click()
  ]);
  // Click text=Expense Types
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/expense-types' }*/),
    page.locator('text=Expense Types').click()
  ]);
  // Click text=Load Types
  await page.locator('text=Load Types').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/load-types');
  // Click text=Locations
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/locations' }*/),
    page.locator('text=Locations').click()
  ]);
  // Click text=Product Categories
  await page.locator('text=Product Categories').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/product-categories');
  // Click text=Products >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/lists/products' }*/),
    page.locator('text=Products').first().click()
  ]);
  // Click text=Trailers
  await page.locator('text=Trailers').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/trailers');
  // Click text=Trucks
  await page.locator('text=Trucks').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/trucks');
  // Click text=Identifiers
  await page.locator('text=Identifiers').click();
  await expect(page).toHaveURL('https://dev.trutik.io/app/lists/identifiers');
  // Click div[role="button"]:has-text("Administration")
  await page.locator('div[role="button"]:has-text("Administration")').click();
  // Click text=Company Profile
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/company-profile' }*/),
    page.locator('text=Company Profile').click()
  ]);
  // Click text=Users
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.trutik.io/app/users' }*/),
    page.locator('text=Users').click()
  ]);
});