import { HeroComponentProps } from '@/src/common/types';
import { Hero } from '../../home-page/Hero/Hero';

enum BlockTypes {
  HERO = `home.hero`,
}

export const BlockRenderer = ({
  block,
}: {
  block: HeroComponentProps
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
    default:
      return null;
  }
};
