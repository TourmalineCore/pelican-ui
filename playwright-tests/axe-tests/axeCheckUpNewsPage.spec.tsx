/* eslint-disable no-console */
import { test } from '@playwright/test';
import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { axeCheckAndWriteReport, setViewportSize } from '../helpers';

const PAGE_NAME = `news`;

test(`axeCheckUp News Page Desktop`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await page.goto(`${AppRoute.NEWS}`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.DESKTOP,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp News Page Tablet`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await page.goto(`${AppRoute.NEWS}`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.TABLET,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp News Page Mobile`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.MOBILE,
  });

  await page.goto(`${AppRoute.NEWS}`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.MOBILE,
    pageName: PAGE_NAME,
  });
});
