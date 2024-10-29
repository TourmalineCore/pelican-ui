import { test, expect } from '@playwright/experimental-ct-react';
import { Header } from './Header';
import '../../../public/image/button/parrot-close-eye.svg';

test(`HeaderTest`, async ({ page, mount }) => {
  await page.setViewportSize({
    width: 1366,
    height: 768,
  });

  await mount(<Header />);

  await expect(page.getByTestId(`header`)).toHaveScreenshot(`header-component.png`);
});
