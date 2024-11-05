export type GlobalComponentProps = {
  navigationLinks: {
    id: number;
    name: string;

    // TODO: in the future change string to enum AppRoute
    link: string;
  }[],
  heroTitle: string,
  scheduleTitle: string,
  scheduleTimetable: {
    id: number,
    days: string,
    time: string,
    ticketsOfficeTime: string,
  }[],
  infoCardTitle: string,
  infoCardDescription: string,
};
