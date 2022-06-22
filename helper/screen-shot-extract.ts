import { Page, TestInfo } from "@playwright/test";

export async function SaveScreenShot(page: Page, description: string, testInfo: TestInfo) {
    testInfo.annotations.push({ type: "info", description: description });
    const screenshotDashBoardBefore = await page.screenshot({ path: `./screenshots/${testInfo.project.name}_${testInfo.title}.png` });
    await testInfo.attach('screenshot', { body: screenshotDashBoardBefore, contentType: 'image/png' });
}
