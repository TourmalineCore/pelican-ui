import { GlobalComponentProps, HeroComponentProps } from "@/src/common/types";
import { Hero } from "../../globals/Hero/Hero";

export function HomepageHero({
  title,
  image,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
  email,
}: Omit<HeroComponentProps, 'id' | '__component'> & Pick<GlobalComponentProps, 'email'>) {
  return (
    <Hero
      title={title}
      image={image}
      scheduleTitle={scheduleTitle}
      scheduleTimetables={scheduleTimetables}
      infoCardTitle={infoCardTitle}
      infoCardDescription={infoCardDescription}
      email={email}
    />
  );
}
