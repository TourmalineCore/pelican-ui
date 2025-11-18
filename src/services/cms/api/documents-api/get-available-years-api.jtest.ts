import { apiFetch } from '@/src/common/utils/HttpClient';
import { jest } from '@jest/globals';
import qs from 'qs';
import dayjs from 'dayjs';
import { getAvailableYearsForCategory } from './documents-api';

jest.mock(`@/src/common/utils/HttpClient`);
const mockedApiFetch = jest.mocked(apiFetch);

const MOCK_CATEGORY = {
  id: 1,
  title: `Test Category`,
  hasTabs: true,
};

describe(`getAvailableYearsForCategory`, () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockedApiFetch.mockImplementation((url: string) => {
      const queryString = url.split(`?`)[1];
      const params = qs.parse(queryString);
      const year = dayjs((params.filters as { date: { lte: string; }; })?.date.lte)
        .year();

      // As if there are documents for the last 7 years
      if (year >= 2019 && year <= 2025) {
        return Promise.resolve({
          data: [],
          meta: {
            pagination: {
              total: 5,
            },
          },
        });
      }
      return Promise.resolve({
        data: [],
        meta: {
          pagination: {
            total: 0,
          },
        },
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test(`
    GIVEN getAvailableYearsForCategory
    WHEN currentYear is equal 2025
    SHOULD return list of years for the last five years only
    `, async () => {
    const result = await getAvailableYearsForCategory({
      category: MOCK_CATEGORY,
      currentYear: 2025,
      isPreview: false,
    });

    expect(result)
      .toEqual([
        2025,
        2024,
        2023,
        2022,
        2021,
      ]);
  });

  test(`
    GIVEN getAvailableYearsForCategory
    WHEN isPreview = false
    SHOULD call apiFetch with published status
    `, async () => {
    await getAvailableYearsForCategory({
      category: MOCK_CATEGORY,
      currentYear: 2025,
      isPreview: false,
    });

    expect(mockedApiFetch)
      .toHaveBeenCalledWith(expect.stringContaining(`status=published`));
  });

  test(`
    GIVEN getAvailableYearsForCategory
    WHEN isPreview = true
    SHOULD call apiFetch with draft status
    `, async () => {
    await getAvailableYearsForCategory({
      category: MOCK_CATEGORY,
      currentYear: 2025,
      isPreview: true,
    });

    expect(mockedApiFetch)
      .toHaveBeenCalledWith(expect.stringContaining(`status=draft`));
  });
});
