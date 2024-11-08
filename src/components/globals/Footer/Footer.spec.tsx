import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`FooterTests`, () => {
  test(`MobileTest`, mobileTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
  });

  await expect(getFooterByTestId({ page }))
    .toHaveScreenshot(`footer-mobile.png`);
}

function getFooterByTestId({ page }: { page: Page }) {
  return page.getByTestId(`footer`);
}
