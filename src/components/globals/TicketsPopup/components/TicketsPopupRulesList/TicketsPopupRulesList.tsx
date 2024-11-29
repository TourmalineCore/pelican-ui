import { GlobalComponentProps } from "@/src/common/types";
import clsx from "clsx";
import Image from 'next/image';

type TicketsPopupRulesListProps = {
  ticketsPopupRulesImages: GlobalComponentProps["ticketsPopupRulesImages"];
  className?: string;
};

export function TicketsPopupRulesList({
  ticketsPopupRulesImages,
  className,
}: TicketsPopupRulesListProps) {
  return (
    <ul
      className={clsx(
        `tickets-popup-rules-list`,
        className,
      )}
    >
      {ticketsPopupRulesImages.map(({
        alt, url,
      }) => (
        <li
          className="tickets-popup-rules-list__rule"
          key={alt}
        >
          <Image
            className="tickets-popup-rules-list__rule-img"
            src={url}
            alt={alt}
          />
        </li>
      ))}
    </ul>
  );
}
