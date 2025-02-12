import qs from "qs";
import { AppRoute } from "../enum";
import { api } from "./HttpClient";
import { mapContractByBlock } from "./mapContractByBlock";
import { MOCK_CONTACT_ZOO_PREVIEW } from "../mocks/home-page-mock/blocks/contact-zoo-preview-mock";
import { MOCK_MAP } from "../mocks/home-page-mock/blocks/map-mock";
import { MOCK_SERVICES } from "../mocks/home-page-mock/blocks/services-mock";
// import { MOCK_TEXT_AND_MEDIA } from "../mocks/home-page-mock/blocks/text-and-media-mock";
import { MOCK_TICKETS } from "../mocks/home-page-mock/blocks/tickets-mock";
import { MOCK_NOT_FOUND_PAGE } from "../mocks/not-found-page-mock/not-found-page-mock";
import { MOCK_CONTACT_ZOO_TICKETS } from "../mocks/contact-zoo-page-mock/blocks/tickets-mock";
import { PageData } from "../types";

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
          `blocks.scheduleCard`,
          `blocks.scheduleCard.timetable`,
          `blocks.image`,
          `blocks.media`,
          `seo`,
        ],
        staticBlocks: [
          // MOCK_TEXT_AND_MEDIA,
          MOCK_SERVICES,
          MOCK_CONTACT_ZOO_PREVIEW,
          MOCK_TICKETS,
          MOCK_MAP,
        ],
      });

    case AppRoute.CONTACT_ZOO:
      return getData({
        slug,
        populate: [
          `blocks.infoCard`,
          `blocks.scheduleCard`,
          `blocks.scheduleCard.timetable`,
          `blocks.image`,
          `seo`,
        ],
        staticBlocks: [MOCK_CONTACT_ZOO_TICKETS],
      });

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
  const pageResponse: PageData = await api.get(`/${slug}?${qs.stringify({
    populate,
  })}`);

  const blocks = pageResponse.data?.attributes?.blocks?.map((block) => (mapContractByBlock({
    block,
  })));

  return {
    blocks: [...blocks, ...staticBlocks],
    ...(pageResponse.data.attributes.seo && {
      seo: {
        metaTitle: pageResponse.data?.attributes?.seo.metaTitle,
        metaDescription: pageResponse.data?.attributes?.seo.metaDescription,
      },
    }),
  };
}
