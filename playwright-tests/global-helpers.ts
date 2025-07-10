import { Page } from "@playwright/test";
import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

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
