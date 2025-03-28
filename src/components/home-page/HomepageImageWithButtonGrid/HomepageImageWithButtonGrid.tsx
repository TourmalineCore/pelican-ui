import { ImageWithButtonGridComponentProps } from "@/src/common/types";
import { ImageWithButtonGrid } from "../../globals/ImageWithButtonGrid/ImageWithButtonGrid";

export function HomepageImageWithButtonGrid({
  title,
  description,
  largeImage,
  smallImage,
  link,
  label,
}: Omit<ImageWithButtonGridComponentProps, 'id' | '__component'>) {
  return (
    <ImageWithButtonGrid
      title={title}
      description={description}
      largeImage={largeImage}
      smallImage={smallImage}
      link={link}
      label={label}
    />
  );
}
