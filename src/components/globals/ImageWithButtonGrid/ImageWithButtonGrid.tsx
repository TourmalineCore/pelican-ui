import { ImageWithButtonGridComponentProps } from "@/src/common/types";
import Link from "next/link";
import clsx from "clsx";
import { ImageWithButtonGridImages } from "./components/ImageWithButtonGridImages/ImageWithButtonGridImages";

export function ImageWithButtonGrid({
  title,
  description,
  largeImage,
  smallImage,
  link,
  label,
  isInternalPage,
  isFirstBlock,
  isLastBlock,
}: Omit<ImageWithButtonGridComponentProps, 'id' | '__component'>) {
  return (
    <section
      className={clsx(
        `image-with-button-grid`,
        {
          'image-with-button-grid--internal-page': isInternalPage,
          'first-block': isFirstBlock,
          'last-block': isLastBlock,
        },
      )}
      data-testid="image-with-button-grid"
    >
      <div className="image-with-button-grid__wrapper container">
        <div className="image-with-button-grid__text">
          {title && <h2 className="image-with-button-grid__title">{title}</h2>}
          <p className="image-with-button-grid__description">{description}</p>
        </div>
        <ImageWithButtonGridImages
          className="image-with-button-grid__images"
          largeImage={largeImage}
          smallImage={smallImage}
        />
        <Link
          href={link}
          className="image-with-button-grid__btn button button--primary"
          aria-label="Подробнее на отдельной странице"
          data-testid="image-grid-btn"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
