import { HeroComponentProps, ContactZooPreviewComponentProps } from '@/src/common/types';
import { ContactZooPreview } from '@/src/components/home-page/ContactZooPreview/ContactZooPreview';
import { Hero } from '../../home-page/Hero/Hero';

enum BlockTypes {
  HERO = `home.hero`,
  CONTACT_ZOO_PREVIEW = `home.contact-zoo-preview`,
}

export const BlockRenderer = ({
  block,
}: {
  block: (HeroComponentProps | ContactZooPreviewComponentProps)
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
    default:
      return null;
  }
};
