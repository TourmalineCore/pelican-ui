import { GlobalComponentProps } from "@/src/common/types";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type TicketsPopupCardProps = PropsWithChildren & {
  ticketsPopupRefundReasons: GlobalComponentProps['ticketsPopup']['accordionTicketRefund']['refundBody'];
  className?: string;
};

export function TicketsPopupRefundReasons({
  ticketsPopupRefundReasons,
  className,
}: TicketsPopupCardProps) {
  return (
    <ul className={clsx(
      `tickets-popup-refund-reasons`,
      className,
    )}
    >
      {ticketsPopupRefundReasons.map(({
        id,
        refundReason,
      }) => (
        <li
          className="tickets-popup-refund-reasons__reason"
          key={id}
        >
          <span className="tickets-popup-refund-reasons__counter" />
          <span className="tickets-popup-refund-reasons__text">{refundReason}</span>
        </li>
      ))}
    </ul>

  );
}
