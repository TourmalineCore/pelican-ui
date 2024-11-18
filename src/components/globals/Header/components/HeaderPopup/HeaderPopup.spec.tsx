import { Breakpoint } from '@/src/common/enum';
import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeaderPopupTests`, () => {
  test(`ActionTest`, actionTest);

  test(`MobilePopupTest`, mobilePopupTest);

  test(`TabletPopupTest`, tabletPopupTest);

  test(`TabletXlPopupTest`, tabletXlPopupTest);
});

async function actionTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await expect(page.getByTestId(`header-popup`))
    .toContainText(`Услуги`);
}

async function mobilePopupTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await compareWithScreenshot({
    page,
    screenName: `header-mobile-popup.png`,
    clipWidth: Breakpoint.MOBILE,
    clipHeight: 408,
  });
}

async function tabletPopupTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await compareWithScreenshot({
    page,
    screenName: `header-tablet-popup.png`,
    clipWidth: Breakpoint.TABLET,
    clipHeight: 448,
  });
}

async function tabletXlPopupTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await compareWithScreenshot({
    page,
    screenName: `header-tablet-xl-popup.png`,
    clipWidth: Breakpoint.TABLET_XL,
    clipHeight: 460,
  });
}

async function getHeaderPopupButtonByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`header-popup-button`);
}

async function compareWithScreenshot({
  page,
  screenName,
  clipWidth,
  clipHeight,
}:{
  page: Page,
  screenName: string;
  clipWidth: number;
  clipHeight: number;
}) {
  return expect(page)
    .toHaveScreenshot(screenName, {
      clip: {
        width: clipWidth,
        height: clipHeight,
        x: 0,
        y: 0,
      },
    });
}
