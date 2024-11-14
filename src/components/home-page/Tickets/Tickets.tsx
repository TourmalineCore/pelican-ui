import { TicketsComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import Link from "next/link";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { Breakpoint } from "@/src/common/enum";
import { TicketCard } from "./TicketCard/TicketCard";

export function Tickets({
  generalTicketsTitle,
  subsidizedTicketsTitle,
  generalTickets,
  subsidizedTickets,
  subsidizedTicketsSubtitle,
}: Omit<TicketsComponentProps, 'id' | '__component'>) {
  const windowWidth = useWindowWidth();
  const isTablet = windowWidth >= Breakpoint.TABLET;

  return (
    <div
      className="tickets container"
      data-testid="tickets"
    >
      <div className="tickets__group">
        <h3 className="tickets__title">{generalTicketsTitle}</h3>
        <ul className="tickets__list">
          {generalTickets.map((el) => (
            <TicketCard
              className="tickets__item"
              key={el.id}
              ticket={el}
              isSubsidized={false}
            />
          ))}
        </ul>
        <Button
          className="tickets__ticket-button"
          theme="primary"
          isFeatured={isTablet}
        >
          Купить билет
        </Button>
      </div>
      <div className="tickets__group">
        <h3 className="tickets__title">{subsidizedTicketsTitle}</h3>
        <p className="tickets__subtitle">{subsidizedTicketsSubtitle}</p>
        <ul className="tickets__list">
          {subsidizedTickets.map((el) => (
            <TicketCard
              className="tickets__item"
              key={el.id}
              ticket={el}
              isSubsidized
            />
          ))}
        </ul>
        <Link
          href="#"
          className="tickets__ticket-button button button--primary"
        >
          Другие льготы
        </Link>
      </div>
    </div>
  );
}
