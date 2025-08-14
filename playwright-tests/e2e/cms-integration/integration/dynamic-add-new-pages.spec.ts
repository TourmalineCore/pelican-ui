import { Page, test } from "@/playwright-tests/custom-test";

test(`Dynamic addition of new pages`, async ({
  goto,
  page,
}: {
  page: Page;
}) => {
  await page.goto(process.env.API_URL || `http://localhost:1337`);

  await page.locator(`input[name=email]`)
    .fill(`admin@init-strapi-admin.strapi.io`);

  await page.locator(`input[name=password]`)
    .fill(`admin`);

  await page.getByText(`Remember me`)
    .click();

  await page.getByText(`Login`)
    .click();

  await page.getByText(`Content-Type Builder`)
    .click();

  const skipTour = await page.getByText(`Skip the tour`);

  if (await skipTour.isVisible()) {
    await skipTour.click();
  }

  await page.getByRole(`button`, {
    name: `Create new single type`,
  })
    .click();

  await page.locator(`input[name=displayName]`)
    .fill(`Test`);

  await page.getByRole(`button`, {
    name: `Continue`,
  })
    .click();

  await page.getByText(`Add new field`)
    .first()
    .click();

  await page.getByText(`Dynamic zone`)
    .click();

  await page.locator(`input[name=name]`)
    .fill(`blocks`);

  await page.getByRole(`button`, {
    name: `Add components to the zone`,
  })
    .click();

  await page.getByText(`Use an existing component`)
    .click();

  await page.getByRole(`combobox`)
    .click();

  await page.getByRole(`option`, {
    name: `shared`,
    exact: true,
  })
    .click();

  await page.click(`body`);

  await page.getByRole(`button`, {
    name: `Finish`,
  })
    .click();

  await page.getByRole(`button`, {
    name: `Save`,
  })
    .click();

  await page.waitForTimeout(30000);

  await page.goto(process.env.API_URL || `http://localhost:1337`, {
    waitUntil: `networkidle`,
  });

  await page.getByRole(`link`, {
    name: `Content Manager`,
  })
    .click();

  await page.getByRole(`link`, {
    name: `Test`,
  })
    .click();

  await page.getByRole(`button`, {
    name: `Add a component to blocks`,
  })
    .click();

  await page.getByRole(`button`, {
    name: `Категории`,
    exact: true,
  })
    .click();

  await page.getByText(`Категории`, {
    exact: true,
  })
    .click();

  await page.locator(`input[name='blocks.0.title']`)
    .fill(`Test category`);

  await page.getByRole(`button`, {
    name: `Publish`,
  })
    .click();

  await page.getByText(`Страница другое`)
    .click();

  await page.getByRole(`button`, {
    name: `Add a component to blocks`,
  })
    .click();

  await page.getByRole(`button`, {
    name: `Категории`,
    exact: true,
  })
    .click();

  await page.getByText(`Категории`, {
    exact: true,
  })
    .click();

  await page.getByText(`No entry yet. Click to add one.`)
    .click();

  await page.locator(`input[name='blocks.0.categories.0.title']`)
    .fill(`Test`);

  await page.locator(`input[name='blocks.0.categories.0.slug']`)
    .fill(`/test`);

  await page.getByRole(`button`, {
    name: `Publish`,
  })
    .click();

  await page.waitForTimeout(1500);

  await goto(`/other`);

  await page.getByText(`Test`)
    .click();

  await page.getByText(`Test category`)
    .isVisible();
});
