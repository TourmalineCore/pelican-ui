import { CategoriesCards } from "@/src/common/types";
import Link from "next/link";

export function DiscountsCategoriesCard({
  title,
  note,
  price,
  rules,
}: Omit<CategoriesCards, 'id'>) {
  return (
    <li className="discounts-categories-card">
      {note && (
        <p className="discounts-categories-card__note">
          {note}
        </p>
      )}
      <h3 className="discounts-categories-card__title">
        {title}
      </h3>
      <p className="discounts-categories-card__price">
        {price}
      </p>

      <div className="discounts-categories-card__rules">
        <div className="discounts-categories-card__container">
          {rules.terms && rules.terms.length > 0 && (
            <div>
              <h4 className="discounts-categories-card__rules-title">
                Условия:
              </h4>
              <div className="discounts-categories-card__rules-text">
                {rules.terms?.length > 1 ? (
                  <ol className="discounts-categories-card__rules-list">
                    {rules.terms.map((terms) => (
                      <li key={terms}>{terms}</li>
                    ))}
                  </ol>
                ) : (
                  <span>{rules.terms[0]}</span>
                )}
                {rules.info && (
                  <p className="discounts-categories-card__rules-info">{rules.info}</p>
                )}
              </div>
            </div>
          )}

          {rules.docs && rules.docs.length > 0 && (
            <div>
              <h4 className="discounts-categories-card__rules-title">
                Подтверждающие документы:
              </h4>
              <div className="discounts-categories-card__rules-text">
                {rules.docs?.length > 1 ? (
                  <ol className="discounts-categories-card__rules-list">
                    {rules.docs.map((doc) => (
                      <li key={doc}>{doc}</li>
                    ))}
                  </ol>
                ) : (
                  <span>{rules.docs[0]}</span>
                )}
              </div>
            </div>
          )}
        </div>
        {rules.basis && rules.basis.length > 0 && (
          <div>
            <h4 className="discounts-categories-card__rules-title">
              Основание льготы:
            </h4>
            <ul className="discounts-categories-card__rules-basis">
              {rules.basis.map((basis) => (
                <li key={basis.title}>
                  {basis.file ? (
                    <Link
                      className="discounts-categories-card__link"
                      data-testid="discounts-link"
                      href={basis.file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {basis.title}
                    </Link>
                  ) : (
                    <p className="discounts-categories-card__text">
                      {basis.title}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}
