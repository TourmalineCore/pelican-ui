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
  email: string;
  phone: string;
  popupTicketBuyText: string;
  footerNavTitleLeft: string;
  footerNavTitleRight: string;
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

export type CardProps = {
  id: number,
  image: Image,
  title: string,
  description: string,
};

export type ServicesCardProps = CardProps & {
  labels: string[],
};

export type ContactZooPreviewComponentProps = {
  id: number
  __component: BlockTypes.CONTACT_ZOO_PREVIEW,
  title: string,
  description: string,
  largeImage: Image,
  smallImage?: Image
};

type Image = {
  url: StaticImageData | string;
  alt: string;
};

export type MapComponentProps = {
  id: number
  __component: BlockTypes.MAP,
  title: string,
  subtitle: string,
  note: string,
  image: Image,
};

export type TicketsComponentProps = {
  id: number
  __component: BlockTypes.TICKETS,
  generalTicketsTitle: string,
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
  blocks: [
    NewsListComponentProps,
  ];
};

export type NewsListComponentProps = {
  id: number,
  __component: BlockTypes.NEWS_LIST,
  title: string,
  cards: CardProps[],
};

export type NotFoundPageProps = {
  id: number,
  title: string;
  blocks: (
    NotFoundComponentProps
  )[];
};

export type NotFoundComponentProps = {
  id: number,
  __component: BlockTypes.NOT_FOUND,
};
