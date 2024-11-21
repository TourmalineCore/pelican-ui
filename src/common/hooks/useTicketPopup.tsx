import { useContext } from "react";
import { TicketPopupContext } from "../providers/TicketPopupProvider";

export function useTicketPopup() {
  const {
    isActive, handleTicketPopupToggle,
  } = useContext(TicketPopupContext);

  return {
    isActive,
    handleTicketPopupToggle,
  };
}
