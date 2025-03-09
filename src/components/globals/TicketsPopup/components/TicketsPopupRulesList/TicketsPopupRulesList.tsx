import { GlobalComponentProps } from "@/src/common/types";
import clsx from "clsx";
import Image from 'next/image';

type TicketsPopupRulesListProps = {
  ticketsPopupRulesImages: GlobalComponentProps['ticketsPopup']['accordionVisitingRules']['images'];
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
        url,
        alternativeText,
      }) => (
        <li
          className="tickets-popup-rules-list__rule"
          key={alternativeText}
        >
          <Image
            data-testid="rule-image"
            className="tickets-popup-rules-list__rule-img"
            src={url}
            alt={alternativeText}
            fill
          />
        </li>
      ))}
    </ul>
  );
}
