import { GlobalComponentProps, HeroComponentProps } from "@/src/common/types";
import { getLastMondayOfMonth } from "@/src/common/utils/getDateOfLastMonday/getDateOfLastMonday";
import { Hero } from "../../globals/Hero/Hero";

export function HomepageHero({
  title,
  image,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
  phone,
}: Omit<HeroComponentProps, 'id' | '__component'> & Pick<GlobalComponentProps, 'phone'>) {
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
      phone={phone}
      isFirstBlock={false}
      isLastBlock={false}
    />
  );
}
