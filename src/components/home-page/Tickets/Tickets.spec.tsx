import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`TicketsComponentTests`, () => {
  test(`MobileTest`, mobileTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: 375,
  });

  hideHeader({
    page,
  });

  await expect(getTicketsByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-mobile.png`);
}

function getTicketsByTestId({
  page,
}: { page: Page }) {
  return page.getByTestId(`tickets`);
}
