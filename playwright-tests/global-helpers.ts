import { Breakpoint } from "@/src/common/enum";
import { Page } from "@playwright/test";
import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

export async function gotoPage({
  page,
  url,
  useNetworkidle = true,
}: {
  page: Page;
  url: string;
  useNetworkidle?: boolean;
}) {
  // Allows you to accurately wait for content on the site to load.
  /* Do not use networkidle it for sections where requests take a long time,
     otherwise the test may fail due to a timeout.
  */
  // networkidle - https://playwright.dev/docs/api/class-frame#frame-goto
  await page.goto(url, {
    ...(
      useNetworkidle && {
        waitUntil: `networkidle`,
      }),
  });
}

export async function setViewportSize({
  page,
  width = Breakpoint.MOBILE,
  height = 768,
}: {
  page: Page;
  width?: number;
  height?: number;
}) {
  await page.setViewportSize({
    width,
    height,
  });
}

export async function hideHeader({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`header`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideCookie({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`cookie`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideSkipLink({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`skip-link`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideFooter({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`footer`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideTickets({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`tickets`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideMap({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`map`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideTextAndMedia({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`text-and-media`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function axeCheckAndWriteReport({
  page,
  viewport,
  pageName,
}: {
  page: Page;
  viewport: string;
  pageName: string;
}) {
  // @ts-expect-error
  const results = await page.evaluate(() => window.axe.run());

  const {
    violations,
  } = results;

  if (violations.length > 0) {
    // eslint-disable-next-line no-console
    console.table(violations.map((violation: any) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length,
    })));
    const filePath = `./playwright-tests/axe-reports/axe-report-${pageName}-${viewport}.json`;

    mkdirSync(dirname(filePath), {
      recursive: true,
    });

    writeFileSync(filePath, JSON.stringify(violations, null, 2));

    throw new Error(`Accessibility violations found: ${violations.length}`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`No accessibility violations found.`);
  }
}

export async function openTicketsPopupAccordions({
  page,
}: {
  page: Page;
}) {
  await clickAccordionTriggerByText({
    page,
    text: `Подробнее`,
  });

  await clickAccordionTriggerByText({
    page,
    text: `Правила посещения`,
  });

  await clickAccordionTriggerByText({
    page,
    text: `Возврат билетов`,
  });
}

async function clickAccordionTriggerByText({
  page,
  text,
}: {
  page: Page;
  text: string;
}) {
  await page.getByTestId(`accordion-trigger`)
    .filter({
      hasText: text,
    })
    .click();
}
