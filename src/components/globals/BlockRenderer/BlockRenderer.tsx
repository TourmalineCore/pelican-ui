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

const ContactZooHero = dynamic(
  () => import(`../../contact-zoo-page/ContactZooHero/ContactZooHero`).then((component) => component.ContactZooHero),
  {
    ssr: false,
  },
);

const HomepageHero = dynamic(
  () => import(`../../home-page/HomepageHero/HomepageHero`).then((component) => component.HomepageHero),
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

const HomepageTickets = dynamic(
  () => import(`../../home-page/HomepageTickets/HomepageTickets`).then((component) => component.HomepageTickets),
  {
    ssr: false,
  },
);

const ContactZooTickets = dynamic(
  () => import(`../../contact-zoo-page/ContactZooTickets/ContactZooTickets`).then((component) => component.ContactZooTickets),
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
  | NotFoundComponentProps
  ;

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
        <HomepageHero
          title={block.title}
          image={block.image}
          scheduleTitle={block.scheduleTitle}
          scheduleTimetables={block.scheduleTimetables}
          infoCardTitle={block.infoCardTitle}
          infoCardDescription={block.infoCardDescription}
        />
      );
    case BlockTypes.CONTACT_ZOO_HERO:
      return (
        <ContactZooHero
          isContactZoo
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
        <HomepageTickets
          generalTicketsTitle={block.generalTicketsTitle}
          generalTicketsLink={block.generalTicketsLink}
          subsidizedTicketsTitle={block.subsidizedTicketsTitle}
          subsidizedTicketsSubtitle={block.subsidizedTicketsSubtitle}
          generalTickets={block.generalTickets}
          subsidizedTickets={block.subsidizedTickets}
        />
      );

    case BlockTypes.CONTACT_ZOO_TICKETS:
      return (
        <ContactZooTickets
          isContactZoo
          generalTicketsTitle={block.generalTicketsTitle}
          generalTicketsSubtitle={block.generalTicketsSubtitle}
          generalTicketsLink={block.generalTicketsLink}
          generalTickets={block.generalTickets}
          contactZooNote={block.contactZooNote}
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
