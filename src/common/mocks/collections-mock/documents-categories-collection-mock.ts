import { AppRoute } from "../../enum";
import { CategoryProps } from "../../types";

export const MOCK_DOCUMENTS_CATEGORIES: CategoryProps[] = [
  {
    id: 1,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `Отчеты`,
    slug: `otchety`,
    hasTabs: true,
  },
  {
    id: 2,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `Торги`,
    slug: `torgi`,
    hasTabs: true,
  },
  {
    id: 3,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `Учредительные документы и\u00A0реквизиты`,
    slug: `uchreditelnie-dokumenti-i-rekviziti`,
    hasTabs: false,
  },
  {
    id: 4,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `Муниципальные задания и отчёты по выполнению муниципального задания`,
    slug: `munitsipalnie-zadaniya-i-otchyoti-po-vipolneniyu-munitsipalnogo-zadaniya`,
    hasTabs: true,
  },
  {
    id: 5,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `Закупки`,
    slug: `zakupki`,
    hasTabs: true,
  },
  {
    id: 6,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `Приказы`,
    slug: `prikazi`,
    hasTabs: true,
  },
  {
    id: 7,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `О деятельности учреждения`,
    slug: `o-deyatelnosti-uchrezhdeniya`,
    hasTabs: true,
  },
  {
    id: 8,
    pageUrl: `${AppRoute.DOCUMENTS}`,
    title: `Планы Финансово-Хозяйственной Деятельности`,
    slug: `plani-finansovo-khozyaistvennoi-deyatelnosti`,
    hasTabs: true,
  },
];
