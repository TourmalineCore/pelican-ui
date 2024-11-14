
import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`TicketsComponentTests`, () => {
  test(`MobileTest`, mobileTest);
  test(`TabletTest`, tabletTest);
  test(`TabletXlTest`, tabletTestXl);
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

async function tabletTestXl({
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

function getTicketsByTestId({
  page,
}: { page: Page }) {
  return page.getByTestId(`tickets`);
}
