import { test, expect } from '@playwright/test';
import fs from 'fs';

test(`@load-validate Parse and validate StepCI text report`, async () => {
  const rawReport = fs.readFileSync(`./loadtestHomePage-report.txt`, `utf-8`);

  const maxMatch = rawReport.match(/response_time:\s+.*?max:\s+\.*\s+(-?\d+)/s);
  const avgMatch = rawReport.match(/response_time:\s+.*?avg:\s+\.*\s+(-?\d+)/s);
  const erroredMatch = rawReport.match(/steps:\s+.*?errored:\s+\.*\s+(\d+)/s);

  if (!maxMatch || !erroredMatch || !avgMatch) {
    throw new Error(`Could not parse report`);
  }

  const max = parseInt(maxMatch[1], 10);
  const avg = parseInt(avgMatch[1], 10);
  const errored = parseInt(erroredMatch[1], 10);

  expect(max, `Max response time should be < 10000ms (was ${max}ms)`)
    .toBeLessThan(10000);
  expect(avg, `Average response time should be < 1000ms (was ${avg}ms)`)
    .toBeLessThan(1000);
  expect(errored, `Errored steps should be 0 (found ${errored})`)
    .toBe(0);
});
