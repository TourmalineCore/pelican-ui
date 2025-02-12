import { test } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { AppRoute, Breakpoint } from '@/src/common/enum';

test(`axeCheckUp Desktop XL`, async ({
  page,
}) => {
  await page.setViewportSize({
    width: Breakpoint.DESKTOP_XL,
    height: 1080,
  });

  await page.goto(AppRoute.HOME);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  // Run axe-core analysis
  const results = await page.evaluate(async () => await window.axe.run());

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

  const violationsToCheck = results.violations.filter((violation) => violationIdsToCheck.includes(violation.id));

  if (violationsToCheck.length > 0) {
    console.table(violationsToCheck.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length,
    })));

    throw new Error(`Accessibility violations found: ${violationsToCheck.length}`);
  } else {
    console.log(`No accessibility violations found.`);
  }

  const filePath = `./test/playwright-report/axeReport/axe-report.json`;
  mkdirSync(dirname(filePath), {
    recursive: true,
  });

  writeFileSync(filePath, JSON.stringify(violationsToCheck, null, 2));
});

test(`axeCheckUp Tablet XL`, async ({
  page,
}) => {
  await page.setViewportSize({
    width: Breakpoint.TABLET_XL,
    height: 1080,
  });

  await page.goto(AppRoute.HOME);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  const results = await page.evaluate(async () => await window.axe.run());

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

  const violationsToCheck = results.violations.filter((violation) => violationIdsToCheck.includes(violation.id));

  if (violationsToCheck.length > 0) {
    console.table(violationsToCheck.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length,
    })));

    throw new Error(`Accessibility violations found: ${violationsToCheck.length}`);
  } else {
    console.log(`No accessibility violations found.`);
  }

  const filePath = `./test/playwright-report/axeReport/axe-report.json`;
  mkdirSync(dirname(filePath), {
    recursive: true,
  });

  writeFileSync(filePath, JSON.stringify(violationsToCheck, null, 2));
});

test(`axeCheckUp Mobile`, async ({
  page,
}) => {
  await page.setViewportSize({
    width: Breakpoint.MOBILE,
    height: 1080,
  });

  await page.goto(AppRoute.HOME);

  await page.addScriptTag({
    path: require.resolve(`axe-core/axe.min.js`),
  });

  const results = await page.evaluate(async () => await window.axe.run());

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

  const violationsToCheck = results.violations.filter((violation) => violationIdsToCheck.includes(violation.id));

  if (violationsToCheck.length > 0) {
    console.table(violationsToCheck.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length,
    })));
    throw new Error(`Accessibility violations found: ${violationsToCheck.length}`);
  } else {
    console.log(`No accessibility violations found.`);

    const filePath = `./test/playwright-report/axeReport/axe-report.json`;
    mkdirSync(dirname(filePath), {
      recursive: true,
    });

    writeFileSync(filePath, JSON.stringify(violationsToCheck, null, 2));
  }
});
