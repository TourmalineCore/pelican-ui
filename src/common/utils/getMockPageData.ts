import { AppRoute } from "../enum";
import { HOME_PAGE } from "../mocks/home-page-mocks";
import { NEWS_PAGE } from "../mocks/news-page-mock";

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
      return null;
  }
}
