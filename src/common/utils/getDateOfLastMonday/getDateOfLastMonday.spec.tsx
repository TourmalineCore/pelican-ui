import { expect, test } from '@playwright/test';
import { getLastMondayOfMonth } from './getDateOfLastMonday';

type MonthUnitType = {
  monthNumber: number;
  monthName: string;
  result: string;
};

const monthArray: MonthUnitType[] = [
  {
    monthNumber: 0,
    monthName: `January`,
    result: `27 января зоопарк не работает`,
  },
  {
    monthNumber: 1,
    monthName: `February`,
    result: `24 февраля зоопарк не работает`,
  },
  {
    monthNumber: 2,
    monthName: `March`,
    result: `31 марта зоопарк не работает`,
  },
  {
    monthNumber: 3,
    monthName: `April`,
    result: `28 апреля зоопарк не работает`,
  },
  {
    monthNumber: 4,
    monthName: `May`,
    result: `26 мая зоопарк не работает`,
  },
  {
    monthNumber: 5,
    monthName: `June`,
    result: `30 июня зоопарк не работает`,
  },
  {
    monthNumber: 6,
    monthName: `July`,
    result: `28 июля зоопарк не работает`,
  },
  {
    monthNumber: 7,
    monthName: `August`,
    result: `25 августа зоопарк не работает`,
  },
  {
    monthNumber: 8,
    monthName: `September`,
    result: `29 сентября зоопарк не работает`,
  },
  {
    monthNumber: 9,
    monthName: `October`,
    result: `27 октября зоопарк не работает`,
  },
  {
    monthNumber: 10,
    monthName: `November`,
    result: `24 ноября зоопарк не работает`,
  },
  {
    monthNumber: 11,
    monthName: `December`,
    result: `29 декабря зоопарк не работает`,
  },
];

test.describe(`getDateOfLastMondayTests`, () => {
  for (let index = 0; index < 12; index++) {
    test(`${monthArray[index].monthName}MonthTest`, () => universalMonthCheck({
      index,
    }));
  }
});

async function universalMonthCheck({
  index,
}: {
  index: number;
}) {
  await expect(getLastMondayOfMonth({
    year: 2025,
    month: monthArray[index].monthNumber,
  }))
    .toBe(monthArray[index].result);
}
