import { AppRoute, Breakpoint } from "@/src/common/enum";
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "../custom-test";

test.describe(`Scroll to top after switching between pages`, scrollToTop);

async function scrollToTop() {
  test(`
    GIVEN main page
    WHEN user scrolls to footer
    AND clicks on a link to go to news page
    SHOULD return scroll to the top after redirect to news page
  `, async ({
    goto,
    page,
    setViewportSize,
  }: {
    goto: CustomTestFixtures['goto'];
    page: Page;
    setViewportSize: CustomTestFixtures['setViewportSize'];
  }) => {
    setViewportSize({
      width: Breakpoint.DESKTOP,
    });
    await goto(AppRoute.HOME);

    await expect(await getScrollY({
      page,
    }))
      .toBe(0);

    const firstFooterOfficialLink = await page.getByTestId(`footer-official-link`)
      .first();

    await firstFooterOfficialLink
      .scrollIntoViewIfNeeded();

    await expect(await getScrollY({
      page,
    }))
      .not
      .toBe(0);

    const currentUrl = page.url();

    await page.getByTestId(`header-navigation-link`)
      .filter({
        hasText: `Новости`,
        visible: true,
      })
      .click();

    await page.waitForURL((url) => url.toString() !== currentUrl, {
      waitUntil: `networkidle`,
    });

    await expect(page.getByTestId(`news-list`))
      .toBeVisible();

    await expect(await getScrollY({
      page,
    }))
      .toBe(0);
  });
}

async function getScrollY({
  page,
}: {
  page: Page;
}) {
  return page.evaluate(() => window.scrollY);
}
