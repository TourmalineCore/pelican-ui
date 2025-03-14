/* eslint-disable no-console */
import { test } from '@playwright/test';
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { axeCheckAndWriteReport, setViewportSize } from '../helpers';

test(`axeCheckUp Desktop XL`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await page.goto(AppRoute.HOME);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: `desktop-xl`,
    pageName: `home`,
  });
});

test(`axeCheckUp Tablet XL`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await page.goto(AppRoute.HOME);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: `tablet-xl`,
    pageName: `home`,
  });
});

test(`axeCheckUp Mobile`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.MOBILE,
  });

  await page.goto(AppRoute.HOME);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: `mobile`,
    pageName: `home`,
  });
});
