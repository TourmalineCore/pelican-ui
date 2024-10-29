import { test, expect } from '@playwright/experimental-ct-react';
import { Header } from './Header';

test(`HeaderComponentTest`, async ({ mount, page }) => {
  await page.setViewportSize({
    width: 1366,
    height: 768,
  });

  await mount(<Header />);

  await expect(page.getByTestId(`header`)).toHaveScreenshot(`header-component.png`);
});
