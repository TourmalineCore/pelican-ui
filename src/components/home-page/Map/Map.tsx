import { MapComponentProps } from "@/src/common/types";
import Image from "next/image";
import mapBackgroundImage from '../../../../public/images/map/map.png';
import { MapAddressCard } from "./components/MapAddressCard";

export function Map({
  title,
  subtitle,
  note,
  image,
}: Omit<MapComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="map container"
      data-testid="map"
    >
      <Image
        loading="lazy"
        className="map__backgound-image"
        src={mapBackgroundImage}
        alt="Карта"
      />
      <MapAddressCard
        className="map__address-card"
        title={title}
        subtitle={subtitle}
        note={note}
        image={image}
      />
    </section>
  );
}
