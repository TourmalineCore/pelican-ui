import { Breakpoint } from "@/src/common/enum";
import { Page } from "@playwright/test";

export async function setViewportSizeAndGoToPage({
  page,
  width = Breakpoint.MOBILE,
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

export function hideHeader({
  page,
}: {
  page: Page,
}) {
  return page.getByTestId(`header`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export function hideFooter({
  page,
}: {
  page: Page,
}) {
  return page.getByTestId(`footer`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export function hideTickets({
  page,
}: {
  page: Page,
}) {
  return page.getByTestId(`tickets`)
    .evaluate((element) => element.style.visibility = `hidden`);
}
