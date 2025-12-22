import { apiFetch } from '@/src/common/utils/HttpClient';
import { jest } from '@jest/globals';
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

    mockedApiFetch.mockImplementation(() => Promise.resolve({
      data: [],
      meta: {
        pagination: {
          total: 1,
        },
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test(`
    GIVEN currentYear = 2025 and other props
    WHEN getAvailableYearsForCategory is called with then
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
    GIVEN isPreview = false and other props
    WHEN getAvailableYearsForCategory is called with then
    THEN query string should contain published status
    `, async () => {
    await getAvailableYearsForCategory({
      category: MOCK_CATEGORY,
      currentYear: 2025,
      isPreview: false,
    });

    expect(mockedApiFetch)
      .toHaveBeenCalledWith(
        expect.stringContaining(`status=published`),
      );
  });

  test(`
    GIVEN isPreview = true and other props
    WHEN getAvailableYearsForCategory is called with then
    THEN query string should contain draft status
    `, async () => {
    await getAvailableYearsForCategory({
      category: MOCK_CATEGORY,
      currentYear: 2025,
      isPreview: true,
    });

    expect(mockedApiFetch)
      .toHaveBeenCalledWith(
        expect.stringContaining(`status=draft`),
      );
  });
});
