/* eslint-disable no-console */
import { test } from '@playwright/test';
import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { axeCheckAndWriteReport, setViewportSize } from '../global-helpers';

const PAGE_NAME = `home`;

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
    viewport: BreakpointName.DESKTOP_XL,
    pageName: PAGE_NAME,
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
    viewport: BreakpointName.TABLET_XL,
    pageName: PAGE_NAME,
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
    viewport: BreakpointName.MOBILE,
    pageName: PAGE_NAME,
  });
});
