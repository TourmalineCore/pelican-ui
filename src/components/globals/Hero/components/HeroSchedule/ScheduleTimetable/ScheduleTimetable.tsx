import { Timetable } from "@/src/common/types";

export function ScheduleTimetable({
  scheduleTimetable,
}: {
  scheduleTimetable: Timetable,
}) {
  return (
    <li className="schedule-timetable">
      <p className="schedule-timetable__days caption-1 font-weight-medium">{scheduleTimetable.days}</p>
      <span className="schedule-timetable__time body-2 font-weight-medium">{scheduleTimetable.time}</span>
      <span className="schedule-timetable__tickets-office-time caption-2 font-weight-regular">{scheduleTimetable.ticketsOfficeTime}</span>
    </li>
  );
}
