/* eslint-disable no-console */
import { test } from '@playwright/test';
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { axeCheckAndWriteReport, setViewportSize } from '../helpers';

const PAGE_NAME = `visiting-rules`;

test(`axeCheckUp Visiting Rules Page Tablet`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await page.goto(AppRoute.VISITING_RULES);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: `tablet`,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp Visiting Rules Page Mobile`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.MOBILE,
  });

  await page.goto(AppRoute.VISITING_RULES);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: `mobile`,
    pageName: PAGE_NAME,
  });
});
