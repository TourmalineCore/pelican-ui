import { HeroComponentProps } from "@/src/common/types";
import { ScheduleTimetable } from "./ScheduleTimetable/ScheduleTimetable";

export function HeroSchedule({
  scheduleTitle,
  scheduleTimetables,
}: {
  scheduleTitle: HeroComponentProps['scheduleTitle'],
  scheduleTimetables: HeroComponentProps['scheduleTimetables'],
}) {
  return (
    <div className="hero-schedule">
      <p className="hero-schedule__title">{scheduleTitle}</p>
      <ul className="hero-schedule__list">
        {scheduleTimetables.map((el) => (
          <ScheduleTimetable
            key={el.id}
            scheduleTimetable={el}
          />
        ))}
      </ul>
    </div>
  );
}
