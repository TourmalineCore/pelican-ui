export function DiscountsRulesCard({
  text,
}: {
  text: string;
}) {
  return (
    <li className="discounts-rules-card">
      {text && (
        <p className="discounts-rules-card__text">
          {text}
        </p>
      )}
    </li>
  );
}
