import { Breakpoint } from "@/src/common/enum";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { MapComponentProps } from "@/src/common/types";
import Image from "next/image";
import flower from "../../../../public/images/map/flower.svg";

export function Map({
  title,
  subtitle,
  note,
  image,
}: Omit<MapComponentProps, 'id' | '__component'>) {
  const windowWidth = useWindowWidth();

  const isTablet = windowWidth >= Breakpoint.TABLET;

  return (
    <section
      className="map container"
      data-testid="map"
    >
      <div className="map__address-card map-address-card">
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
              <p className="map-address-card__subtitle">
                {subtitle}
              </p>
            </div>
          </div>
          {isTablet && (
            <div className="map-address-card__image-wrapper">
              <Image
                src={image.url}
                alt={image.alt}
              />
              {isTablet && (
                <Image
                  className="map__flower"
                  src={flower}
                  alt="Изображение цветка"
                />
              )}
            </div>
          )}
          {!isTablet && (
            <Image
              className="map__flower"
              src={flower}
              alt="Изображение цветка"
            />
          )}
        </div>
      </div>
    </section>
  );
}
