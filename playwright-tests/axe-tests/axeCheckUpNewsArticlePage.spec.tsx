/* eslint-disable no-console */
import { test } from '@playwright/test';
import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { axeCheckAndWriteReport, setViewportSize } from '../global-helpers';

const PAGE_NAME = `news-article`;

test(`axeCheckUp News Article Page Desktop`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await page.goto(`${AppRoute.NEWS}/priglashaem-na-vstrechu-s-sotrudnikom-zooparka`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.DESKTOP,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp News Article Page Mobile`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.MOBILE,
  });

  await page.goto(`${AppRoute.NEWS}/priglashaem-na-vstrechu-s-sotrudnikom-zooparka`);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.MOBILE,
    pageName: PAGE_NAME,
  });
});
