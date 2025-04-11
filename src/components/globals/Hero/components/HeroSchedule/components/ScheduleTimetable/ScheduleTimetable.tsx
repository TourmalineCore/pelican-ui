import { Timetable } from "@/src/common/types";
import clsx from "clsx";

export function ScheduleTimetable({
  className,
  scheduleTimetable,
  isInternalPage,
}: {
  className: string;
  scheduleTimetable: Timetable;
  isInternalPage?: boolean;
}) {
  return (
    <li className={clsx(
      `schedule-timetable`,
      className,
      {
        'schedule-timetable--internal-page': isInternalPage,
      },
    )}
    >
      <p className="schedule-timetable__days">{scheduleTimetable.days}</p>
      <span className="schedule-timetable__time">{scheduleTimetable.time}</span>
      <span className="schedule-timetable__tickets-office-time">{scheduleTimetable.ticketsOfficeTime}</span>
    </li>
  );
}
