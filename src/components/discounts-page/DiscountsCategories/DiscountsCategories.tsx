import { CategoriesCards } from "@/src/common/types";
import Link from "next/link";
import { DiscountsCategoriesCard } from "./components/DiscountsCategoriesCard";

export function DiscountsCategories({
  title,
  categoriesCards,
  remark,
}: {
  title:string;
  categoriesCards: CategoriesCards[];
  remark: {
    title:string;
    link: string;
  };
}) {
  return (
    <section
      className="discounts-categories container"
      data-testid="discounts-categories"
    >
      <h2 className="discounts-categories__title">{title}</h2>
      <ul className="discounts-categories__list">
        {categoriesCards.map((card) => (
          <DiscountsCategoriesCard
            key={card.id}
            title={card.title}
            note={card.note}
            price={card.price}
            rules={card.rules}
          />
        ))}
      </ul>
      <p className="discounts-categories__remark">
        Данный перечень составлен в соответствии с
        {` `}
        <Link
          className="discounts-categories__remark-link"
          data-testid="discounts-remark-link"
          href={remark.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {remark.title}
        </Link>
      </p>
    </section>
  );
}
