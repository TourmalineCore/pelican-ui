import qs from "qs";
import { AppRoute } from "../enum";
import { api } from "./HttpClient";
import { mapContractByBlock } from "./mapContractByBlock";
import { MOCK_NOT_FOUND_PAGE } from "../mocks/not-found-page-mock/not-found-page-mock";
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
          `blocks.cards`,
          `blocks.cards.cards`,
          `blocks.cards.cards.image`,
          `blocks.cards.cards.labels`,
          `blocks.button`,
          `blocks.largeImage`,
          `blocks.smallImage`,
          `blocks.generalTickets`,
          `blocks.subsidizedTickets.ticketsList`,
          `seo`,
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
          `blocks.media`,
          `blocks.subsidizedTickets`,
          `seo`,
        ],
      });

    default:
      return MOCK_NOT_FOUND_PAGE;
  }
}

async function getData({
  slug,
  populate,
}: {
  slug: string,
  populate: string[],
}) {
  const pageResponse: PageData = await api.get(`/${slug}?${qs.stringify({
    populate,
  })}`);

  const blocks = pageResponse.data?.blocks?.map((block) => (mapContractByBlock({
    block,
  })));

  return {
    blocks,
    ...(pageResponse.data.seo && {
      seo: {
        metaTitle: pageResponse.data?.seo.metaTitle,
        metaDescription: pageResponse.data?.seo.metaDescription,
        metaKeywords: pageResponse.data?.seo.keywords,
      },
    }),
  };
}
