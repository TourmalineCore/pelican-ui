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
    | ServicesComponentProps
    | ContactZooPreviewComponentProps
    | MapComponentProps
  )[];
};

export type HeroComponentProps = {
  id: number
  __component: BlockTypes.HERO,
  title: string,
  image: {
    url: StaticImageData;
    alt: string;
  }
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

export type ServicesComponentProps = {
  id: number,
  __component: BlockTypes.SERVICES,
  title: string,
  cards: ServicesCardProps[],
  phoneText: string,
  emailText: string,
};

export type ServicesCardProps = {
  id: number,
  image: {
    url: StaticImageData;
    alt: string;
  },
  labels: string[],
  title: string,
  description: string,
};

export type ContactZooPreviewComponentProps = {
  id: number
  __component: BlockTypes.CONTACT_ZOO_PREVIEW,
  title: string,
  description: string,
  largeImage: {
    url: StaticImageData;
    alt: string;
  },
  smallImage?: {
    url: StaticImageData;
    alt: string;
  },
};

export type MapComponentProps = {
  id: number
  __component: BlockTypes.MAP,
  title: string,
  subtitle: string,
  note: string,
  image: {
    url: StaticImageData;
    alt: string;
  },
};
