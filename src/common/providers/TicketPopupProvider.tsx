import {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from "react";

type TicketPopup = {
  isActive: boolean,
  handleTicketPopupToggle:() => void,
};

export const TicketPopupContext = createContext<TicketPopup>({
  isActive: false,
  handleTicketPopupToggle: () => {},
});

export function TicketPopupProvider({
  children,
}: PropsWithChildren) {
  const [isActive, setIsActive] = useState(false);

  function handleTicketPopupToggle() {
    setIsActive((prevState) => !prevState);
  }

  const ticketPopupState = useMemo(() => ({
    isActive,
    handleTicketPopupToggle,
  }), [isActive]);

  return (
    <TicketPopupContext.Provider value={ticketPopupState}>
      {children}
    </TicketPopupContext.Provider>
  );
}
