import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';

test('Validation of Login page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await loginPage.login('student', 'Password123');

    //await expect(loginPage.successmessage).toHaveText('Logged In Successfully');

});