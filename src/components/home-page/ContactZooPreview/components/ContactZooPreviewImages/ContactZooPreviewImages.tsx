import Image from "next/image";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { ContactZooPreviewComponentProps } from "@/src/common/types";

export function ContactZooPreviewImages({
  className,
  largeImage,
  smallImage,
}: {
  className: string,
  largeImage: ContactZooPreviewComponentProps["largeImage"],
  smallImage: ContactZooPreviewComponentProps["smallImage"],
}) {
  const {
    isDesktop,
  } = useWindowWidth();

  return (
    <div className={`${className} contact-zoo-images`}>
      <div className="contact-zoo-images__wrapper">
        <Image
          className="contact-zoo-images__image"
          src={largeImage.url}
          alt={largeImage.alternativeText}
          fill
        />
      </div>
      {isDesktop && smallImage && (
        <div className="contact-zoo-images__wrapper">
          <Image
            className="contact-zoo-images__image"
            src={smallImage.url}
            alt={smallImage.alternativeText}
            fill
          />
        </div>
      )}
    </div>
  );
}
