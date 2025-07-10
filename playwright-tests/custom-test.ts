import { test as base, expect } from '@playwright/test';
import fs from 'fs';
import { Breakpoint, BreakpointName } from '@/src/common/enum';

export type CustomTestFixtures = {
  goto: (path?: string) => void;
  goToComponentsPage: (path: string) => void;
  gotoWithDraftPreviewMode: (options?: {
    slug: string;
  }) => void;
  testScreenshotAtBreakpoint: (
    options: {
      testId: string;
      breakpoint: Breakpoint;
      breakpointName: BreakpointName;
      customNameOfScreenshotFiles?: string;
    }) => void;
  apiImageMock: () => void;
  setViewportSize: (options?: { width?: number; height?: number; }) => void;
};

// https://playwright.dev/docs/test-fixtures
// Extend base playwright test
export const test = base.extend<CustomTestFixtures>({
  goto: async ({
    page,
    apiImageMock,
  }, use) => {
    const goto = async (path: string = ``) => {
      await apiImageMock();

      await page.goto(path, {
        waitUntil: `networkidle`,
      });
    };

    // Use the fixture value in the test
    await use(goto);
  },

  goToComponentsPage: async ({
    page,
    apiImageMock,
  }, use) => {
    const goToComponentsPage = async (path: string) => {
      await apiImageMock();

      await page.goto(`/components/${path}`, {
        waitUntil: `networkidle`,
      });
    };

    await use(goToComponentsPage);
  },

  gotoWithDraftPreviewMode: async ({
    page,
    apiImageMock,
  }, use) => {
    const gotoWithDraftPreviewMode = async ({
      slug = ``,
    }: {
      slug?: string;
    } = {}) => {
      await apiImageMock();

      await page.goto(`/api/preview?secret=secret&slug=${slug}`);
    };

    await use(gotoWithDraftPreviewMode);
  },

  testScreenshotAtBreakpoint: async ({
    page,
    setViewportSize,
  }, use) => {
    const testScreenshotAtBreakpoint = async ({
      testId,
      breakpoint,
      breakpointName,
      customNameOfScreenshotFiles,
    }: {
      testId: string;
      breakpoint: Breakpoint;
      breakpointName: BreakpointName;
      customNameOfScreenshotFiles?: string;
    }) => {
      // This is necessary so that the tests do not crop the screenshots.
      await page.addStyleTag({
        content: `html, body, #__next { height: auto !important; min-height: 100% !important; }`,
      });

      await setViewportSize({
        width: breakpoint,
      });

      await expect(page.getByTestId(testId))
        .toHaveScreenshot(`${customNameOfScreenshotFiles || `${testId}-${breakpointName}`}.png`);
    };

    await use(testScreenshotAtBreakpoint);
  },

  setViewportSize: async ({
    page,
  }, use) => {
    const setViewportSize = async ({
      width = Breakpoint.MOBILE,
      height = 768,
    }: {
      width?: number;
      height?: number;
    } = {}) => {
      await page.setViewportSize({
        width,
        height,
      });
    };

    await use(setViewportSize);
  },

  apiImageMock: async ({
    page,
  }, use) => {
    const PNG_STUB_FILE = fs.readFileSync(`./playwright-tests/fixtures/stub.png`);

    const apiImageMock = async () => {
      await page.route(`**/_next/image*`, async (route, request) => {
        // Make sure that the browser is waiting for an image
        const accept = await request.headerValue(`accept`);
        const acceptsPng = accept?.includes(`image/*`);

        if (!acceptsPng) return route.continue();

        return route.fulfill({
          contentType: `image/png`,
          body: PNG_STUB_FILE,
        });
      });
    };

    await use(apiImageMock);
  },
});

export {
  expect,
  type Page,
} from '@playwright/test';
