import { HeroComponentProps } from "@/src/common/types";
import { Hero } from "../../globals/Hero/Hero";

export function ContactZooHero({
  title,
  image,
  scheduleTitle,
  scheduleTimetables,
  infoCardDescription,
}: Omit<HeroComponentProps, 'id' | '__component'>) {
  return (
    <Hero
      title={title}
      image={image}
      scheduleTitle={scheduleTitle}
      scheduleTimetables={scheduleTimetables}
      infoCardDescription={infoCardDescription}
      isContactZoo
    />
  );
}
