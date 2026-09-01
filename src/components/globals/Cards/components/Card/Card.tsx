import { CardProps } from "@/src/common/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";
import iconPinSrc from "@/public/images/svg/icon-pin.svg";

export function Card({
  className,
  image,
  labels,
  link,
  title,
  description,
  isPinned,
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
            isPinned,
            isNews,
          })}
        </Link>
      ) : renderCardMarkup({
        title,
        description,
        image,
        labels,
        isNews,
        isPinned,
      })}
    </li>
  );
}

function renderCardMarkup({
  title,
  description,
  image,
  isLink,
  isPinned,
  labels,
  isNews,
}: {
  title: CardProps['title'];
  description: CardProps['description'];
  image: CardProps['image'];
  isLink?: boolean;
  isPinned?: boolean;
  labels: CardProps['labels'];
  isNews?: boolean;
}) {
  const hasImage = image.url !== ``;

  return (
    <div className={clsx(`card__wrapper`, {
      'card__wrapper--pinned': isPinned,
      'card__wrapper--link': isLink,
    })}
    >
      {isPinned && (
        <span className="card__pinned-icon-wrapper">
          <Image
            className="card__pinned-icon"
            src={iconPinSrc}
            unoptimized
            alt=""
          />
        </span>
      )}
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
      <div className={clsx(`card__image-wrapper`, {
        'card__image-wrapper--no-image': !hasImage,
      })}
      >
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
        {hasImage && (
          <Image
            src={image.url}
            fill
            sizes="(max-width: 768px) 98vw, (max-width: 1366px) 48vw, 30vw"
            alt={image.alternativeText}
          />
        )}
      </div>
    </div>
  );
}
