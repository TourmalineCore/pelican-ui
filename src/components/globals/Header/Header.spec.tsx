import { getStrapiURL } from '@/src/common/utils/getStrapiURL';
import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { Page, Route } from '@playwright/test';
import { test, expect } from 'playwright-ssr';

test.describe(`HeaderComponentTests`, () => {
  test.beforeEach(async ({ webServer }) => {
    await webServer.route(getStrapiURL(`/api/navigations`), async (route: Route) => {
      const mockResponse = [
        {
          id: 1,
          name: `Услуги`,
        },
        {
          id: 2,
          name: `Правила посещения`,
        },
        {
          id: 3,
          name: `Адрес`,
        },
        {
          id: 4,
          name: `Льготы`,
        },
        {
          id: 5,
          name: `Документация`,
        },
      ];

      await route.fulfill({
        status: 200,
        contentType: `application/json`,
        body: JSON.stringify({ data: mockResponse }),
      });
    });
  });
  test(`MobileTest`, mobileTest);

  test(`DesktopTest`, desktopTest);
});

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  // await page.route(`**/logo-desktop.0f1db5cc.svg`, async (route) => {
  //   await route.fulfill({
  //     contentType: `image/svg+xml`,
  //     path: `public/images/header/logo.svg`,
  //   });
  // });

  await setViewportSizeAndGoToPage({
    page,
    width: 1366,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header.png`);
}

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: 375,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header-mobile.png`);
}

function getHeaderByTestId({ page }: { page: Page }) {
  return page.getByTestId(`header`);
}
