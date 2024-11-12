import { BlockTypes } from '@/src/common/enum';
import { HeroComponentProps, ServicesComponentProps } from '@/src/common/types';
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

export const BlockRenderer = ({
  block,
}: {
  block: HeroComponentProps | ServicesComponentProps
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
          emailText={block.phoneText}
        />
      );
    default:
      return null;
  }
};
