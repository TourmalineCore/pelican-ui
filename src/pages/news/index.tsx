import { NewsList } from '@/src/components/news-page/NewsList/NewsList';
import { apiFetch } from '@/src/common/utils/HttpClient';
import { NewsPageResponse } from '@/src/common/api-types';
import { NewsPageProps, NewsArticleProps } from '@/src/common/types';
import { SeoHead } from '@/src/components/globals/SeoHead/SeoHead';
import { MOCK_NEWS } from '@/src/common/mocks/collections-mock/news-collection-mock';
import { MOCK_NEWS_PAGE } from '@/src/common/mocks/news-page-mock/news-page-mock';
import { useScrollTop } from '@/src/common/hooks/useScrollTop';
import { getNews } from '@/src/services/cms/api/news-api/get-news-api';
import { NEWS_LIMIT } from '@/src/common/constants';

export default function NewsPage({
  pageData,
  news,
  pageCount,
}: {
  pageData: NewsPageProps;
  news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[];
  pageCount: number;
}) {
  const {
    seo,
    newsTitle,
  } = pageData;

  useScrollTop();

  return (
    <>
      <SeoHead
        metaTitle={seo?.metaTitle || `Новости`}
        metaDescription={seo?.metaDescription}
        metaKeywords={seo?.metaKeywords}
      />
      <NewsList
        newsTitle={newsTitle}
        news={news}
        pageCount={pageCount}
      />
    </>
  );
}

export async function getServerSideProps({
  query,
  preview = false,
}: {
  preview: boolean;
  query: {
    page: number;
  };
}) {
  const currentPage = query.page || 1;

  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: MOCK_NEWS_PAGE,
        news: MOCK_NEWS.slice(0, (currentPage * NEWS_LIMIT)),
        pageCount: Math.ceil(MOCK_NEWS.length / NEWS_LIMIT),
      },
    };
  }

  const [
    newsPageData,
    {
      news,
      pageCount,
    },
  ] = await Promise.all([
    getNewsPageData({
      isPreview: preview,
    }),
    getNews({
      isPreview: preview,
      page: currentPage,
    }),
  ]);

  return {
    props: {
      pageData: newsPageData,
      news,
      pageCount,
    },
  };
}

async function getNewsPageData({
  isPreview,
}: {
  isPreview: boolean;
}) {
  const response: NewsPageResponse = await apiFetch(`/news-page?populate=*&status=${isPreview ? `draft` : `published`}`, {
    isPreview,
  });

  if (!response) {
    return {};
  }

  return {
    newsTitle: response.data?.title,
    ...(response.data?.seo && {
      seo: {
        metaTitle: response.data?.seo?.metaTitle,
        metaDescription: response.data?.seo?.metaDescription,
        metaKeywords: response.data?.seo?.keywords,
      },
    }),
  };
}
