import { Ticket } from "@/src/common/types";

export function TicketCard({
  className,
  ticket,
}: {
  className: string,
  ticket: Ticket,
}) {
  return (
    <li className={`${className} ticket-card`}>
      <div className="ticket-card__wrapper">
        <h3>{ticket.category}</h3>
        <p>{ticket.description}</p>
        <p>{ticket.price}</p>
      </div>
    </li>
  );
}
