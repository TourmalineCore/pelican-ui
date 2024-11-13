import { BlockTypes } from '@/src/common/enum';
import { HeroComponentProps, ContactZooPreviewComponentProps, TicketsComponentProps } from '@/src/common/types';
import dynamic from 'next/dynamic';

const Hero = dynamic(
  () => import(`../../home-page/Hero/Hero`).then((component) => component.Hero),
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
}: {
  block: (HeroComponentProps | ContactZooPreviewComponentProps | TicketsComponentProps)
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
          title={block.title}
        />
      );
    default:
      return null;
  }
};
