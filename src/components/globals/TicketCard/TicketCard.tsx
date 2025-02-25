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
  link?: string,
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
          'ticket-card--bg-green': ticket.theme === `Зелёный` && !isSubsidized,
          'ticket-card--bg-brown': ticket.theme === `Коричневый` && !isSubsidized,
        },
      )}
    >
      {
        link ? (
          <Link
            className="ticket-card__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="ticket-card-link"
          >
            {renderTicketMarkup({
              ticket,
            })}
          </Link>
        ) : renderTicketMarkup({
          ticket,
        })
      }
    </li>
  );
}

function renderTicketMarkup({
  ticket,
}: {
  ticket: Ticket,
}) {
  return (
    <div className="ticket-card__inner">
      <h3 className="ticket-card__category">{ticket.category}</h3>
      <p className="ticket-card__description">{ticket.description}</p>
      <div className="ticket-card__bottom">
        <span className="ticket-card__price">{ticket.price}</span>
        <span className="ticket-card__frequency">{ticket.frequency}</span>
      </div>
    </div>
  );
}
