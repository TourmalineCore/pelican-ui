import { StaticImageData } from "next/image";
import { BlockTypes } from "./enum";

export type GlobalComponentProps = {
  navigationLinks: {
    id: number;
    name: string;

    // TODO: in the future change string to enum AppRoute
    link: string;
  }[],
  email: string;
  phone: string;
  popupTicketBuyText: string;
};

export type HomePageProps = {
  id: number,
  title: string;
  blocks: (HeroComponentProps | ServicesComponentProps)[];
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
  cards: ServicesCard[],
  phoneText: string,
  emailText: string,
};

export type ServicesCard = {
  id: number,
  image: {
    url: StaticImageData;
    alt: string;
  },
  labels: string[],
  title: string,
  description: string,
};
