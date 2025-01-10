import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { MapComponentProps } from "@/src/common/types";
import { MarkdownText } from "@/src/components/globals/MarkdownText/MarkdownText";
import Image from "next/image";
import flower from '@/public/images/map/flower.svg';

export function MapAddressCard({
  className,
  title,
  subtitle,
  note,
  image,
}: Omit<MapComponentProps, 'id' | '__component'> & {
  className: string
}) {
  const {
    isTablet,
  } = useWindowWidth();

  return (
    <div className={`map-address-card ${className}`}>
      <div className="map-address-card__inner">
        <div className="map-address-card__info">
          {isTablet && (
            <p className="map-address-card__note">
              {note}
            </p>
          )}
          <div className="map-address-card__description">
            <h2 className="map-address-card__title">
              {title}
            </h2>
            <MarkdownText className="map-address-card__subtitle">
              {subtitle}
            </MarkdownText>
          </div>
        </div>
        {isTablet && (
          <div className="map-address-card__image-wrapper">
            <Image
              loading="lazy"
              src={image.url}
              alt={image.alternativeText}
            />
            {isTablet && (
              <Image
                className="map-address-card__flower"
                src={flower}
                unoptimized
                alt="Изображение цветка"
              />
            )}
          </div>
        )}
        {!isTablet && (
          <Image
            loading="lazy"
            className="map-address-card__flower"
            src={flower}
            alt="Изображение цветка"
          />
        )}
      </div>
    </div>
  );
}
