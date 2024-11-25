import { Timetable } from "@/src/common/types";

export function ScheduleTimetable({
  className,
  scheduleTimetable,
}: {
  className: string,
  scheduleTimetable: Timetable,
}) {
  return (
    <li className={`${className} schedule-timetable`}>
      <p className="schedule-timetable__days">{scheduleTimetable.days}</p>
      <span className="schedule-timetable__time">{scheduleTimetable.time}</span>
      <span className="schedule-timetable__tickets-office-time">{scheduleTimetable.ticketsOfficeTime}</span>
    </li>
  );
}
