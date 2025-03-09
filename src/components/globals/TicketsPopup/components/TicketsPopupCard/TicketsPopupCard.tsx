import { MOCK_TICKET_BUY_LINK } from "@/src/common/mocks/globals-mock";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

type TicketsPopupCardProps = PropsWithChildren & {
  className?: string;
  category: string;
  price?: string;
  description?: string;
  link?: string,
};

export function TicketsPopupCard({
  className,
  category,
  price,
  description,
  link,
  children,
}: TicketsPopupCardProps) {
  return (
    <li
      className={clsx(
        `tickets-popup-card`,
        className,
      )}
    >
      {
        link ? (
          <Link
            className="tickets-popup-card__link"
            href={link || MOCK_TICKET_BUY_LINK}
            target="blank"
            data-testid="tickets-popup-card-link"
          >
            <div className="tickets-popup-card__category-wrapper">
              <div className="tickets-popup-card__category">{category}</div>
              {
                description && (
                  <div className="tickets-popup-card__description">{description}</div>
                )
              }
            </div>
            {
              price && (
                <div className="tickets-popup-card__price">{price}</div>
              )
            }
            {children}
          </Link>
        )
          : (
            <div className="tickets-popup-card__inner">
              <div className="tickets-popup-card__category-wrapper">
                <div className="tickets-popup-card__category">{category}</div>
                {
                  description && (
                    <div className="tickets-popup-card__description">{description}</div>
                  )
                }
              </div>
              {
                price && (
                  <div className="tickets-popup-card__price">{price}</div>
                )
              }
              {children}
            </div>
          )
      }
    </li>
  );
}
