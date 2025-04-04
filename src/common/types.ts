import { StaticImageData } from "next/image";
import { BlockTypes } from "./enum";
import { HomeServicesComponent, SharedHeroComponent, SharedSeoComponent } from "./api-types";

// Page

export type HomePageProps = {
  seo: Seo,
  blocks: (
    HeroComponentProps
    | TextAndMediaComponentProps
    | ServicesComponentProps
    | ImageWithButtonGridComponentProps
    | MapComponentProps
    | HomeTicketsComponentProps
  )[],
};

export type ContactZooPageProps = {
  seo: Seo,
  blocks: (
    HeroComponentProps
    | SharedTicketsComponentProps
  )[];
};

export type NewsPageProps = {
  newsTitle: string;
  seo?: Seo,
};

export type DocumentsPageProps = {
  documentsTitle: string;
  seo?: Seo,
};

export type DiscountsPageProps = {
  seo?: Seo,
  blocks:(DiscountsTermsComponentProps
  | DiscountsCategoriesComponentProps
  )[];
};

// Component

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
  email: string;
  phone: string;
  popupTicketBuyText: string;
  footerNavTitleLeft: string;
  footerNavTitleRight: string;
  ticketsPopup: {
    generalTicketsLink: string;
    generalTickets: {
      id: number,
      category: string,
      price: string,
      description?: string,
    }[],
    subsidizedTicket: {
      category: string,
      description: string,
      categories: {
        id: number,
        category: string,
        price: string,
      }[],
      button: {
        label: string,
        link: string,
      },
    },
    visitingRulesAccordion: {
      images: {
        url: string,
        alternativeText: string,
      }[],
      button: {
        label: string,
        link: string,
      },
    },
    ticketRefundAccordion: {
      refundHead: string,
      refundBody: {
        id: number,
        refundReason: string,
      }[],
      button: {
        label: string,
        link: string,
      },
    },
    buyTicketsButton: {
      label: string,
      link: string,
    },
    note: string,
  },
};

export type DiscountsCategoriesComponentProps = {
  id: number,
  __component: BlockTypes.DISCOUNTS_CATEGORIES,
  title: string,
  categoriesCards: CategoriesCards[]
  remark: {
    title:string,
    link: string,
  }
};

export type CategoriesCards = {
  id: number,
  title: string,
  note?: string,
  price: string,
  rules: {
    terms?: string[],
    info?: string,
    docs?: string[],
    basis?: {
      title:string,
      link: string,
    }[]
  },
};

export type DiscountsTermsComponentProps = {
  id: number,
  __component: BlockTypes.DISCOUNTS_TERMS,
  title: string,
  rulesCards: Rules[]
};

export type Rules = {
  id: number,
  text: string,
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

export type ArticleComponentProps = Omit<NewsArticleProps, 'id' | 'date' | 'link' | 'labels'> & {
  __component: BlockTypes.SHARED_ARTICLE;
} & BlockPosition;

export type NewsArticleProps = CardProps & {
  slug: string;
  innerContent: string;
  publishedAt?: string;
  date?: string;
  seo?: Seo;
};

export type ServicesComponentProps = {
  id: number,
  __component: BlockTypes.HOME_SERVICES
  title: string,
  cards: CardProps[],
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

export type NotFoundComponentProps = {
  id: number,
  __component: BlockTypes.NOT_FOUND,
};

export type SharedTicketsComponentProps = {
  id: number
  __component: BlockTypes.SHARED_TICKETS,
  title: string,
  description?: string,
  link?: string,
  tickets: Ticket[],
  note?: string,
} & BlockPosition;

export type HomeTicketsComponentProps = {
  id: number
  __component: BlockTypes.HOME_TICKETS,
  generalTicketsTitle: string,
  generalTickets: Ticket[],
  generalTicketsLink: string,
  subsidizedTickets: Ticket[],
  subsidizedTicketsLink: string,
  subsidizedTicketsTitle: string,
  subsidizedTicketsDescription?: string,
  isInternalPage?: boolean,
  contactZooNote?: string,
};

export type Ticket = {
  id: number,
  category: string,
  price: string,
  description?: string,
  frequency?: string,
  theme?: `Зелёный` | `Коричневый`,
};

export type CategoriesComponentProps = {
  id: number,
  __component: BlockTypes.SHARED_CATEGORIES,
  categoriesTitle: string,
  categories: Omit<CategoryProps, 'hasTabs'>[],
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

export type DocumentFileProps = {
  id: number,
  name: string,
  url: string,
  ext: string,
};

export type CategoryProps = {
  id: string | number,
  slug: string,
  title: string,
  pageUrl: string,
  hasTabs: boolean,
  seo?: Seo,
};

export type DocumentsTabsProps = {
  queryYear: string,
  availableYears: number[],
};

export type Block = SharedHeroComponent | HomeServicesComponent;

export type PageData = {
  data: {
    blocks: Block[];
    seo?: SharedSeoComponent
  }
};

export type Seo = {
  metaTitle: string,
  metaDescription?: string,
  metaKeywords?: string,
};

type BlockPosition = {
  isFirstBlock?: boolean,
  isLastBlock?: boolean
};

type Image = {
  url: StaticImageData | string;
  alternativeText: string;
};

export type OptionYM = {
  clickmap: boolean;
  trackLinks: boolean;
  accurateTrackBounce: boolean;
  webvisor: boolean;
};

declare global {
  interface Window {
    ym: (id: number, operationName: string, option: OptionYM | string) => unknown;
    gtag: (operationName: string, ...arg: any) => unknown;
  }
}
