import qs from 'qs';
import { MOCK_NEWS } from "@/src/common/mocks/collections-mock/news-collection-mock";
import { api } from "@/src/common/utils/HttpClient";
import { Article } from "@/src/components/globals/Article/Article";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";
import { NewsCollectionListResponse } from '@/src/common/api-types';
import { NewsSlider } from '@/src/components/news-page/NewsArticle/components/NewsSlider/NewsSlider';
import { NewsArticleProps } from '@/src/common/types';
import { SeoHead } from '@/src/components/globals/SeoHead/SeoHead';

const NEWS_SLIDER_LIMIT = 4;

type SingleNewsProps = Pick<NewsArticleProps, 'innerContent' | 'publishedAt' | 'title' | 'seo'>;
type OtherNewsProps = Pick<NewsArticleProps, 'id' | 'description' | 'title' | 'slug'>[];

export default function News({
  news,
  otherNews,
}: {
  news: SingleNewsProps
  otherNews: OtherNewsProps
}) {
  if (!news) {
    return <NotFound />;
  }

  return (
    <>
      <SeoHead
        metaTitle={news?.seo?.metaTitle || news.title}
        metaDescription={news?.seo?.metaDescription}
        metaKeywords={news?.seo?.metaKeywords}
      />
      <Article
        title={news.title}
        date={news.publishedAt}
        innerContent={news.innerContent}
        isFirstBlock={false}
        isLastBlock={false}
        className="article--news"
      />
      {otherNews.length > 0 && <NewsSlider news={otherNews} />}
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    slug: string
  }
}) {
  if (process.env.APP_ENV === `static`) {
    const otherNews = MOCK_NEWS.filter((news) => news.slug !== query.slug)
      .map((news) => ({
        id: news.id,
        slug: news.slug,
        title: news.title,
        description: news.description || null,
      }))
      .slice(0, NEWS_SLIDER_LIMIT);

    return {
      props: {
        news: MOCK_NEWS.find(({
          slug,
        }) => slug === query.slug) || null,
        otherNews,
      },
    };
  }

  const newsQueryParams = {
    fields: [
      `title`,
      `innerContent`,
      `publishedAt`,
    ],
    populate: [`seo`],
    filters: {
      slug: {
        $eq: query.slug,
      },
    },
  };

  const otherNewsQueryParams = {
    fields: [
      `title`,
      `description`,
      `slug`,
    ],
    sort: {
      publishedAt: `desc`,
    },
    filters: {
      slug: {
        $ne: query.slug,
      },
    },
    pagination: {
      pageSize: NEWS_SLIDER_LIMIT,
    },
  };

  try {
    const newsResponse: NewsCollectionListResponse = await api.get(`/news?${qs.stringify(newsQueryParams)}`);

    const news: SingleNewsProps = {
      title: newsResponse.data![0].title!,
      innerContent: newsResponse.data![0].innerContent!,
      publishedAt: newsResponse.data![0]?.publishedAt,
      ...(newsResponse.data![0]?.seo && {
        seo: {
          metaTitle: newsResponse.data![0].seo.metaTitle!,
          metaDescription: newsResponse.data![0].seo?.metaDescription,
          metaKeywords: newsResponse.data![0].seo?.keywords,
        },
      }),
    };

    const otherNewsResponse: NewsCollectionListResponse = await api.get(`/news?${qs.stringify(otherNewsQueryParams)}`);

    const otherNews: OtherNewsProps = otherNewsResponse.data!.map((otherNewsItem) => ({
      id: otherNewsItem.id!,
      slug: otherNewsItem.slug!,
      title: otherNewsItem!.title,
      description: otherNewsItem?.description,
    }));

    return {
      props: {
        news,
        otherNews,
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
