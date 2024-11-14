import { BlockTypes } from '@/src/common/enum';
import { HeroComponentProps, ContactZooPreviewComponentProps, TextAndMediaComponentProps } from '@/src/common/types';
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

const TextAndMedia = dynamic(
  () => import(`../../home-page/TextAndMedia/TextAndMedia`).then((component) => component.TextAndMedia),
  {
    ssr: false,
  },
);

export const BlockRenderer = ({
  block,
}: {
  block: (HeroComponentProps | ContactZooPreviewComponentProps | TextAndMediaComponentProps)
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
    case BlockTypes.TEXT_AND_MEDIA:
      return (
        <TextAndMedia
          title={block.title}
          description={block.description}
          video={block.video}
        />
      );
    default:
      return null;
  }
};
