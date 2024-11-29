import Head from 'next/head';
import { GlobalComponentProps, NewsListComponentProps } from '@/src/common/types';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { Layout } from '@/src/components/globals/Layout/Layout';
import { NEWS_PAGE, NewsPageProps } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { NEWS_LIMIT, NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { NEWS_LIST } from '@/src/common/mocks/news-page-mock/news-list-mock';

type NewsProps = {
  globalData: GlobalComponentProps,
  pageData: NewsPageProps,
  news: {
    cards: NewsListComponentProps['cards'],
    title: NewsListComponentProps['title'],
    total: number,
  },
};

export default function NewsPage({
  globalData,
  pageData,
  news,
}: NewsProps) {
  if (!pageData || !globalData) {
    return <NotFound />;
  }

  const {
    navigationLinks,
    email,
    phone,
    popupTicketBuyText,
    footerAboutLinks,
    footerUserLinks,
    officialLinks,
    footerNavTitleLeft,
    footerNavTitleRight,
  } = globalData;

  const {
    title,
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
      <Layout
        navigationLinks={navigationLinks}
        officialLinks={officialLinks}
        footerAboutLinks={footerAboutLinks}
        footerUserLinks={footerUserLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
        footerNavTitleLeft={footerNavTitleLeft}
        footerNavTitleRight={footerNavTitleRight}
      >
        <NewsList
          title={news.title}
          cards={news.cards}
          total={news.total}
        />
      </Layout>
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
      news: {
        cards: NEWS_LIST.cards.slice(0, query.pageSize || NEWS_LIMIT),
        title: NEWS_LIST.title,
        total: NEWS_LIST.cards.length,
      },
    },
  };
}
