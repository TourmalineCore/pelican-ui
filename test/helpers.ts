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
