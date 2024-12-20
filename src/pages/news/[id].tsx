import qs from 'qs';
import { NEWS, NewsProps } from "@/src/common/mocks/news-page-mock/news-mock";
import { api } from "@/src/common/utils/HttpClient";
import { NewsArticle } from "@/src/components/news-page/NewsArticle/NewsArticle";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";
import Head from "next/head";
import { NewsCollectionListResponseDataItem } from '@/src/common/api-types';

type SingleNewsProps = Pick<NewsProps, 'innerContent' | 'publishedAt' | 'title'>;

export default function News({
  news,
}: {
  news: SingleNewsProps
}) {
  if (!news) {
    return <NotFound />;
  }

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
        innerContent={news.innerContent}
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
  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        news: NEWS.find(({
          id,
        }) => id === +query.id) || null,
      },
    };
  }

  try {
    const queryParams = {
      fields: [
        `title`,
        `innerContent`,
        `publishedAt`,
      ],
    };
    const newsResponse = await api.get<NewsCollectionListResponseDataItem>(`/news/${query.id}?${qs.stringify(queryParams)}`);

    const news: SingleNewsProps = {
      title: newsResponse.data.attributes!.title!,
      innerContent: newsResponse.data.attributes!.innerContent!,
      publishedAt: newsResponse.data.attributes?.publishedAt,
    };

    return {
      props: {
        news,
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
