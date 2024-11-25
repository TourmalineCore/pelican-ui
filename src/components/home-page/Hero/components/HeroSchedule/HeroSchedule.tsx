import { HeroComponentProps } from "@/src/common/types";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { Breakpoint } from "@/src/common/enum";
import { ScheduleTimetable } from "./ScheduleTimetable/ScheduleTimetable";

export function HeroSchedule({
  className,
  scheduleTitle,
  scheduleTimetables,
}: {
  className: string,
  scheduleTitle: HeroComponentProps['scheduleTitle'],
  scheduleTimetables: HeroComponentProps['scheduleTimetables'],
}) {
  const windowidth = useWindowWidth();

  const isTablet = windowidth >= Breakpoint.TABLET;
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
