import { SharedStepsCardComponent } from "@/src/common/api-types";

export function Steps({
  subtitle,
  stepsCards,
}: {
  subtitle?: string;
  stepsCards: SharedStepsCardComponent[];
}) {
  return (
    <section className="steps">
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
