import clsx from "clsx";
import { PropsWithChildren } from "react";

type TicketsPopupCardProps = PropsWithChildren & {
  className?: string;
  category: string;
  price?: string;
  description?: string;
};

export function TicketsPopupCard({
  className,
  category,
  price,
  description,
  children,
}: TicketsPopupCardProps) {
  return (
    <li
      className={clsx(
        `tickets-popup-card`,
        className,
      )}
    >
      <div className="tickets-popup-card__wrapper">
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
    </li>
  );
}
