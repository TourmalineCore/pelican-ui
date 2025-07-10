import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from '@/playwright-tests/custom-test';
import { AppRoute, ComponentName } from '@/src/common/enum';

test.describe(`NewsListComponentTest`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.NEWS_LIST);
  });

  test(`PaginationTest`, paginationTest);

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: `news-list`,
        breakpoint,
        breakpointName,
      });
    });
  }
});

async function paginationTest({
  page,
  setViewportSize,
  goto,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
  goto: CustomTestFixtures['goto'];
}) {
  // We are not testing pagination on a component page because there is no pagination logic on it.
  await goto(AppRoute.NEWS);

  await setViewportSize();

  await expect(getNewsCardByTestId({
    page,
  }))
    .toHaveCount(6);

  await page.getByTestId(`news-list-button`)
    .click();

  await expect(getNewsCardByTestId({
    page,
  }))
    .toHaveCount(7);
}

function getNewsCardByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(`cards-card`);
}
