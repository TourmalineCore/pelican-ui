import { Ticket } from "@/src/common/types";
import clsx from "clsx";
import Link from "next/link";

export function TicketCard({
  className,
  ticket,
  link,
  isSubsidized,
  isGeneral,
}: {
  className: string,
  link: string,
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
      {
        isGeneral && (
          <Link
            className="ticket-card__link"
            href={link}
            data-testid="ticket-card-link"
          >
            <div className="ticket-card__inner">
              <h3 className="ticket-card__category">{ticket.category}</h3>
              <p className="ticket-card__description">{ticket.description}</p>
              <div className="ticket-card__bottom">
                <span className="ticket-card__price">{ticket.price}</span>
                <span className="ticket-card__frequency">{ticket.frequency}</span>
              </div>
            </div>
          </Link>
        )
      }
      {isSubsidized && (
        <div className="ticket-card__inner">
          <h3 className="ticket-card__category">{ticket.category}</h3>
          <p className="ticket-card__description">{ticket.description}</p>
          <div className="ticket-card__bottom">
            <span className="ticket-card__price">{ticket.price}</span>
            <span className="ticket-card__frequency">{ticket.frequency}</span>
          </div>
        </div>
      )}
    </li>
  );
}
