/* eslint-disable @typescript-eslint/indent */
import { AppRoute, BlockTypes } from '@/src/common/enum';
import {
  GlobalComponentProps,
  HeroComponentProps,
  TextAndMediaComponentProps,
  CardsComponentProps,
  ContactZooPreviewComponentProps,
  MapComponentProps,
  TicketsComponentProps,
  NotFoundComponentProps,
  ServicesComponentProps,
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

const Tickets = dynamic(
  () => import(`../../globals/Tickets/Tickets`).then((component) => component.Tickets),
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
  | CardsComponentProps
  | ServicesComponentProps
  | ContactZooPreviewComponentProps
  | MapComponentProps
  | TicketsComponentProps
  | NotFoundComponentProps;

export const BlockRenderer = ({
  slug,
  block,
  phone,
  email,
}: {
  slug: string,
  block: Block,
  phone: GlobalComponentProps['phone'],
  email: GlobalComponentProps['email']
}) => {
  if (block.__component === BlockTypes.SHARED_HERO && slug === AppRoute.HOME) {
    return (
      <HomepageHero
        title={block.title}
        image={block.image}
        scheduleTitle={block.scheduleTitle}
        scheduleTimetables={block.scheduleTimetables}
        infoCardTitle={block.infoCardTitle}
        infoCardDescription={block.infoCardDescription}
        email={email}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_HERO && slug === AppRoute.CONTACT_ZOO) {
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
  }

  if (block.__component === BlockTypes.TEXT_AND_MEDIA) {
    return (
      <TextAndMedia
        title={block.title}
        description={block.description}
        video={block.video}
      />
    );
  }

  if (block.__component === BlockTypes.HOME_SERVICES) {
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
  }

  if (block.__component === BlockTypes.CONTACT_ZOO_PREVIEW) {
    return (
      <ContactZooPreview
        title={block.title}
        description={block.description}
        largeImage={block.largeImage}
        smallImage={block.smallImage}
      />
    );
  }

  if (block.__component === BlockTypes.MAP) {
    return (
      <Map
        title={block.title}
        subtitle={block.subtitle}
        note={block.note}
        image={block.image}
      />
    );
  }

  if (block.__component === BlockTypes.TICKETS) {
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
  }

  if (block.__component === BlockTypes.CONTACT_ZOO_TICKETS) {
    return (
      <Tickets
        title={block.generalTicketsTitle}
        subtitle={block.generalTicketsSubtitle}
        link={block.generalTicketsLink}
        tickets={block.generalTickets}
        note={block.contactZooNote}
      />
    );
  }

  if (block.__component === BlockTypes.NOT_FOUND) {
    return <NotFound />;
  }

  return null;
};
