import { StaticImageData } from "next/image";
import { BlockTypes } from "./enum";

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
  __component: BlockTypes.HERO,
  title: string,
  image: Image,
  scheduleTitle: string,
  scheduleTimetables: Timetable[],
  infoCardTitle: string,
  infoCardDescription: string,
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

export type ServicesComponentProps = {
  id: number,
  __component: BlockTypes.SERVICES,
  title: string,
  cards: ServicesCardProps[],
  phoneText: string,
  emailText: string,
};

export type ServicesCardProps = CardProps & {
  description: string,
  labels: string[],
};

export type CardProps = {
  id: number,
  image: Image,
  title: string,
  description?: string,
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
  id: number,
  title: string;
  blocks: (
    HeroComponentProps
    | TextAndMediaComponentProps
    | ServicesComponentProps
    | ContactZooPreviewComponentProps
    | MapComponentProps
    | TicketsComponentProps
  )[];
};

export type NotFoundComponentProps = {
  id: number,
  __component: BlockTypes.NOT_FOUND,
};

export type TicketsComponentProps = {
  id: number
  __component: BlockTypes.TICKETS,
  generalTicketsTitle: string,
  generalTicketsLink: string,
  subsidizedTicketsTitle: string,
  subsidizedTicketsSubtitle: string,
  generalTickets: Ticket[],
  subsidizedTickets: Ticket[],
};

export type Ticket = {
  id: number,
  category: string,
  description?: string,
  price: string,
  frequency?: string,
};

export type NewsPageProps = {
  id: number,
  title: string;
  newsTitle: string;
};

export type NewsProps = CardProps & {
  publishedAt?: string;
  innerContent: string;
};

export type DocumentsPageProps = {
  id: number,
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

type Image = {
  url: StaticImageData | string;
  alternativeText: string;
};
