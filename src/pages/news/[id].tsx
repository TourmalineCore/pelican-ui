import { NEWS, NewsProps } from "@/src/common/mocks/news-page-mock/news-mock";
import { NewsArticle } from "@/src/components/news-page/NewsArticle/NewsArticle";
import Head from "next/head";

export default function News({
  news,
}: {
  news: NewsProps
}) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{news.title}</title>
      </Head>
      <NewsArticle
        title={news.title}
        date={news.publishedAt}
        articleContent={news.articleContent}
      />
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
