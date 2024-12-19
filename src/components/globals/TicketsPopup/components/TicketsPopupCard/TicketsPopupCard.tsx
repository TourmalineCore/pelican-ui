import { TICKET_BUY_LINK } from "@/src/common/mocks/globals-mock";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

type TicketsPopupCardProps = PropsWithChildren & {
  key: string;
  className?: string;
  category: string;
  price?: string;
  hasLink: boolean;
  description?: string;
};

export function TicketsPopupCard({
  key,
  className,
  category,
  price,
  description,
  hasLink,
  children,
}: TicketsPopupCardProps) {
  return (
    <li
      key={key}
      className={clsx(
        `tickets-popup-card`,
        className,
      )}
    >
      {
        hasLink ? (
          <Link
            className="tickets-popup-card__link"
            href={TICKET_BUY_LINK}
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
