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
  return (
    <div className="map-address-card">
      <div className="map-address-card__inner">
        <div className="map-address-card__info">
          <MarkdownText className="map-address-card__note">
            {note}
          </MarkdownText>
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
        <div className="map-address-card__image-wrapper">
          <Image
            data-testid="map-card-image"
            src={image.url}
            alt={image.alternativeText}
            fill
          />
          <Image
            className="map-address-card__flower map-address-card__flower--tablet"
            src={flower}
            unoptimized
            alt=""
          />
        </div>
        <Image
          className="map-address-card__flower map-address-card__flower--mobile"
          src={flower}
          alt=""
        />
      </div>
    </div>
  );
}
