import clsx from "clsx";
import { SharedTicketsComponentProps } from "@/src/common/types";
import { TicketCard } from "../TicketCard/TicketCard";
import { MarkdownText } from "../MarkdownText/MarkdownText";

export function Tickets({
  title,
  description,
  link,
  tickets,
  note,
  isFirstBlock,
  isLastBlock,
}: Omit<SharedTicketsComponentProps, 'id' | '__component'>) {
  return (
    <div
      className={clsx(`tickets tickets--internal-page`, {
        'first-block': isFirstBlock,
        'last-block': isLastBlock,
      })}
      data-testid="tickets"
    >
      <div className="tickets__wrapper">
        <div className="tickets__inner container">
          <div className="tickets__group">
            <div className="tickets__head">
              <h2 className="tickets__title">{title}</h2>
              {description && <p className="tickets__description">{description}</p>}
            </div>
            <ul className="tickets__list">
              {tickets.map((el) => (
                <TicketCard
                  className="tickets__item"
                  key={el.id}
                  ticket={el}
                  link={link}
                />
              ))}
              {note && (
                <li className="tickets__item tickets__item--info">
                  <MarkdownText>
                    {note}
                  </MarkdownText>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
