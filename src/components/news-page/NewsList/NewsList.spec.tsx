import { AppRoute } from '@/src/common/enum';
import { hideHeader, setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`ContactZooComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(AppRoute.NEWS);

    await hideHeader({
      page,
    });
  });

  test(`MobileTest`, mobileTest);

  // test(`TabletTest`, tabletTest);

  // test(`TabletXlTest`, tabletXlTest);

  // test(`DesktopTest`, desktopTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await expect(getNewsListByTestId({
    page,
  }))
    .toHaveScreenshot(`news-list-mobile.png`);
}

// async function tabletTest({
//   page,
// }: {
//   page: Page,
// }) {
//   await setViewportSize({
//     page,
//     width: Breakpoint.TABLET,
//   });

//   await expect(getNewsListByTestId({
//     page,
//   }))
//     .toHaveScreenshot(`contact-zoo-tablet.png`);
// }

// async function tabletXlTest({
//   page,
// }: {
//   page: Page,
// }) {
//   await setViewportSize({
//     page,
//     width: Breakpoint.TABLET_XL,
//   });

//   await expect(getNewsListByTestId({
//     page,
//   }))
//     .toHaveScreenshot(`contact-zoo-tablet-xl.png`);
// }

// async function desktopTest({
//   page,
// }: {
//   page: Page,
// }) {
//   await setViewportSize({
//     page,
//     width: Breakpoint.DESKTOP,
//   });

//   await expect(getNewsListByTestId({
//     page,
//   }))
//     .toHaveScreenshot(`contact-zoo-desktop.png`);
// }

function getNewsListByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`news-list`);
}
