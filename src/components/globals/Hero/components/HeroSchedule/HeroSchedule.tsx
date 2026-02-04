import { HeroComponentProps } from "@/src/common/types";
import clsx from "clsx";
import { ScheduleTimetable } from "./components/ScheduleTimetable/ScheduleTimetable";

export function HeroSchedule({
  className,
  scheduleTitle,
  scheduleTimetables,
  isInternalPage,
}: {
  className: string;
  scheduleTitle: HeroComponentProps['scheduleTitle'];
  scheduleTimetables: HeroComponentProps['scheduleTimetables'];
  isInternalPage?: boolean;
}) {
  return (
    <div className={clsx(
      `hero-schedule`,
      className,
      {
        'hero-schedule--internal-page': isInternalPage,
      },
    )}
    >
      <p className="hero-schedule__title">{scheduleTitle}</p>
      <ul className="hero-schedule__list">
        {scheduleTimetables.map((el) => (
          <ScheduleTimetable
            key={el.id}
            className="hero-schedule__timetable"
            scheduleTimetable={el}
            isInternalPage={isInternalPage}
          />
        ))}
      </ul>
    </div>
  );
}
