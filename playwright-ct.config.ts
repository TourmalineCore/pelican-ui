import { defineConfig, devices } from '@playwright/experimental-ct-react';
import { resolve } from 'path';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: `./src/components/globals/Header/`,
  outputDir: `./test/pw-test-results/component-tests`,
  snapshotDir: `./test/pw-tests/screenshots/component-tests/base`,
  /* Maximum time one test can run for. */
  timeout: 10 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  workers: process.env.CI ? 4 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? `blob` : `html`,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: `on-first-retry`,

    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,

    ctViteConfig: {
      resolve: {
        alias: {
          '@': resolve(__dirname, `./`),
        },
      },
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: `chromium`,
      use: {
        ...devices[`Desktop Chrome`],
      },
    },
    {
      name: `firefox`,
      use: {
        ...devices[`Desktop Firefox`],
      },
    },
    {
      name: `webkit`,
      use: {
        ...devices[`Desktop Safari`],
      },
    },
  ],
});
