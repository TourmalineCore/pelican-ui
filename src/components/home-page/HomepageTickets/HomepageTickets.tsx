import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { TicketsComponentProps } from "@/src/common/types";
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
}: Omit<TicketsComponentProps, 'id' | '__component'>) {
  const {
    isTablet,
    isMobile,
    isTabletXl,
  } = useWindowWidth();

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
              {isTablet && !isTabletXl && (
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
              )}
            </ul>
            {isMobile && (
              <Link
                href={generalTicketsLink}
                className="tickets__ticket-button button button--primary"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="tickets-buy-button"
              >
                Купить билет
              </Link>
            )}
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
              {
                isTablet && (
                  <li className="tickets__item tickets__item--link">
                    <p>
                      С остальными льготными категориями вы можете ознакомиться
                      <Link
                        className="tickets__link text-link"
                        href={subsidizedTicketsLink}
                        aria-label="Перейти на страницу со списком льгот"
                        data-testid="tickets-discounts-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        по ссылке.
                      </Link>
                    </p>
                  </li>
                )
              }
            </ul>
            {
              isMobile
             && (
               <Link
                 href={subsidizedTicketsLink}
                 className="tickets__ticket-button button button--primary"
                 data-testid="tickets-all-discounts"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Другие льготы
               </Link>
             )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
