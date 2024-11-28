/* eslint-disable @typescript-eslint/indent */
import { BlockTypes } from '@/src/common/enum';
import {
  GlobalComponentProps,
  HeroComponentProps,
  TextAndMediaComponentProps,
  ServicesComponentProps,
  ContactZooPreviewComponentProps,
  MapComponentProps,
  TicketsComponentProps,
  NotFoundComponentProps,
} from '@/src/common/types';
import dynamic from 'next/dynamic';

const Hero = dynamic(
  () => import(`../../home-page/Hero/Hero`).then((component) => component.Hero),
  {
    ssr: false,
  },
);

const TextAndMedia = dynamic(
  () => import(`../../home-page/TextAndMedia/TextAndMedia`).then((component) => component.TextAndMedia),
  {
    ssr: false,
  },
);

const Services = dynamic(
  () => import(`../../home-page/Services/Services`).then((component) => component.Services),
  {
    ssr: false,
  },
);

const ContactZooPreview = dynamic(
  () => import(`../../home-page/ContactZooPreview/ContactZooPreview`).then((component) => component.ContactZooPreview),
  {
    ssr: false,
  },
);

const Map = dynamic(
  () => import(`../../home-page/Map/Map`).then((Component) => Component.Map),
  {
    ssr: false,
  },
);

const Tickets = dynamic(
  () => import(`../../home-page/Tickets/Tickets`).then((component) => component.Tickets),
  {
    ssr: false,
  },
);

const NotFound = dynamic(
  () => import(`../../not-found-page/NotFound/NotFound`).then((component) => component.NotFound),
  {
    ssr: false,
  },
);

type Block = HeroComponentProps
  | TextAndMediaComponentProps
  | ServicesComponentProps
  | ContactZooPreviewComponentProps
  | MapComponentProps
  | TicketsComponentProps
  | NotFoundComponentProps;

export const BlockRenderer = ({
  block,
  phone,
  email,
}: {
  block: Block,
  phone: GlobalComponentProps['phone'],
  email: GlobalComponentProps['email']
}) => {
  switch (block.__component) {
    case BlockTypes.HERO:
      return (
        <Hero
          title={block.title}
          image={block.image}
          scheduleTitle={block.scheduleTitle}
          scheduleTimetables={block.scheduleTimetables}
          infoCardTitle={block.infoCardTitle}
          infoCardDescription={block.infoCardDescription}
        />
      );
    case BlockTypes.TEXT_AND_MEDIA:
      return (
        <TextAndMedia
          title={block.title}
          description={block.description}
          video={block.video}
        />
      );
    case BlockTypes.SERVICES:
      return (
        <Services
          title={block.title}
          cards={block.cards}
          phoneText={block.phoneText}
          emailText={block.emailText}
          phone={phone}
          email={email}
        />
      );

    case BlockTypes.CONTACT_ZOO_PREVIEW:
      return (
        <ContactZooPreview
          title={block.title}
          description={block.description}
          largeImage={block.largeImage}
          smallImage={block.smallImage}
        />
      );

    case BlockTypes.MAP:
      return (
        <Map
          title={block.title}
          subtitle={block.subtitle}
          note={block.note}
          image={block.image}
        />
      );

    case BlockTypes.TICKETS:
      return (
        <Tickets
          generalTicketsTitle={block.generalTicketsTitle}
          subsidizedTicketsTitle={block.subsidizedTicketsTitle}
          subsidizedTicketsSubtitle={block.subsidizedTicketsSubtitle}
          generalTickets={block.generalTickets}
          subsidizedTickets={block.subsidizedTickets}
        />
      );

    case BlockTypes.NOT_FOUND:
      return (
        <NotFound />
      );

    default:
      return null;
  }
};
