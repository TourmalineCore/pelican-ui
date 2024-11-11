import { BlockTypes } from '@/src/common/enum';
import { HeroComponentProps } from '@/src/common/types';
import dynamic from 'next/dynamic';

const Hero = dynamic(
  () => import(`../../home-page/Hero/Hero`).then((component) => component.Hero),
  { ssr: false },
);

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
