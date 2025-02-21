import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, hideHeader, setViewportSize } from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`NewsSliderComponentTest`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.NEWS}/priglashaem-na-vstrechu-s-sotrudnikom-zooparka`,
    });

    await hideHeader({
      page,
    });
  });

  test(`NavigationTest`, navigationTest);

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopXlTest`, desktopXlTest);
});

async function navigationTest({
  page,
}: {
  page: Page,
}) {
  await page.getByTestId(`slider-card`)
    .first()
    .click();

  await expect(page)
    .toHaveURL(`${AppRoute.NEWS}/amurskii-tigr-i-kakie-u-nego-yest-problemi`);
}

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await expect(getNewsSliderByTestId({
    page,
  }))
    .toHaveScreenshot(`news-slider-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await expect(getNewsSliderByTestId({
    page,
  }))
    .toHaveScreenshot(`news-slider-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await expect(getNewsSliderByTestId({
    page,
  }))
    .toHaveScreenshot(`news-slider-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await expect(getNewsSliderByTestId({
    page,
  }))
    .toHaveScreenshot(`news-slider-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await expect(getNewsSliderByTestId({
    page,
  }))
    .toHaveScreenshot(`news-slider-desktop-xl.png`);
}

function getNewsSliderByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`news-slider`);
}
