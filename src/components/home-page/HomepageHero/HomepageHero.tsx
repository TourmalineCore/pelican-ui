import { GlobalComponentProps, HeroComponentProps } from "@/src/common/types";
import { getLastMondayOfMonth } from "@/src/common/utils/getDateOfLastMonday";
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
  const currentDate = new Date();

  return (
    <Hero
      title={title}
      image={image}
      scheduleTitle={scheduleTitle}
      scheduleTimetables={scheduleTimetables}
      infoCardTitle={infoCardTitle || getLastMondayOfMonth({
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
      })}
      infoCardDescription={infoCardDescription}
      email={email}
      isFirstBlock={false}
      isLastBlock={false}
    />
  );
}
