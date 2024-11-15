import { Breakpoint } from "@/src/common/enum";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { MapComponentProps } from "@/src/common/types";
import Image from "next/image";

export function Map({
  title,
  description,
  note,
  image,
}: Omit<MapComponentProps, 'id' | '__component'>) {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth >= Breakpoint.MOBILE;

  return (
    <section
      className="map container"
      data-testid="map"
    >
      <div className="map__address">
        <div className="map__address-inner">
          <div className="map__address-info">
            {!isMobile && (
              <p className="map__address-note">
                {note}
              </p>
            )}
            <h2 className="map__address-title">
              {title}
            </h2>
            <p className="map__address-description">
              {description}
            </p>
          </div>
          {!isMobile && (
            <div className="map__address-image-wrapper">
              <Image
                src={image.url}
                alt={image.alt}
              />
            </div>
          )}
        </div>
      </div>
    </section>

  );
}
