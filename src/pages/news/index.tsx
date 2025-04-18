import qs from 'qs';
import { MOCK_NEWS_PAGE } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { MOCK_NEWS } from '@/src/common/mocks/collections-mock/news-collection-mock';
import { NEWS_LIMIT, NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { api } from '@/src/common/utils/HttpClient';
import { NewsCollectionListResponse, NewsPageResponse } from '@/src/common/api-types';
import { NewsPageProps, NewsArticleProps } from '@/src/common/types';
import { SeoHead } from '@/src/components/globals/SeoHead/SeoHead';
import defaultBackground from '@/public/images/news/default-background.png';

export default function NewsPage({
  pageData,
  news,
  totalNews,
  pageSize,
}: {
  pageData: NewsPageProps;
  news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[];
  pageSize: number;
  totalNews: number;
}) {
  const {
    seo,
    newsTitle,
  } = pageData;

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
        total={totalNews}
        pageSize={pageSize}
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
    pageSize: number;
  };
}) {
  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: MOCK_NEWS_PAGE,
        news: MOCK_NEWS.slice(0, query.pageSize || NEWS_LIMIT),
        pageSize: +query.pageSize || NEWS_LIMIT,
        totalNews: MOCK_NEWS.length,
      },
    };
  }

  const previewMode = preview ? `draft` : `published`;

  const newsPageData = await getNewsPageData({
    previewMode,
  });

  const {
    news,
    pageSize,
    totalNews,
  } = await getNewsData({
    previewMode,
    pageSize: query.pageSize,
  });

  return {
    props: {
      pageData: newsPageData,
      news,
      pageSize,
      totalNews,
    },
  };
}

async function getNewsPageData({
  previewMode,
}: {
  previewMode: string;
}) {
  try {
    const response: NewsPageResponse = await api.get(`/news-page?populate=*&status=${previewMode}`);

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
  } catch {
    return {};
  }
}

async function getNewsData({
  previewMode,
  pageSize,
}: {
  previewMode: string;
  pageSize: number;
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
        publishedAt: `desc`,
      },
      pagination: {
        pageSize: pageSize || NEWS_LIMIT,
      },
      status: previewMode,
    };

    const response: NewsCollectionListResponse = await api.get(`/news?${qs.stringify(queryParams)}`);

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
      pageSize: response.meta!.pagination!.pageSize,
      totalNews: response.meta!.pagination!.total!,
    };
  } catch {
    return {
      news: [],
      pageSize: NEWS_LIMIT,
      totalNews: 0,
    };
  }
}
