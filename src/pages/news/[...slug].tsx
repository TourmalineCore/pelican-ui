import qs from 'qs';
import { MOCK_NEWS } from "@/src/common/mocks/collections-mock/news-collection-mock";
import { strapiFetch } from "@/src/common/utils/HttpClient";
import { Article } from "@/src/components/globals/Article/Article";
import { NewsCollection, NewsCollectionListResponse } from '@/src/common/api-types';
import { NewsSlider } from '@/src/components/news-page/NewsArticle/components/NewsSlider/NewsSlider';
import { NewsArticleProps } from '@/src/common/types';
import { SeoHead } from '@/src/components/globals/SeoHead/SeoHead';
import { useScrollTop } from '@/src/common/hooks/useScrollTop';
import { useRouter } from 'next/router';
import { isAxiosError } from 'axios';

const NEWS_SLIDER_LIMIT = 6;

type SelectedNewsProps = Pick<NewsArticleProps, 'innerContent' | 'date' | 'title' | 'seo'>;
type OtherNewsProps = Pick<NewsArticleProps, 'id' | 'description' | 'title' | 'slug'>[];

export default function News({
  selectedNews,
  otherNews,
}: {
  selectedNews: SelectedNewsProps;
  otherNews: OtherNewsProps;
}) {
  const {
    asPath,
  } = useRouter();

  useScrollTop({
    dependencies: [asPath],
  });

  return (
    <>
      <SeoHead
        metaTitle={selectedNews?.seo?.metaTitle || selectedNews.title}
        metaDescription={selectedNews?.seo?.metaDescription}
        metaKeywords={selectedNews?.seo?.metaKeywords}
      />
      <Article
        title={selectedNews.title}
        date={selectedNews.date}
        innerContent={selectedNews.innerContent}
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
  preview = false,
}: {
  query: {
    slug: string;
  };
  preview: boolean;
}) {
  if (query.slug.length > 4) {
    return {
      notFound: true,
    };
  }

  const concatSlug = `${query.slug[0]}/${query.slug[1]}/${query.slug[2]}/${query.slug[3]}`;

  if (process.env.APP_ENV === `static`) {
    const otherNews = MOCK_NEWS.filter((news) => news.slug !== concatSlug)
      .map((news) => ({
        id: news.id,
        slug: news.slug,
        title: news.title,
        description: news.description || null,
      }))
      .slice(0, NEWS_SLIDER_LIMIT);

    const selectedNews = MOCK_NEWS.find(({
      slug,
    }) => slug === concatSlug);

    if (!selectedNews) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        selectedNews,
        otherNews,
      },
    };
  }

  const selectedNews = await getNews({
    preview,
    slug: concatSlug,
  });

  if (!selectedNews) {
    return {
      notFound: true,
    };
  }

  const otherNews = await getOtherNews({
    preview,
    slug: concatSlug,
  });

  return {
    props: {
      query,
      selectedNews,
      otherNews,
    },
  };
}

async function getNews({
  preview,
  slug,
}: {
  preview: boolean;
  slug: string;
}): Promise<SelectedNewsProps | null> {
  try {
    const queryParams = {
      fields: [
        `title`,
        `innerContent`,
        `date`,
      ],
      populate: [`seo`],
      filters: {
        slug: {
          $eq: slug,
        },
      },
      status: preview ? `draft` : `published`,
    };

    const response: NewsCollectionListResponse = await strapiFetch(`/news?${qs.stringify(queryParams)}`);

    return mapSelectedNews({
      news: response.data![0],
    });
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }

    return null;
  }
}

function mapSelectedNews({
  news,
}: {
  news: NewsCollection;
}) {
  if (!news) return null;

  return {
    title: news.title,
    innerContent: news!.innerContent,
    date: news!.date,
    ...(news?.seo && {
      seo: {
        metaTitle: news.seo.metaTitle!,
        metaDescription: news.seo?.metaDescription,
        metaKeywords: news.seo?.keywords,
      },
    }),
  };
}

async function getOtherNews({
  preview,
  slug,
}: {
  preview: boolean;
  slug: string;
}): Promise<OtherNewsProps | []> {
  try {
    const queryParams = {
      fields: [
        `title`,
        `description`,
        `slug`,
      ],
      sort: {
        date: `desc`,
        id: `desc`,
      },
      filters: {
        slug: {
          $ne: slug,
        },
      },
      pagination: {
        pageSize: NEWS_SLIDER_LIMIT,
      },
      status: preview ? `draft` : `published`,
    };

    const response: NewsCollectionListResponse = await strapiFetch(`/news?${qs.stringify(queryParams)}`);

    return mapOtherNews({
      news: response.data!,
      slug,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }

    return [];
  }
}

function mapOtherNews({
  news,
  slug,
}: {
  news: NewsCollection[];
  slug: string;
}) {
  if (!news.length) return [];

  return news
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      id: item.id!,
      slug: item.slug!,
      title: item!.title,
      description: item?.description,
    }));
}
