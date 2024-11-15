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
  const isMobile = windowWidth < Breakpoint.TABLET;
  const isTabletXl = windowWidth >= Breakpoint.TABLET_XL;

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
              isGeneral
            />
          ))}
          {isTablet && !isTabletXl && (
            <li className="tickets__item tickets__item--button">
              <Button
                className="tickets__ticket-button"
                theme="primary"
              >
                Купить билет
              </Button>
            </li>
          )}
        </ul>
        {isMobile && (
          <Button
            className="tickets__ticket-button"
            theme="primary"
          >
            Купить билет
          </Button>
        )}
      </div>
      <div className="tickets__group">
        <div className="tickets__head">
          <h3 className="tickets__title">{subsidizedTicketsTitle}</h3>
          <p className="tickets__subtitle">{subsidizedTicketsSubtitle}</p>
        </div>

        <ul className="tickets__list">
          {subsidizedTickets.map((el) => (
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
                    className="tickets__link"
                    href="#"
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
                 href="#"
                 className="tickets__ticket-button button button--primary"
               >
                 Другие льготы
               </Link>
             )
        }
      </div>
    </div>
  );
}
