import { Ticket } from "@/src/common/types";
import clsx from "clsx";

export function TicketCard({
  className,
  ticket,
  isSubsidized,
  isGeneral,
}: {
  className: string,
  ticket: Ticket,
  isSubsidized?: boolean,
  isGeneral?: boolean,
}) {
  return (
    <li
      className={clsx(
        `ticket-card`,
        className,
        {
          'ticket-card--general': isGeneral,
          'ticket-card--subsidized': isSubsidized,
        },
      )}
    >
      <div className="ticket-card__inner">
        <h3 className="ticket-card__category">{ticket.category}</h3>
        <p className="ticket-card__description">{ticket.description}</p>
        <div className="ticket-card__bottom">
          <span className="ticket-card__price">{ticket.price}</span>
          <span className="ticket-card__frequency">{ticket.frequency}</span>
        </div>

      </div>
    </li>
  );
}
