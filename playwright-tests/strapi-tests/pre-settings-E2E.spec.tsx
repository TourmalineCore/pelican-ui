import test, { Page } from "@playwright/test";
import { gotoPage } from "../helpers";
import { authenticate, enableApi, register } from "./strapi-helpers";

test.describe.skip(`Pre-settings`, () => {
  test(` Pre-settings script`, preSettings);
});

async function preSettings({
  page,
}: {
  page: Page
}) {
  await gotoPage({
    page,
    url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/`,
  });

  const isRegistrationPage = await page.getByRole(`textbox`, {
    name: `First name`,
  })
    .isVisible();

  if (isRegistrationPage) {
    await register({
      page,
    });
  } else {
    await authenticate({
      page,
    });
  }

  await enableApi({
    page,
  });
}
