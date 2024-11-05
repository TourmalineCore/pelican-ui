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
    days: string,
    time: string,
    ticketsOfficeTime: string,
  }[],
  cleanupTitle: string,
  cleanupDescription: string,
};
