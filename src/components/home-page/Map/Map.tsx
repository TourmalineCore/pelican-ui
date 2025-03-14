import { MapComponentProps } from "@/src/common/types";
import Image from "next/image";
import mapBackgroundImage from '../../../../public/images/map/map.png';
import { MapAddressCard } from "./components/MapAddressCard/MapAddressCard";

export function Map({
  title,
  subtitle,
  note,
  image,
}: Omit<MapComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="map"
      data-testid="map"
      id="map-section"
    >
      <Image
        className="map__background-image"
        data-testid="map-image"
        src={mapBackgroundImage}
        alt=""
      />
      <div className="map__inner container">
        <MapAddressCard
          className="map__address-card"
          title={title}
          subtitle={subtitle}
          note={note}
          image={image}
        />
      </div>
    </section>
  );
}
