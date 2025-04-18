import qs from "qs";
import { AppRoute } from "../enum";
import { api } from "./HttpClient";
import { mapContractByBlock } from "./mapContractByBlock";
import { MOCK_NOT_FOUND_PAGE } from "../mocks/not-found-page-mock/not-found-page-mock";
import { PageData } from "../types";
import { MOCK_VISITING_RULES_PAGE } from "../mocks/visiting-rules-page-mock/visiting-rules-page-mock";

export async function getPageData({
  slug = ``,
  preview,
}: {
  slug: string;
  preview: boolean;
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
        preview,
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
          `blocks.cards`,
          `blocks.cards.image`,
          `blocks.cards.labels`,
          `seo`,
        ],
        preview,
      });

    // Todo: remove after integration with CMS
    case AppRoute.DISCOUNTS:
      return getData({
        slug: `discount-page`,
        populate: [
          `blocks.remark.file`,
          `blocks.rulesCards`,
          `blocks.discountsCards.rules.basis.file`,
          `blocks.discountsCards.rules.docs`,
          `blocks.discountsCards.rules.terms`,
          `seo`,
        ],
        preview,
      });

      // Todo: remove after integration with CMS
    case AppRoute.VISITING_RULES:
      return MOCK_VISITING_RULES_PAGE;

    default:
      return MOCK_NOT_FOUND_PAGE;
  }
}

async function getData({
  slug,
  populate,
  preview,
}: {
  slug: string;
  populate: string[];
  preview: boolean;
}) {
  const pageResponse: PageData = await api.get(`/${slug}?${qs.stringify({
    populate,
    status: preview ? `draft` : `published`,
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
