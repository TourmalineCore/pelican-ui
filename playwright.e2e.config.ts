import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: `./playwright-tests/e2e/cms-integration`,
  outputDir: `./playwright-tests/playwright-test-results/cms-integration`,
  timeout: 45000,
  /* Run tests in files in parallel */
  // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry twice locally and in pipelines to avoid extra flackiness after a retry or two */
  retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 4 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? `blob` : `html`,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.CI ? process.env.FRONTEND_URL : `http://localhost:3000`,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: `on-first-retry`,
    screenshot: `only-on-failure`,
  },
  projects: [
    {
      name: `setup`,
      testMatch: /cms-integration\.setup\.ts/,
      teardown: `teardown`,
    },
    {
      name: `teardown`,
      testMatch: /cms-integration\.teardown\.ts/,
    },
    {
      name: `cmsIntegration`,
      use: {
        ...devices[`Desktop Chrome`],
      },
      dependencies: [`setup`],
    },
  ],
});
