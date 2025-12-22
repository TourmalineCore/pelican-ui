import { StepsBlockProps } from "@/src/common/types";
import clsx from "clsx";

export function Steps({
  subtitle,
  stepsCards,
  isFirstBlock,
  isLastBlock,
}: & Omit<StepsBlockProps, '__component'>) {
  return (
    <section className={clsx(
      `steps`,
      {
        'first-block': isFirstBlock,
        'last-block': isLastBlock,
      },
    )}
    >
      <div className="steps__inner">
        {subtitle && (
          <h2 className="steps__title container">{subtitle}</h2>
        )}
        {stepsCards && (
          <ol className="steps__list container">
            {stepsCards.map((card) => (
              <li
                className="steps__card"
                key={card.id}
              >
                {card.text && (
                  <p className="steps__text">
                    {card.text}
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
