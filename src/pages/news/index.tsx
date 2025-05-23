import qs from 'qs';
import { NEWS_LIMIT, NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { strapiFetch } from '@/src/common/utils/HttpClient';
import { NewsCollectionListResponse, NewsPageResponse } from '@/src/common/api-types';
import { NewsPageProps, NewsArticleProps } from '@/src/common/types';
import { SeoHead } from '@/src/components/globals/SeoHead/SeoHead';
import defaultBackground from '@/public/images/news/default-background.png';
import { MOCK_NEWS } from '@/src/common/mocks/collections-mock/news-collection-mock';
import { MOCK_NEWS_PAGE } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { useScrollTop } from '@/src/common/hooks/useScrollTop';
import { HttpStatusCode, isAxiosError } from 'axios';

export default function NewsPage({
  pageData,
  news,
  pageCount,
}: {
  pageData: NewsPageProps;
  news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[];
  pageCount: number;
}) {
  const {
    seo,
    newsTitle,
  } = pageData;

  useScrollTop();

  return (
    <>
      <SeoHead
        metaTitle={seo?.metaTitle || `Новости`}
        metaDescription={seo?.metaDescription}
        metaKeywords={seo?.metaKeywords}
      />
      <NewsList
        newsTitle={newsTitle}
        news={news}
        pageCount={pageCount}
      />
    </>
  );
}

export async function getServerSideProps({
  query,
  preview = false,
}: {
  preview: boolean;
  query: {
    page: number;
  };
}) {
  const currentPage = query.page || 1;

  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: MOCK_NEWS_PAGE,
        news: MOCK_NEWS.slice(0, (currentPage * NEWS_LIMIT)),
        pageCount: Math.ceil(MOCK_NEWS.length / NEWS_LIMIT),
      },
    };
  }

  const previewMode = preview ? `draft` : `published`;

  const newsPageData = await getNewsPageData({
    previewMode,
  });

  const {
    news,
    pageCount,
  } = await getNewsData({
    previewMode,
    page: currentPage,
  });

  return {
    props: {
      pageData: newsPageData,
      news,
      pageCount,
    },
  };
}

async function getNewsPageData({
  previewMode,
}: {
  previewMode: string;
}) {
  try {
    const response: NewsPageResponse = await strapiFetch(`/news-page?populate=*&status=${previewMode}`);

    return {
      newsTitle: response.data?.title,
      ...(response.data?.seo && {
        seo: {
          metaTitle: response.data?.seo?.metaTitle,
          metaDescription: response.data?.seo?.metaDescription,
          metaKeywords: response.data?.seo?.keywords,
        },
      }),
    };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === HttpStatusCode.NotFound) {
        return {};
      }
    }

    throw error;
  }
}

async function getNewsData({
  previewMode,
  page,
}: {
  previewMode: string;
  page: number;
}) {
  try {
    const queryParams = {
      populate: [`image`],
      fields: [
        `title`,
        `description`,
        `slug`,
      ],
      sort: {
        date: `desc`,
        id: `desc`,
      },
      pagination: {
        page,
        pageSize: NEWS_LIMIT,
      },
      status: previewMode,
    };

    const response: NewsCollectionListResponse = await strapiFetch(`/news?${qs.stringify(queryParams)}`);

    return {
      news: response.data!.map((newsItem) => ({
        id: newsItem.id!,
        slug: newsItem.slug!,
        image: {
          url: newsItem.image?.url || defaultBackground,
          alternativeText: newsItem.image?.alternativeText || ``,
        },
        title: newsItem.title,
        description: newsItem.description,
      })),
      pageCount: response.meta!.pagination!.pageCount!,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }

    return {
      news: [],
      pageCount: 0,
    };
  }
}
