import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeroComponentTests`, () => {
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
    width: 378,
  });

  hideHeader({ page });

  await expect(getHeroByTestId({ page }))
    .toHaveScreenshot(`hero-mobile.png`);
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

  hideHeader({ page });

  await expect(getHeroByTestId({ page }))
    .toHaveScreenshot(`hero-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET_XL,
  });

  hideHeader({ page });

  await expect(getHeroByTestId({ page }))
    .toHaveScreenshot(`hero-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP,
  });

  hideHeader({ page });

  await expect(getHeroByTestId({ page }))
    .toHaveScreenshot(`hero-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 955,
  });

  hideHeader({ page });

  await expect(getHeroByTestId({ page }))
    .toHaveScreenshot(`hero-desktop-xl.png`);
}

function getHeroByTestId({ page }: { page: Page }) {
  return page.getByTestId(`hero`);
}
