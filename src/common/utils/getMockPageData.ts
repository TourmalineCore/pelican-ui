import { AppRoute } from "../enum";
import { HOME_PAGE } from "../mocks/home-page-mock/home-page-mocks";
import { NOT_FOUND_PAGE } from "../mocks/not-found-page-mocks";
import { DOCUMENTS_PAGE } from "../mocks/documents-page-mock/documents-page-mock";

export function getMockPageData({
  slug,
}: {
  slug: string
}) {
  switch (`/${slug}`) {
    case AppRoute.HOME:
      return HOME_PAGE;

    case AppRoute.DOCUMENTS:
      return DOCUMENTS_PAGE;

    default:
      return NOT_FOUND_PAGE;
  }
}
