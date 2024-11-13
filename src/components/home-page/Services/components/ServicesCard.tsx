import { ServicesCardProps } from "@/src/common/types";
import Image from "next/image";

export function ServicesCard({
  className,
  image,
  labels,
  title,
  description,
}: Omit<ServicesCardProps, 'id'> & {
  className: string
}) {
  return (
    <div className={`services-card ${className}`}>
      <div className="services-card__wrapper">
        <div className="services-card__image-wrapper">
          {labels && (
            <ul className="services-card__labels">
              {labels.map((label) => (
                <li
                  className="services-card__label"
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
        <div className="services-card__info">
          <h3 className="services-card__title">{title}</h3>
          <p className="services-card__description">{description}</p>
        </div>
      </div>
    </div>
  );
}
