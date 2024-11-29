export function CategoriesCard({
  title,
}) {
  return (
    <li
      className="categories-card"
    >
      <h3 className="categories-card__title">
        {title}
      </h3>
    </li>
  );
}
