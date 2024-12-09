import { HeroComponentProps } from "@/src/common/types";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { ScheduleTimetable } from "./components/ScheduleTimetable/ScheduleTimetable";

export function HeroSchedule({
  className,
  scheduleTitle,
  scheduleTimetables,
}: {
  className: string,
  scheduleTitle: HeroComponentProps['scheduleTitle'],
  scheduleTimetables: HeroComponentProps['scheduleTimetables'],
}) {
  const {
    isTablet,
  } = useWindowWidth();

  return (
    <div className={`${className} hero-schedule`}>
      {isTablet && <p className="hero-schedule__title">{scheduleTitle}</p>}
      <ul className="hero-schedule__list">
        {scheduleTimetables.map((el) => (
          <ScheduleTimetable
            key={el.id}
            className="hero-schedule__timetable"
            scheduleTimetable={el}
          />
        ))}
      </ul>
    </div>
  );
}
