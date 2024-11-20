import { Breakpoint } from "@/src/common/enum";
import { Page } from "@playwright/test";

export async function setViewportSizeAndGoToPage({
  page,
  width = Breakpoint.MOBILE,
  height = 768,
  path = `/`,
}: {
  page: Page,
  width?: number,
  height?: number,
  path?: string,
}) {
  await page.setViewportSize({
    width,
    height,
  });
  await page.goto(`${path}`);
}

export function hideHeader({
  page,
}: {
  page: Page,
}) {
  return page.getByTestId(`header`)
    .evaluate((element) => element.style.visibility = `hidden`);
}
