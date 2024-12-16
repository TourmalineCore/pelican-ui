import Head from 'next/head';
import qs from 'qs';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { NEWS_PAGE, NewsPageProps } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { NEWS, NewsProps } from '@/src/common/mocks/news-page-mock/news-mock';
import { NEWS_LIMIT, NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { api } from '@/src/common/utils/HttpClient';
import { Meta } from '@/src/common/types';

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

type NewsResponse = {
  data: NewsProps[];
  meta: Meta;
};

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

  const news: NewsResponse = await api.get(`/news?${qs.stringify(queryParams)}`);

  return {
    props: {
      pageData: NEWS_PAGE,
      news: news.data,
      totalNews: news.meta.pagination.total,
    },
  };
}
