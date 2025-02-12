import { StaticImageData } from "next/image";
import { BlockTypes } from "./enum";
import { SharedHeroComponent, SharedSeoComponent } from "./api-types";

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
  isContactZoo?: boolean
};

export type Timetable = {
  id: number,
  days: string,
  time: string,
  ticketsOfficeTime: string,
};

export type TextAndMediaComponentProps = {
  id: number
  __component: BlockTypes.TEXT_AND_MEDIA,
  title: string,
  description: string,
  video: {
    alt: string,
    url: string,
    mime: string,
  },
};

export type ServicesComponentProps = Omit<CardsComponentProps, '__component'> & {
  __component: BlockTypes.HOME_SERVICES
  phoneText: string,
  emailText: string,
};

export type CardsComponentProps = {
  id: number,
  __component: BlockTypes.SHARED_CARDS,
  title: string,
  cards: CardProps[],
};

export type CardProps = {
  id: number,
  image: Image,
  title: string,
  description?: string,
  link?: string,
  labels?: string[]
};

export type ContactZooPreviewComponentProps = {
  id: number
  __component: BlockTypes.CONTACT_ZOO_PREVIEW,
  title: string,
  description: string,
  largeImage: Image,
  smallImage?: Image
};

export type MapComponentProps = {
  id: number
  __component: BlockTypes.MAP,
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
    | ContactZooPreviewComponentProps
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
    | TicketsComponentProps
  )[];
};

export type NotFoundComponentProps = {
  id: number,
  __component: BlockTypes.NOT_FOUND,
};

export type TicketsComponentProps = {
  id: number
  __component: BlockTypes.TICKETS | BlockTypes.CONTACT_ZOO_TICKETS,
  generalTicketsTitle: string,
  generalTicketsSubtitle?: string,
  generalTicketsLink?: string,
  subsidizedTicketsTitle?: string,
  subsidizedTicketsSubtitle?: string,
  generalTickets: Ticket[],
  subsidizedTickets?: Ticket[],
  isContactZoo?: boolean,
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

export type NewsProps = CardProps & {
  publishedAt?: string;
  innerContent: string;
};

export type DocumentsPageProps = {
  title: string,
  documentsTitle: string;
};

export type DocumentsTabsProps = {
  queryYear: string,
  availableYears: number[],
};

export type DocumentsCategoriesProps = {
  id: number,
  title: string,
  hasTabs: boolean,
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
    id: number,
  }
};

export type Block = SharedHeroComponent;

export type PageData = {
  data: {
    attributes: {
      blocks: Block[];
      seo?: SharedSeoComponent
    }
  }
};

type Image = {
  url: StaticImageData | string;
  alternativeText: string;
};
