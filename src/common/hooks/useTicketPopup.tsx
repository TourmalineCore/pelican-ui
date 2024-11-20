import { useContext } from "react";
import { TicketPopupContext } from "../providers/TicketPopupProvider";

export function useTicketPopup() {
  const {
    isActive, handleToggle,
  } = useContext(TicketPopupContext);

  return {
    isActive,
    handleToggle,
  };
}
