import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { MapComponentProps } from "@/src/common/types";
import { MarkdownText } from "@/src/components/globals/MarkdownText/MarkdownText";
import Image from "next/image";
import flower from "@/public/images/map/flower.svg";

export function MapAddressCard({
  title,
  subtitle,
  note,
  image,
}: Omit<MapComponentProps, 'id' | '__component'>) {
  const {
    isTablet,
  } = useWindowWidth();

  return (
    <div className="map-address-card">
      <div className="map-address-card__inner">
        <div className="map-address-card__info">
          {isTablet && (
            <MarkdownText className="map-address-card__note">
              {note}
            </MarkdownText>
          )}
          <div className="map-address-card__description">
            <h2 className="map-address-card__title">
              {title}
            </h2>
            <MarkdownText
              className="map-address-card__subtitle"
              isTargetBlank
            >
              {subtitle}
            </MarkdownText>
          </div>
        </div>
        {isTablet && (
          <div className="map-address-card__image-wrapper">
            <Image
              data-testid="map-card-image"
              src={image.url}
              alt={image.alternativeText}
              fill
            />
            {isTablet && (
              <Image
                className="map-address-card__flower"
                src={flower}
                unoptimized
                alt=""
              />
            )}
          </div>
        )}
        {!isTablet && (
          <Image
            className="map-address-card__flower"
            src={flower}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
