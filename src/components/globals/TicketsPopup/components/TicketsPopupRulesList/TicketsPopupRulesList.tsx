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
        alternativeText, url,
      }) => (
        <li
          className="tickets-popup-rules-list__rule"
          key={alternativeText}
        >
          <Image
            className="tickets-popup-rules-list__rule-img"
            src={url}
            alt={alternativeText}
          />
        </li>
      ))}
    </ul>
  );
}
