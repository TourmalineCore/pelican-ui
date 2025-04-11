import { CardProps } from "@/src/common/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

export function Card({
  className,
  image,
  labels,
  link,
  title,
  description,
  dataTestId,
  firstCardRef,
  isNews,
}: Omit<CardProps, 'id'> & {
  className: string;
  dataTestId?: string;
  firstCardRef?: Ref<HTMLAnchorElement>;
  isNews: boolean;
}) {
  return (
    <li
      className={`card ${className}`}
      {...(!link && {
        "data-testid": dataTestId,
      })}
    >
      {link ? (
        <Link
          href={link}
          ref={firstCardRef}
          tabIndex={0}
          data-testid={dataTestId}
        >
          {renderCardMarkup({
            title,
            description,
            image,
            labels,
            isLink: true,
            isNews,
          })}
        </Link>
      ) : renderCardMarkup({
        title,
        description,
        image,
        labels,
        isNews,
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
  isNews,
}: {
  title: CardProps['title'];
  description: CardProps['description'];
  image: CardProps['image'];
  isLink?: boolean;
  labels: CardProps['labels'];
  isNews?: boolean;
}) {
  return (
    <div className={clsx(`card__wrapper`, {
      'card__wrapper--link': isLink,
    })}
    >
      <div className="card__info">
        {
          isNews
            ? (
              <h2 className="card__title">
                {title}
              </h2>
            )
            : (
              <h3 className="card__title">
                {title}
              </h3>
            )
        }
        {description && (
          <p className="card__description">
            {description}
          </p>
        )}
      </div>
      <div className="card__image-wrapper">
        {labels && (
          <ul className="card__labels">
            {labels.map(({
              id,
              text,
            }) => (
              <li
                className="card__label"
                key={id}
              >
                {text}
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
    </div>
  );
}
