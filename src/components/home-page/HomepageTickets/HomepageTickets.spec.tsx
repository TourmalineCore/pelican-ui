
import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  hideMap,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HomepageTicketsComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.HOME,
    });

    await hideHeader({
      page,
    });

    await hideSkipLink({
      page,
    });

    await hideMap({
      page,
    });

    await hideCookie({
      page,
    });
  });

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopXlTest`, desktopXlTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    height: 1270,
  });

  await expect(getTicketsByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 948,
  });

  await expect(getTicketsByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 572,
  });

  await expect(getTicketsByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 774,
  });

  await expect(getTicketsByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1056,
  });

  await expect(getTicketsByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-desktop-xl.png`);
}

function getTicketsByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`tickets`);
}
