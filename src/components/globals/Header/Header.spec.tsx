import { Breakpoint } from '@/src/common/enum';
import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test'; // Убедитесь, что тип Page импортируется из playwright
import {
  injectAxe, checkA11y, getViolations,
} from 'axe-playwright';

test.describe(`HeaderComponentTests`, () => {
  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

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
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header-tablet.png`);
}

async function desktopTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP,
  });

  await expect(getHeaderByTestId({ page })).toHaveScreenshot(`header-desktop.png`);

  await injectAxe(page);
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true },
    runOnly: {
      type: `tag`,
      values: [`wcag2a`],
    },
  });

  const violations = await getViolations(page, {

    runOnly: {
      type: `tag`,
      values: [`wcag2a`],
    },
  });

  expect(violations.length).toBe(0);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header-desktop-xl.png`);
}

function getHeaderByTestId({ page }: { page: Page }) {
  return page.getByTestId(`header`);
}
