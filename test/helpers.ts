import { Page } from "@playwright/test";

export async function setViewportSizeAndGoToPage({
  page,
  width = 375,
  height = 768,
}: {
  page: Page,
  width?: number,
  height?: number
}) {
  await page.setViewportSize({
    width,
    height,
  });
  await page.goto(`/`);
}
