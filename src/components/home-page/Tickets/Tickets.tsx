import { TicketsComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import Link from "next/link";
import { TicketCard } from "./TicketCard/TicketCard";

export function Tickets({
  generalTicketsTitle,
  subsidizedTicketsTitle,
  generalTickets,
  subsidizedTickets,

}: Omit<TicketsComponentProps, 'id' | '__component'>) {
  return (
    <div
      className="tickets container"
      data-testid="tickets"
    >
      <div className="tickets__group">
        <h3>{generalTicketsTitle}</h3>
        <ul className="tickets__list">
          {generalTickets.map((el) => (
            <TicketCard
              className="tickets__item"
              key={el.id}
              ticket={el}
            />
          ))}
        </ul>
        <Button
          className="tickets__ticket-button"
          theme="primary"
          isFeatured
        >
          Купить билет
        </Button>
      </div>
      <div className="tickets__group">
        <h3>{subsidizedTicketsTitle}</h3>
        <ul className="tickets__list">
          {subsidizedTickets.map((el) => (
            <TicketCard
              className="tickets__item"
              key={el.id}
              ticket={el}
            />
          ))}
        </ul>
        <Link
          href="#"
          className="tickets__ticket-button button button--primary"
        >
          Купить билет
        </Link>
      </div>
    </div>
  );
}
