import qs from "qs";
import { AppRoute } from "../enum";
import { apiFetch } from "./HttpClient";
import { mapContractByBlock } from "./mapContractByBlock";
import { PageData } from "../types";

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

    case AppRoute.VISITING_RULES:
      return getData({
        slug: `visiting-rules-page`,
        populate: [
          `blocks.documentLink.file`,
          `blocks.mainRules.mainRulesCards.image`,
          `blocks.warningsCards`,
          `blocks.photosPolicyCards`,
          `blocks.emergencyPhonesCards`,
          `seo`,
        ],
        preview,
      });

    default:
      return getData({
        slug,
        populate: [
          `blocks.button`,
          `blocks.largeImage`,
          `blocks.smallImage`,
          `blocks.media`,
          `blocks.categories`,
          `blocks.cards`,
          `blocks.cards.image`,
          `blocks.cards.labels`,
          `blocks.subsidizedTickets`,
          `blocks.infoCard`,
          `blocks.scheduleCard`,
          `blocks.scheduleCard.timetable`,
          `blocks.seo`,
          `blocks.image`,
        ],
        isOtherPage: true,
        preview,
      });
  }
}

async function getData({
  slug,
  populate,
  preview,
  isOtherPage = false,
}: {
  slug: string;
  populate: string[];
  preview: boolean;
  isOtherPage?: boolean;
}) {
  let pageData: PageData;

  if (isOtherPage) {
    const response = await apiFetch(`/other-pages?${qs.stringify({
      populate,
      status: preview ? `draft` : `published`,
      filters: {
        slug: {
          $eq: slug,
        },
      },
    })}`, {
      isPreview: preview,
    });

    const responseData = response.data[0];

    if (!responseData) {
      return {
        notFound: true,
      };
    }

    pageData = {
      data: responseData,
    };
  } else {
    pageData = await apiFetch(`/${slug}?${qs.stringify({
      populate,
      status: preview ? `draft` : `published`,
    })}`, {
      isPreview: preview,
    });

    if (!pageData) {
      const contentTypes = await apiFetch(`/content-type-builder/content-types`);
      const singleType = contentTypes.data.find((item: any) => item.schema.singularName === slug);

      if (singleType) {
        return pageData;
      }

      return {
        notFound: true,
      };
    }
  }

  const blocks = pageData.data?.blocks?.map((block) => (mapContractByBlock({
    block,
  })));

  const seoBlock = blocks.find((block) => block.__component === `shared.seo`);

  return {
    blocks,
    ...((pageData.data?.seo || seoBlock) && {
      seo: {
        metaTitle: pageData.data?.seo?.metaTitle || seoBlock?.metaTitle,
        metaDescription: pageData.data?.seo?.metaDescription || seoBlock?.metaDescription,
        metaKeywords: pageData.data?.seo?.keywords || seoBlock?.keywords,
      },
    }),
  };
}
