import { apiFetch } from '@/src/common/utils/HttpClient';
import { jest } from '@jest/globals';
import { getDocuments } from './documents-api';

jest.mock(`@/src/common/utils/HttpClient`);
const mockedApiFetch = jest.mocked(apiFetch);

describe(`getDocuments`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedApiFetch.mockResolvedValue({
      data: [],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test(`
    GIVEN getDocuments
    WHEN use it
    SHOULD call apiFetch with correct sorting params
    `, async () => {
    await getDocuments({
      categoryDocumentId: 1,
      isPreview: false,
    });

    // decode the code in order to convert it into a human-readable form
    // otherwise, symbols '[' and ']' turns into %5B and %5A
    const url = decodeURIComponent(mockedApiFetch.mock.calls[0][0]);

    expect(url)
      .toContain(`sort[date]=desc`);
    expect(url)
      .toContain(`sort[title]=desc`);
  });

  test(`
    GIVEN getDocuments
    WHEN prop isPreview = false
    SHOULD call apiFetch with published status
    `, async () => {
    await getDocuments({
      categoryDocumentId: 1,
      isPreview: false,
    });

    expect(mockedApiFetch)
      .toHaveBeenCalledWith(expect.stringContaining(`status=published`));
  });

  test(`
    GIVEN getDocuments
    WHEN prop isPreview = true
    SHOULD call apiFetch with draft status
    `, async () => {
    await getDocuments({
      categoryDocumentId: 1,
      isPreview: true,
    });

    expect(mockedApiFetch)
      .toHaveBeenCalledWith(expect.stringContaining(`status=draft`));
  });
});
