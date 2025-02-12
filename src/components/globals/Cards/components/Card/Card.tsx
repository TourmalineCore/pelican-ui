import { CardProps } from "@/src/common/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function Card({
  className,
  image,
  labels,
  link,
  title,
  description,
  dataTestId,
}: Omit<CardProps, 'id'> & {
  className: string;
  dataTestId?: string;
}) {
  return (
    <li
      className={`card ${className}`}
      data-testid={dataTestId}
    >
      {link ? (
        <Link
          href={link}
          tabIndex={0}
        >
          {renderCardMarkup({
            title,
            description,
            image,
            labels,
            isLink: true,
          })}
        </Link>
      ) : renderCardMarkup({
        title,
        description,
        image,
        labels,
      })}
    </li>
  );
}

function renderCardMarkup({
  title,
  description,
  image,
  isLink,
  labels,
}: {
  title: CardProps['title'],
  description: CardProps['description'],
  image: CardProps['image']
  isLink?: boolean,
  labels: CardProps['labels']
}) {
  return (
    <div className={clsx(`card__wrapper`, {
      'card__wrapper--link': isLink,
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
          fill
          sizes="(min-width: 768px) 50vw, (min-width: 1366px) 33vw, 100vw"
          alt={image.alternativeText}
        />
      </div>
      <div className="card__info">
        <h2 className="card__title">
          {title}
        </h2>
        {description && (
          <p className="card__description">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
