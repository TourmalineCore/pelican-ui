import qs from "qs";
import { AppRoute } from "../enum";
import { api } from "./HttpClient";
import { HomeResponse } from "../api-types";
import { MOCK_CONTACT_ZOO_PAGE } from "../mocks/contact-zoo-page-mock/contact-zoo-page-mock";
import { mapContractByBlock } from "./mapContractByBlock";
import { MOCK_CONTACT_ZOO_PREVIEW } from "../mocks/home-page-mock/blocks/contact-zoo-preview-mock";
import { MOCK_MAP } from "../mocks/home-page-mock/blocks/map-mock";
import { MOCK_SERVICES } from "../mocks/home-page-mock/blocks/services-mock";
import { MOCK_TEXT_AND_MEDIA } from "../mocks/home-page-mock/blocks/text-and-media-mock";
import { MOCK_TICKETS } from "../mocks/home-page-mock/blocks/tickets-mock";
import { MOCK_NOT_FOUND_PAGE } from "../mocks/not-found-page-mock/not-found-page-mock";

export async function getPageData({
  slug = ``,
}: {
  slug: string
}) {
  switch (`/${slug}`) {
    case AppRoute.HOME:
      return getData({
        slug: `home`,
        populate: [
          `blocks.infoCard`,
          `blocks.sheduleCard`,
          `blocks.sheduleCard.timetable`,
          `blocks.image`,
          `seo`,
        ],
        staticBlocks: [
          MOCK_TEXT_AND_MEDIA,
          MOCK_SERVICES,
          MOCK_CONTACT_ZOO_PREVIEW,
          MOCK_TICKETS,
          MOCK_MAP,
        ],
      });

    case AppRoute.CONTACT_ZOO:
      return MOCK_CONTACT_ZOO_PAGE;

    default:
      return MOCK_NOT_FOUND_PAGE;
  }
}

async function getData({
  slug,
  populate,

  // Todo: remove it when the CMS integration is completed
  staticBlocks,
}: {
  slug: string;
  populate: string[];
  staticBlocks: object[]
}) {
  const pageResponse: HomeResponse = await api.get(`/${slug}?${qs.stringify({
    populate,
  })}`);
  const blocks: any[] = [];

  pageResponse.data?.attributes?.blocks?.map((block) => (
    blocks.push(mapContractByBlock({
      block,
    }))
  ));

  return {
    blocks: [...blocks, ...staticBlocks],
    seo: {
      metaTitle: pageResponse.data?.attributes?.seo.metaTitle,
      metaDescription: pageResponse.data?.attributes?.seo.metaDescription,
    },
  };
}
