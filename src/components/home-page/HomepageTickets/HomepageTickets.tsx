import { HomeTicketsComponentProps } from "@/src/common/types";
import Link from "next/link";
import { TicketCard } from "../../globals/TicketCard/TicketCard";

export function HomepageTickets({
  generalTicketsTitle,
  generalTickets,
  generalTicketsLink,
  subsidizedTicketsTitle,
  subsidizedTicketsDescription,
  subsidizedTickets,
  subsidizedTicketsLink,
}: Omit<HomeTicketsComponentProps, 'id' | '__component'>) {
  return (
    <div
      className="tickets"
      data-testid="tickets"
    >
      <div className="tickets__wrapper">
        <div className="tickets__inner container">
          <div className="tickets__group">
            <div className="tickets__head">
              <h2 className="tickets__title">{generalTicketsTitle}</h2>
            </div>
            <ul className="tickets__list">
              {generalTickets.map((el) => (
                <TicketCard
                  className="tickets__item"
                  key={el.id}
                  ticket={el}
                  isGeneral
                  link={generalTicketsLink}
                />
              ))}
              <li className="tickets__item tickets__item--button">
                <Link
                  href={generalTicketsLink}
                  className="tickets__ticket-button button button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="tickets-buy-button"
                >
                  Купить билет
                </Link>
              </li>
            </ul>
            <Link
              href={generalTicketsLink}
              className="tickets__ticket-button tickets__ticket-button--mobile button button--primary"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="tickets-buy-button"
            >
              Купить билет
            </Link>
          </div>
          <div className="tickets__group">
            <div className="tickets__head">
              <h2 className="tickets__title">{subsidizedTicketsTitle}</h2>
              <p className="tickets__description">{subsidizedTicketsDescription}</p>
            </div>
            <ul className="tickets__list">
              {subsidizedTickets?.map((el) => (
                <TicketCard
                  className="tickets__item"
                  key={el.id}
                  ticket={el}
                  isSubsidized
                />
              ))}
              <li className="tickets__item tickets__item--link">
                <p>
                  С остальными льготными категориями вы можете ознакомиться
                  <Link
                    className="tickets__link text-link"
                    href={subsidizedTicketsLink}
                    aria-label="Перейти на страницу со списком льгот"
                    data-testid="tickets-discounts-link"
                  >
                    по ссылке.
                  </Link>
                </p>
              </li>
            </ul>
            <Link
              className="tickets__ticket-button tickets__ticket-button--mobile button button--primary"
              href={subsidizedTicketsLink}
              data-testid="tickets-all-discounts"
            >
              Другие льготы
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
