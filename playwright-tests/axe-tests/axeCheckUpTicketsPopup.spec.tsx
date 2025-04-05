/* eslint-disable no-console */
import { test } from '@playwright/test';
import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { axeCheckAndWriteReport, openTicketsPopupAccordions, setViewportSize } from '../helpers';

const PAGE_NAME = `tickets-popup`;

test(`axeCheckUp Tickets Popup Desktop XL`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await page.goto(AppRoute.HOME);

  await page.getByTestId(`footer-tickets-popup-button`)
    .click();

  await openTicketsPopupAccordions({
    page,
  });

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.DESKTOP_XL,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp Tickets Popup Tablet XL`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await page.goto(AppRoute.HOME);

  await page.getByTestId(`footer-tickets-popup-button`)
    .click();

  await openTicketsPopupAccordions({
    page,
  });

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.TABLET_XL,
    pageName: PAGE_NAME,
  });
});

test(`axeCheckUp Tickets Popup Mobile`, async ({
  page,
}) => {
  await setViewportSize({
    page,
    width: Breakpoint.MOBILE,
  });

  await page.goto(AppRoute.HOME);

  await page.getByTestId(`footer-tickets-popup-button`)
    .click();

  await openTicketsPopupAccordions({
    page,
  });

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.MOBILE,
    pageName: PAGE_NAME,
  });
});
