import { test } from '@playwright/test';
import AxePuppeteer from '@axe-core/playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { AppRoute, Breakpoint } from '@/src/common/enum';

test(`axeCheckUp`, async ({
  page,
}) => {
  await page.setViewportSize({
    width: Breakpoint.DESKTOP_XL,
    height: 1080,
  });
  await page.goto(AppRoute.HOME);

  const results = await new AxePuppeteer({
    page,
  } as any)
    .analyze();

  const violationIdsToCheck = [
    `color-contrast`,
    `area-alt`,
    `image-alt`,
    `image-redundant-alt`,
    `input-image-alt`,
    `duplicate-img-label`,
    `non-empty-alt`,
    `aria-label`,
    `aria-labelledby`,
    `color-contrast-enhanced`,
    `focusable-no-name`,
    `focusable-content`,
    `focusable-element`,
  ];

  const violationsToCheck = results
    .violations
    .filter((violation) => violationIdsToCheck.includes(violation.id));

  if (violationsToCheck.length > 0) {
    /* eslint-disable no-console */
    console.table(violationsToCheck.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length,
    })));
  } else {
    console.log(`No accessibility violations found.`);
    /* eslint-enable no-console */
  }

  const filePath = `./test/playwright-report/axeReport/axe-report.json`;

  mkdirSync(dirname(filePath), {
    recursive: true,
  });
  writeFileSync(filePath, JSON.stringify(violationsToCheck, null, 2));
});
