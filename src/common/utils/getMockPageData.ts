import { AppRoute } from "../enum";
import { HOME_PAGE } from "../mocks/home-page-mock/home-page-mock";
import { NOT_FOUND_PAGE } from "../mocks/not-found-page-mock/not-found-page-mock";

export function getMockPageData({
  slug = ``,
}: {
  slug: string
}) {
  switch (`/${slug}`) {
    case AppRoute.HOME:
      return HOME_PAGE;

    default:
      return NOT_FOUND_PAGE;
  }
}
