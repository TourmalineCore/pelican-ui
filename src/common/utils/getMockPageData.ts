import { AppRoute } from "../enum";
import { MOCK_HOME_PAGE } from "../mocks/home-page-mock/home-page-mock";
import { MOCK_CONTACT_ZOO_PAGE } from "../mocks/contact-zoo-page-mock/contact-zoo-page-mock";
import { MOCK_NOT_FOUND_PAGE } from "../mocks/not-found-page-mock/not-found-page-mock";
import { MOCK_DISCOUNTS_PAGE } from "../mocks/discounts-page-mock/discounts-page-mock";
import { MOCK_VISITING_RULES_PAGE } from "../mocks/visiting-rules-page-mock/visiting-rules-page-mock";

export function getMockPageData({
  slug = ``,
}: {
  slug: string;
}) {
  switch (`/${slug}`) {
    case AppRoute.HOME:
      return MOCK_HOME_PAGE;

    case AppRoute.CONTACT_ZOO:
      return MOCK_CONTACT_ZOO_PAGE;

    case AppRoute.DISCOUNTS:
      return MOCK_DISCOUNTS_PAGE;

    case AppRoute.VISITING_RULES:
      return MOCK_VISITING_RULES_PAGE;

    default:
      return MOCK_NOT_FOUND_PAGE;
  }
}
