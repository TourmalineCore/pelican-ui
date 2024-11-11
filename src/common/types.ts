import { StaticImageData } from "next/image";

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
  blocks: (HeroComponentProps | ContactZooPreviewComponentProps)[];
};

export type HeroComponentProps = {
  id: number
  __component: "home.hero",
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
  blocks: ContactZooPreviewComponentProps[];
};

export type ContactZooPreviewComponentProps = {
  id: number
  __component: "home.contact-zoo-preview",
  title: string,
  description: string,
  largeImage: {
    url: StaticImageData;
    alt: string;
  },
  smallImage: {
    url: StaticImageData;
    alt: string;
  },
};
