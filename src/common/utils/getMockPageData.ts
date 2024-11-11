import { AppRoute } from "../enum";
import { HOME_PAGE } from "../mocks/home-page-mocks";

export function getMockPageData({ slug }: { slug: string }) {
  switch (`/${slug}`) {
    case AppRoute.HOME:
      return HOME_PAGE;

    default:
      return null;
  }
}
