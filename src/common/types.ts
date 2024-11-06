export type GlobalComponentProps = {
  navigationLinks: {
    id: number;
    name: string;

    // TODO: in the future change string to enum AppRoute
    link: string;
  }[]
  mail: string;
  phone: string;
  popupTicketBuyText: string;
};
