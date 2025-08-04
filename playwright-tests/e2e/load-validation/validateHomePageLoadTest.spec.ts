import { test, expect } from '@playwright/test';
import fs from 'fs';

test(`@load-validate Parse and validate StepCI text report`, async () => {
  const rawReport = fs.readFileSync(`./loadtestHomePage-report.txt`, `utf-8`);

  const maxMatch = rawReport.match(/response_time:\s+.*?max:\s+\.*\s+(-?\d+)/s);
  const avgMatch = rawReport.match(/response_time:\s+.*?avg:\s+\.*\s+(-?\d+)/s);
  const p95Match = rawReport.match(/response_time:\s+.*?p95:\s+\.*\s+(-?\d+)/s);
  const p99Match = rawReport.match(/response_time:\s+.*?p99:\s+\.*\s+(-?\d+)/s);
  const erroredMatch = rawReport.match(/steps:\s+.*?errored:\s+\.*\s+(\d+)/s);

  if (!maxMatch || !avgMatch || !p95Match || !p99Match || !erroredMatch) {
    throw new Error(`Could not parse report`);
  }

  const max = parseInt(maxMatch[1], 10);
  const avg = parseInt(avgMatch[1], 10);
  const p95 = parseInt(p95Match[1], 10);
  const p99 = parseInt(p99Match[1], 10);
  const errored = parseInt(erroredMatch[1], 10);

  console.log(`📊 Home Page Load Test Metrics Report:`);
  console.log(`  Max Response Time: ${max}ms`);
  console.log(`  Average Response Time: ${avg}ms`);
  console.log(`  95th Percentile: ${p95}ms`);
  console.log(`  99th Percentile: ${p99}ms`);
  console.log(`  Errored Steps: ${errored}`);
  console.log(`----------------------------`);

  expect(max, `Max response time should be < 10000ms (was ${max}ms)`)
    .toBeLessThan(10000);
  expect(avg, `Average response time should be < 1600ms (was ${avg}ms)`)
    .toBeLessThan(1600);
  expect(errored, `Errored steps should be 0 (found ${errored})`)
    .toBe(0);
});
