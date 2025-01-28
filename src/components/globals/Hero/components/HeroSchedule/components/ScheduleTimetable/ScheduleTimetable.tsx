import { HeroComponentProps, Timetable } from "@/src/common/types";
import clsx from "clsx";

export function ScheduleTimetable({
  className,
  scheduleTimetable,
  isContactZoo,
}: {
  className: string,
  scheduleTimetable: Timetable,
  isContactZoo: HeroComponentProps['isContactZoo'],
}) {
  return (
    <li className={clsx(
      `schedule-timetable`,
      className,
      {
        'schedule-timetable--contact-zoo': isContactZoo,
      },
    )}
    >
      <p className="schedule-timetable__days">{scheduleTimetable.days}</p>
      <span className="schedule-timetable__time">{scheduleTimetable.time}</span>
      <span className="schedule-timetable__tickets-office-time">{scheduleTimetable.ticketsOfficeTime}</span>
    </li>
  );
}
