import { apiFetch } from '@/src/common/utils/HttpClient';
import {
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals';
import { getNews } from './get-news-api';

jest.mock(`@/src/common/utils/HttpClient`);
const mockedApiFetch = jest.mocked(apiFetch);

const MOCK_NEWS_RESPONSE = {
  data: [],
  meta: {
    pagination: {
      pageCount: 1,
    },
  },
};

describe(`getNews`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedApiFetch.mockImplementation(() => Promise.resolve(MOCK_NEWS_RESPONSE as any));
  });

  test(`
    GIVEN isPreview = false and page = 1
    WHEN getNews is called
    THEN query string should contain all required fields including isPinned
  `, async () => {
    await getNews({
      isPreview: false,
      page: 1,
    });

    const url = decodeURIComponent(mockedApiFetch.mock.calls[0][0]);

    expect(url)
      .toContain(`fields[0]=title`);
    expect(url)
      .toContain(`fields[1]=description`);
    expect(url)
      .toContain(`fields[2]=slug`);
    expect(url)
      .toContain(`fields[3]=isPinned`);
  });

  test(`
    GIVEN isPreview = false and page = 1
    WHEN getNews is called
    THEN query string should contain isPinned, id and date sorting in descending order
  `, async () => {
    await getNews({
      isPreview: false,
      page: 1,
    });

    const url = decodeURIComponent(mockedApiFetch.mock.calls[0][0]);

    expect(url)
      .toContain(`sort[isPinned]=desc`);

    expect(url)
      .toContain(`sort[id]=desc`);

    expect(url)
      .toContain(`sort[date]=desc`);
  });
});
