import{test,expect,chromium} from '@playwright/test';

test ("Browser Context", async()=>{

    const browser = await chromium.launch()

    const context1 = await browser.newContext()
    const context2 = await browser.newContext()

    const context1_page= await context1.newPage()
    const context2_page= await context1.newPage()

    await context1_page.goto("https://www.saucedemo.com/")
    await context2_page.goto("https://www.saucedemo.com/")

    await context1_page.waitForTimeout(5000)
    await context2_page.waitForTimeout(5000)

    await context1.close()
    await context2.close()

    await browser.close()
})