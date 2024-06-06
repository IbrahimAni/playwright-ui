import { expect, test } from "playwright/test";

test("Login test", async ({ page }) => {
    await page.goto("https://kitchen.applitools.com");

    await page.pause();

    //Check elemet is present
    const pageTitle = await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    if(pageTitle) {
        console.log("Page title is correct");
    } else {
        console.log("Page title is incorrect");
    }
});
