import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`TicketsComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.CONTACT_ZOO,
    });

    await hideHeader({
      page,
    });

    await hideSkipLink({
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
    height: 642,
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
    height: 429,
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
    height: 360,
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
    height: 517,
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
    height: 763,
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
