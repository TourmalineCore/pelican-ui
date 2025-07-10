import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from '@/playwright-tests/custom-test';
import { openTicketsPopupAccordions } from '@/playwright-tests/global-helpers';
import { Breakpoint, BreakpointName, ComponentName } from '@/src/common/enum';

const TEST_ID = `tickets-popup`;

test.describe(`TicketsPopupComponentTests`, () => {
  test.beforeEach(async ({
    page,
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.TICKET_POPUP);

    await page.addStyleTag({
      content: `
    *:focus {
      outline: none !important;
      box-shadow: none !important;
    }`,
    });
  });

  test(`ActionTest`, actionTest);

  test(`MobileTest`, mobileTest);

  test(`MobileClickedTest`, mobileClickedTest);

  test(`TabletTest`, tabletTest);

  test(`TabletClickedTest`, tabletClickedTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`TabletXlClickedTest`, tabletXlClickedTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopClickedTest`, desktopClickedTest);

  test(`DesktopXlTest`, desktopXlTest);

  test(`DesktopXlClickedTest`, desktopXlClickedTest);
});

async function actionTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize();

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toContainText(`Билеты`);

  await page.getByTestId(`tickets-popup-close-button`)
    .click();

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toBeHidden();
}

async function mobileTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    height: 812,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.MOBILE}.png`);
}

async function mobileClickedTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    height: 1780,
  });

  await openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.MOBILE}-clicked.png`);
}

async function tabletTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.TABLET,
    height: 781,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET}.png`);
}

async function tabletClickedTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.TABLET,
    height: 1556,
  });

  await openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET}-clicked.png`);
}

async function tabletXlTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.TABLET_XL,
    height: 809,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET_XL}.png`);
}

async function tabletXlClickedTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.TABLET_XL,
    height: 1747,
  });

  await openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET_XL}-clicked.png`);
}

async function desktopTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.DESKTOP,
    height: 787,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP}.png`);
}

async function desktopClickedTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.DESKTOP,
    height: 1704,
  });

  await openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP}-clicked.png`);
}

async function desktopXlTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.DESKTOP_XL,
    height: 1080,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

async function desktopXlClickedTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.DESKTOP_XL,
    height: 2170,
  });

  await openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP_XL}-clicked.png`);
}

function getTicketsPopupByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}
