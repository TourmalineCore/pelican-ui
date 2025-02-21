import { StaticImageData } from "next/image";
import { BlockTypes } from "./enum";
import { HomeServicesComponent, SharedHeroComponent, SharedSeoComponent } from "./api-types";

export type GlobalComponentProps = {
  navigationLinks: {
    id: number;
    name: string;

    // TODO: in the future change string to enum AppRoute
    link: string;
  }[];
  officialLinks: {
    id: number;
    name: string;

    // TODO: in the future change string to enum AppRoute
    link: string;
    icon: StaticImageData,
    alt: string;
  }[];
  footerUserLinks: {
    id: number;
    name: string;

    // TODO: in the future change string to enum AppRoute
    link: string;
  }[];
  footerAboutLinks: {
    id: number;
    name: string;

    // TODO: in the future change string to enum AppRoute
    link: string;
  }[];
  ticketsPopupGeneral: Ticket[];
  ticketsPopupSubsidized: Ticket[];
  ticketsPopupRulesImages: Image[];
  ticketsPopupRefundReasons: {
    id: number,
    refundReason: string
  }[]
  email: string;
  phone: string;
  popupTicketBuyText: string;
  ticketBuyLink: string;
  footerNavTitleLeft: string;
  footerNavTitleRight: string;
};

export type HeroComponentProps = {
  id: number
  __component: BlockTypes.SHARED_HERO,
  title: string,
  image: Image,
  scheduleTitle: string,
  scheduleTimetables: Timetable[],
  infoCardTitle?: string,
  infoCardDescription: string,
  // todo move to component level?
  isInternalPage?: boolean
} & BlockPosition;

export type Timetable = {
  id: number,
  days: string,
  time: string,
  ticketsOfficeTime: string,
};

export type TextAndMediaComponentProps = {
  id: number
  __component: BlockTypes.SHARED_TEXT_AND_MEDIA,
  title: string,
  description: string,
  media: {
    alternativeText: string,
    url: string,
    mime: string,
  },
  contentOrder: "Текст слева" | "Текст справа",
  viewFootsteps: boolean,
} & BlockPosition;

export type ServicesComponentProps = Omit<CardsComponentProps, '__component'> & {
  __component: BlockTypes.HOME_SERVICES
  phone: string,
  email: string,
};

export type CardsComponentProps = {
  id: number,
  __component: BlockTypes.SHARED_CARDS,
  title: string,
  cards: CardProps[],
};

export type CardProps = {
  id: number | string,
  image: Image,
  title: string,
  description?: string,
  link?: string,
  labels?: {
    id: number,
    text: string
  }[]
};

export type ImageWithButtonGridComponentProps = {
  id: number
  __component: BlockTypes.SHARED_IMAGE_WITH_BUTTON_GRID,
  title: string,
  description: string,
  largeImage: Image,
  smallImage?: Image,
  link: string,
  label: string,
  isInternalPage?: boolean
} & BlockPosition;

export type MapComponentProps = {
  id: number
  __component: BlockTypes.HOME_MAP,
  title: string,
  subtitle: string,
  note: string,
  image: Image,
};

export type HomePageProps = {
  seo: {
    metaTitle: string,
    metaDescription: string,
  },
  blocks: (
    HeroComponentProps
    | TextAndMediaComponentProps
    | ServicesComponentProps
    | ImageWithButtonGridComponentProps
    | MapComponentProps
    | TicketsComponentProps
  )[],
};

export type ContactZooPageProps = {
  seo: {
    metaTitle: string,
    metaDescription: string,
  },
  blocks: (
    HeroComponentProps
    | SharedTicketsComponentProps
  )[];
};

export type NotFoundComponentProps = {
  id: number,
  __component: BlockTypes.NOT_FOUND,
};

export type SharedTicketsComponentProps = {
  id: number
  __component: BlockTypes.SHARED_TICKETS,
  title: string,
  subtitle?: string,
  link?: string,
  tickets: Ticket[],
  note?: string,
} & BlockPosition;

export type TicketsComponentProps = {
  id: number
  __component: BlockTypes.TICKETS,
  generalTicketsTitle: string,
  generalTicketsSubtitle?: string,
  generalTicketsLink?: string,
  subsidizedTicketsTitle?: string,
  subsidizedTicketsSubtitle?: string,
  generalTickets: Ticket[],
  subsidizedTickets?: Ticket[],
  isInternalPage?: boolean,
  contactZooNote?: string,
};

export type Ticket = {
  id: number,
  category: string,
  description?: string,
  price: string,
  frequency?: string,
  theme?: `Зелёный` | `Коричневый`,
};

export type NewsPageProps = {
  title: string;
  newsTitle: string;
};

export type NewsArticleProps = CardProps & {
  slug: string;
  publishedAt?: string;
  innerContent: string;
  date?: string;
};

export type ArticleComponentProps = Omit<NewsArticleProps, 'id' | 'date' | 'link' | 'labels'> & {
  __component: BlockTypes.SHARED_ARTICLE;
} & BlockPosition;

export type DocumentsPageProps = {
  pageTitle: string,
  documentsTitle: string;
};

export type DocumentsTabsProps = {
  queryYear: string,
  availableYears: number[],
};

export type CategoryProps = {
  id: string | number,
  slug: string,
  title: string,
  pageUrl: string,
  hasTabs: boolean,
};

export type CategoriesComponentProps = {
  id: number,
  __component: BlockTypes.SHARED_CATEGORIES,
  categoriesTitle: string,
  categories: Omit<CategoryProps, 'hasTabs'>[],
};

export type DocumentFileProps = {
  id: number,
  name: string,
  url: string,
  ext: string,
};

export type DocumentsProps = {
  id: number,
  date: string,
  showDate: boolean,
  title: string,
  subtitle?: string,
  description?: string,
  files: DocumentFileProps[],
  category: {
    id: CategoryProps['id'],
  }
};

export type Block = SharedHeroComponent | HomeServicesComponent;

export type PageData = {
  data: {
    blocks: Block[];
    seo?: SharedSeoComponent
  }
};

export type BlockPosition = {
  isFirstBlock?: boolean,
  isLastBlock?: boolean
};

type Image = {
  url: StaticImageData | string;
  alternativeText: string;
};
