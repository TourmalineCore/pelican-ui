import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from '@/playwright-tests/custom-test';
import { Breakpoint, BreakpointName, ComponentName } from '@/src/common/enum';

const TEST_ID = `documents`;

test.describe(`DocumentsComponentTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.DOCUMENTS_LIST);
  });

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: TEST_ID,
        breakpoint,
        breakpointName,
      });
    });

    test(`Clicked${name}`, async ({
      page,
      testScreenshotAtBreakpoint,
    }) => {
      await documentsClickedTestAtBreakpoint({
        page,
        breakpoint,
        breakpointName,
        testScreenshotAtBreakpoint,
      });
    });
  }

  test(`TabActionTest`, tabAction);
});

async function documentsClickedTestAtBreakpoint({
  page,
  breakpoint,
  breakpointName,
  testScreenshotAtBreakpoint,
}: {
  page: Page;
  breakpoint: Breakpoint;
  breakpointName: BreakpointName;
  testScreenshotAtBreakpoint: CustomTestFixtures['testScreenshotAtBreakpoint'];
}) {
  await openDocumentsListPopupAccordions({
    page,
  });

  await testScreenshotAtBreakpoint({
    testId: TEST_ID,
    breakpoint,
    breakpointName,
    customNameOfScreenshotFiles: `${TEST_ID}-${breakpointName}-clicked`,
  });
}

async function tabAction({
  page,
}: {
  page: Page;
}) {
  await page.locator(`li`, {
    hasText: `2024`,
  })
    .click();

  await expect(page.locator(`li`, {
    hasText: `Протокол закупки №7731263`,
  }))
    .toBeVisible();
}

async function openDocumentsListPopupAccordions({
  page,
}: {
  page: Page;
}) {
  const allAccordions = await page.getByTestId(`accordion-trigger`)
    .all();

  for (const button of allAccordions) {
    // eslint-disable-next-line no-await-in-loop
    await button.click();
  }
}
