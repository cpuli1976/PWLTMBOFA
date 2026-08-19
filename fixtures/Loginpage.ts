import { test as base, expect, type Page } from '@playwright/test';

type Myfixtures = { logInPage: Page };

export const test = base.extend<Myfixtures>({ logInPage: async ({ page }, use) => {

    await page.goto ("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel('Username').fill('student')
    await page.getByLabel('Password').fill('Password123')
    await page.getByRole ('button',{name: 'Submit'}).click()

    await use(page);
}
})
export {expect};
