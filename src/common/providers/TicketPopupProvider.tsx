import {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from "react";

type TicketPopup = {
  isActive: boolean,
  handleToggle:() => void,
};

export const TicketPopupContext = createContext<TicketPopup>({
  isActive: false,
  handleToggle: () => {},
});

export function TicketPopupProvider({
  children,
}: PropsWithChildren) {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive((prevState) => !prevState);
  }

  const ticketPopupState = useMemo(() => ({
    isActive,
    handleToggle,
  }), [isActive]);

  return (
    <TicketPopupContext.Provider value={ticketPopupState}>
      {children}
    </TicketPopupContext.Provider>
  );
}
