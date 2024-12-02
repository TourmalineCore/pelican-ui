import Head from 'next/head';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { NEWS_PAGE, NewsPageProps } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { NEWS_LIMIT, NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { NEWS, NewsProps } from '@/src/common/mocks/news-page-mock/news-mock';

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
  // TODO Uncomment when the api appears, there will be static data here
  // if (process.env.APP_ENV === `test`) {
  //   return {
  //     props: {
  //       navigationLinks: NAVIGATION_LINKS,
  //     },
  //   };
  // }

  // TODO there will be a request in the Strapi api here
  return {
    props: {
      pageData: NEWS_PAGE,
      news: NEWS.slice(0, query.pageSize || NEWS_LIMIT),
      totalNews: NEWS.length,
    },
  };
}
