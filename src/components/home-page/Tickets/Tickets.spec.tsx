
import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`TicketsComponentTests`, () => {
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
  await setViewportSizeAndGoToPage({
    page,
    height: 1268,
  });

  hideHeader({
    page,
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
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET,
    height: 946,
  });

  hideHeader({
    page,
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
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET_XL,
    height: 568,
  });

  hideHeader({
    page,
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
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP,
    height: 770,
  });

  hideHeader({
    page,
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
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1054,
  });

  hideHeader({
    page,
  });

  await expect(getTicketsByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-desktop-xl.png`);
}

function getTicketsByTestId({
  page,
}: { page: Page }) {
  return page.getByTestId(`tickets`);
}