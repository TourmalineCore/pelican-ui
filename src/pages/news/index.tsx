import Head from 'next/head';
import qs from 'qs';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { NEWS_PAGE, NewsPageProps } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { NEWS, NewsProps } from '@/src/common/mocks/news-page-mock/news-mock';
import { NEWS_LIMIT, NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { api } from '@/src/common/utils/HttpClient';
import { NewsCollectionListResponse } from '@/src/common/api-types';

export default function NewsPage({
  pageData,
  news,
  totalNews,
}: {
  pageData: NewsPageProps,
  news: NewsProps[],
  totalNews: number,
}) {
  if (!pageData) {
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
        title={newsTitle}
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
        pageData: NEWS_PAGE,
        news: NEWS.slice(0, query.pageSize || NEWS_LIMIT),
        totalNews: NEWS.length,
      },
    };
  }

  const queryParams = {
    populate: [`image`],
    fields: [`title`, `description`],
    sort: {
      publishedAt: `desc`,
    },
    pagination: {
      pageSize: query.pageSize,
    },
  };

  const newsResponse: NewsCollectionListResponse = await api.get(`/news?${qs.stringify(queryParams)}`);

  const news: Omit<NewsProps, 'innerContent' | 'publishedAt'>[] = newsResponse.data!.map((newsItem) => ({
    id: newsItem.id!,
    image: {
      url: newsItem?.attributes?.image.data?.attributes?.url!,
      alternativeText: newsItem?.attributes?.image.data?.attributes?.alternativeText || ``,
    },
    title: newsItem?.attributes!.title,
    description: newsItem?.attributes?.description,
  }));

  return {
    props: {
      pageData: NEWS_PAGE,
      news,
      totalNews: newsResponse.meta!.pagination!.total!,
    },
  };
}
