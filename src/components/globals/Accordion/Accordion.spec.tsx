import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`AccordionTests`, () => {
  test(`ActionTest`, actionTest);
});

async function actionTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
  });

  await expect(page.getByTestId(`accordion-content`))
    .toBeHidden();

  await getAccordionByTestId({
    page,
  })
    .then((button) => button.click());

  await expect(page.getByTestId(`accordion-content`))
    .toBeVisible;
}

async function getAccordionByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`accordion`)
    .first();
}
