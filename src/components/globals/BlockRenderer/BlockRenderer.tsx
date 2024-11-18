import { BlockTypes } from '@/src/common/enum';
import {
  GlobalComponentProps,
  HeroComponentProps,
  ServicesComponentProps,
  ContactZooPreviewComponentProps,
  TicketsComponentProps,
} from '@/src/common/types';
import dynamic from 'next/dynamic';

const Hero = dynamic(
  () => import(`../../home-page/Hero/Hero`).then((component) => component.Hero),
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

const Tickets = dynamic(
  () => import(`../../home-page/Tickets/Tickets`).then((component) => component.Tickets),
  {
    ssr: false,
  },
);

export const BlockRenderer = ({
  block,
  phone,
  email,
}: {
  block: (
    HeroComponentProps |
    ServicesComponentProps |
    ContactZooPreviewComponentProps |
    TicketsComponentProps
  ),
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
    default:
      return null;
  }
};
