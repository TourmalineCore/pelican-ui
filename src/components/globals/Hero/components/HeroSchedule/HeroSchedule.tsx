import { HeroComponentProps } from "@/src/common/types";
import { ScheduleTimetable } from "./ScheduleTimetable/ScheduleTimetable";

export function HeroSchedule({
  className = ``,
  scheduleTitle,
  scheduleTimetables,
}: {
  className: string,
  scheduleTitle: HeroComponentProps['scheduleTitle'],
  scheduleTimetables: HeroComponentProps['scheduleTimetables'],
}) {
  return (
    <div className={`${className} schedule`}>
      <p className="schedule__title">{scheduleTitle}</p>
      <ul className="schedule__list">
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
