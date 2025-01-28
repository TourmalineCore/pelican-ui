import { HeroComponentProps } from "@/src/common/types";
import { Hero } from "../../globals/Hero/Hero";

export function HomepageHero({
  title,
  image,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
}: Omit<HeroComponentProps, 'id' | '__component'>) {
  return (
    <Hero
      title={title}
      image={image}
      scheduleTitle={scheduleTitle}
      scheduleTimetables={scheduleTimetables}
      infoCardTitle={infoCardTitle}
      infoCardDescription={infoCardDescription}
    />
  );
}
