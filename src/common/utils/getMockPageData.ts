import { AppRoute } from "../enum";
import { HOME_PAGE } from "../mocks/home-page-mocks";
import { NEWS_PAGE } from "../mocks/news-page-mock";
import { NOT_FOUND_PAGE } from "../mocks/not-found-page-mocks";

export function getMockPageData({
  slug,
}: {
  slug: string
}) {
  switch (`/${slug}`) {
    case AppRoute.HOME:
      return HOME_PAGE;

    case AppRoute.NEWS:
      return NEWS_PAGE;

    default:
      return NOT_FOUND_PAGE;
  }
}
