import { GlobalComponentProps } from "@/src/common/types";
import { ScheduleTimetable } from "./ScheduleTimetable/ScheduleTimetable";

export function HeroSchedule({
  className = ``,
  scheduleTitle,
  scheduleTimetables,
}: {
  className: string,
  scheduleTitle: GlobalComponentProps['scheduleTitle'],
  scheduleTimetables: GlobalComponentProps['scheduleTimetables'],
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
