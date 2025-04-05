/* eslint-disable no-console */
import { test } from '@playwright/test';
import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { axeCheckAndWriteReport, setViewportSize } from '../helpers';

const PAGE_NAME = `document-categories`;

test(`axeCheckUp Documents Categories Page Desktop`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await page.goto(`${AppRoute.DOCUMENTS}`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.DESKTOP,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp Documents Categories Page Tablet`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await page.goto(`${AppRoute.DOCUMENTS}`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.TABLET,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp Documents Categories Page Mobile`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.MOBILE,
  });

  await page.goto(`${AppRoute.DOCUMENTS}`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.MOBILE,
    pageName: PAGE_NAME,
  });
});
