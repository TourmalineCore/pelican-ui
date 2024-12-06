import { AppRoute } from "@/src/common/enum";
import { CardProps } from "@/src/common/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function Card({
  id,
  className,
  image,
  labels,
  title,
  description,
  isNews,
  isService,
  dataTestId,
}: Omit<CardProps, 'id'> & {
  id?: number;
  className: string;
  isNews?: boolean;
  isService?: boolean;
  labels?: string[];
  dataTestId?: string;
}) {
  return (
    <li
      className={`card ${className}`}
      data-testid={dataTestId}
    >
      {/* Add a link to services when it is added and remove style, onClick  */}
      <Link
        href={isNews ? `${AppRoute.NEWS}/${id}` : ``}
        style={{
          ...(isService && {
            cursor: `auto`,
          }),
        }}
        onClick={(e) => {
          if (isService) {
            e.preventDefault();
          }
        }}
      >
        <div className={clsx(`card__wrapper`, {
          'card__wrapper--news': isNews,
        })}
        >
          <div className="card__image-wrapper">
            {labels && (
              <ul className="card__labels">
                {labels.map((label) => (
                  <li
                    className="card__label"
                    key={label}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
            <Image
              src={image.url}
              alt={image.alt}
            />
          </div>
          <div className={clsx(`card__info`, {
            'card__info--news': isNews,
            'card__info--services': isService,
          })}
          >
            <h3 className={clsx(`card__title`, {
              'card__title--news': isNews,
              'card__title--services': isService,
            })}
            >
              {title}
            </h3>
            <p className={clsx(`card__description`, {
              'card__description--news': isNews,
              'card__description--services': isService,
            })}
            >
              {description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
