import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, hideHeader, setViewportSize } from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`NewsArticleComponentTest`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.NEWS}/1`,
    });

    await hideHeader({
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
    height: 1236,
  });

  await expect(getNewsArticleByTestId({
    page,
  }))
    .toHaveScreenshot(`news-article-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 1085,
  });

  await expect(getNewsArticleByTestId({
    page,
  }))
    .toHaveScreenshot(`news-article-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1423,
  });

  await expect(getNewsArticleByTestId({
    page,
  }))
    .toHaveScreenshot(`news-article-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 1470,
  });

  await expect(getNewsArticleByTestId({
    page,
  }))
    .toHaveScreenshot(`news-article-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1932,
  });

  await expect(getNewsArticleByTestId({
    page,
  }))
    .toHaveScreenshot(`news-article-desktop-xl.png`);
}

function getNewsArticleByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`news-article`);
}
