import { test, expect } from '@playwright/test';
import fs from 'fs';

test(`Parse and validate StepCI text report`, async () => {
  const rawReport = fs.readFileSync(`./loadtestNewsPage-report.txt`, `utf-8`);

  const maxMatch = rawReport.match(/response_time:\s+.*?max:\s+\.*\s+(-?\d+)/s);
  const erroredMatch = rawReport.match(/steps:\s+.*?errored:\s+\.*\s+(\d+)/s);

  if (!maxMatch || !erroredMatch) {
    throw new Error(`Could not parse report`);
  }

  const max = parseInt(maxMatch[1], 10);
  const errored = parseInt(erroredMatch[1], 10);

  expect(max, `Max response time should be < 2000ms (was ${max}ms)`)
    .toBeLessThan(1000);
  expect(errored, `Errored steps should be 0 (found ${errored})`)
    .toBe(0);
});
