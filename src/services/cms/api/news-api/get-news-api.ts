
import { NewsCollection, NewsCollectionListResponse } from "@/src/common/api-types";
import { NEWS_LIMIT } from '@/src/common/constants';
import { apiFetch } from "@/src/common/utils/HttpClient";
import qs from "qs";

export async function getNews({
  isPreview,
  page,
}: {
  isPreview: boolean;
  page: number;
}) {
  const queryParams = {
    populate: [`image`],
    fields: [
      `title`,
      `description`,
      `slug`,
      `isPinned`,
    ],
    sort: {
      isPinned: `desc`,
      date: `desc`,
      id: `desc`,
    },
    pagination: {
      page,
      pageSize: NEWS_LIMIT,
    },
    status: isPreview ? `draft` : `published`,
  };

  const newsResponse: NewsCollectionListResponse = await apiFetch(`/news?${qs.stringify(queryParams)}`, {
    isPreview,
  });

  return {
    news: mapNews({
      news: newsResponse.data!,
    }),
    pageCount: newsResponse.meta!.pagination!.pageCount!,
  };
}

function mapNews({
  news,
}: {
  news: NewsCollection[] | [];
}) {
  return news
    .map((newsItem) => ({
      id: newsItem.id!,
      slug: newsItem.slug!,
      image: {
        url: newsItem.image?.url || ``,
        alternativeText: newsItem.image?.alternativeText || ``,
      },
      title: newsItem.title,
      description: newsItem.description,
      isPinned: newsItem.isPinned,
    }));
}
