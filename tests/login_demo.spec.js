import { expect, test } from 'playwright/test';

test("Login test", async ({page}) => {
    const applitools = await page.goto("https://demo.applitools.com");
    await page.pause();

    await page.getByPlaceholder('Enter your username').fill('Admin');
    await page.getByPlaceholder('Enter your password').fill('admin123');
    await page.getByRole('link', { name: 'Sign in' }).click();
})