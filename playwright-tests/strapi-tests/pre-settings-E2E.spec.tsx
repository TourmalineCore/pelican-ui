import test, { Page } from "@playwright/test";
import { gotoPage } from "../helpers";
import { authenticate, enableApi } from "./strapi-helpers";

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

  await authenticate({
    page,
  });

  await enableApi({
    page,
  });
}
