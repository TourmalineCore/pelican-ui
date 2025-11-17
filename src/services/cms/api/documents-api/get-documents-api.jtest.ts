import { apiFetch } from '@/src/common/utils/HttpClient';
import { jest } from '@jest/globals';
import { getDocuments } from './documents-api';

jest.mock(`@/src/common/utils/HttpClient`);
const mockedApiFetch = apiFetch as jest.MockedFunction<typeof apiFetch>;

describe(`getDocuments`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedApiFetch.mockResolvedValue({
      data: [],
    });
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

    const url = decodeURIComponent(mockedApiFetch.mock.calls[0][0]);

    expect(url)
      .toContain(`sort[date]=desc`);
    expect(url)
      .toContain(`sort[title]=desc`);
  });

  test(`
    GIVEN getDocuments
    WHEN isPreview = false
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
    WHEN isPreview = true
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
