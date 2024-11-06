export function ScheduleTimetable({
  data,
}: {
  data: {
    id: number,
    days: string,
    time: string,
    ticketsOfficeTime: string
  },
}) {
  return (
    <li
      className="schedule-timetable"
      key={data.id}
    >
      <p className="schedule-timetable__days caption-1 font-weight-medium">{data.days}</p>
      <span className="schedule-timetable__time body-2 font-weight-medium">{data.time}</span>
      <span className="schedule-timetable__tickets-office-time caption-2 font-weight-regular">{data.ticketsOfficeTime}</span>
    </li>
  );
}
