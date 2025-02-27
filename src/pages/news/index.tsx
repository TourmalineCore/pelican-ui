import Head from 'next/head';
import qs from 'qs';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { MOCK_NEWS_PAGE } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { MOCK_NEWS } from '@/src/common/mocks/collections-mock/news-collection-mock';
import { NEWS_LIMIT, NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { api } from '@/src/common/utils/HttpClient';
import { NewsCollectionListResponse } from '@/src/common/api-types';
import { NewsPageProps, NewsArticleProps } from '@/src/common/types';

export default function NewsPage({
  pageData,
  news,
  totalNews,
}: {
  pageData: NewsPageProps,
  news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[],
  totalNews: number,
}) {
  if (!pageData || !news) {
    return <NotFound />;
  }

  const {
    title,
    newsTitle,
  } = pageData;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{title}</title>
      </Head>
      <NewsList
        newsTitle={newsTitle}
        news={news}
        total={totalNews}
      />
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    pageSize: number
  }
}) {
  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: MOCK_NEWS_PAGE,
        news: MOCK_NEWS.slice(0, query.pageSize || NEWS_LIMIT),
        totalNews: MOCK_NEWS.length,
      },
    };
  }

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
      pageSize: query.pageSize,
    },
  };

  try {
    const newsResponse: NewsCollectionListResponse = await api.get(`/news?${qs.stringify(queryParams)}`);

    const news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[] = newsResponse.data!.map((newsItem) => ({
      id: newsItem.id!,
      slug: newsItem.slug!,
      image: {
        url: newsItem.image?.url || ``,
        alternativeText: newsItem.image?.alternativeText || ``,
      },
      title: newsItem.title,
      description: newsItem.description,
    }));

    return {
      props: {
        pageData: MOCK_NEWS_PAGE,
        news,
        totalNews: newsResponse.meta!.pagination!.total!,
      },
    };
  } catch {
    return {
      props: {
        news: null,
      },
    };
  }
}
