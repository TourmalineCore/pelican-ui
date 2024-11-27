import { NEWS, NewsProps } from "@/src/common/mocks/news-page-mock/news-mock";
import { GlobalComponentProps } from "@/src/common/types";
import { Layout } from "@/src/components/globals/Layout/Layout";
import { NewsArticle } from "@/src/components/news-page/NewsArticle/NewsArticle";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";
import Head from "next/head";

export default function News({
  globalData,
  news,
}: {
  globalData: GlobalComponentProps,
  news: NewsProps
}) {
  if (!globalData) {
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

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{news.title}</title>
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
        <NewsArticle
          title={news.title}
          date={news.publishedAt}
          articleContent={news.articleContent}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    id: string
  }
}) {
  // TODO there will be a request in the Strapi api here
  return {
    props: {
      news: NEWS.find(({
        id,
      }) => id === +query.id),
    },
  };
}
