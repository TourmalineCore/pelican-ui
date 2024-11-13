import Image from "next/image";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { Breakpoint } from "@/src/common/enum";
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
  const windowWidth = useWindowWidth();

  if (windowWidth === 0) {
    return null;
  }

  const isDesktop = windowWidth >= Breakpoint.DESKTOP;

  return (
    <div className={`${className} contact-zoo-images`}>
      <div className="contact-zoo-images__wrapper">
        <Image
          className="contact-zoo-images__image"
          src={largeImage.url}
          alt={largeImage.alt}
          fill
        />
      </div>
      {isDesktop && smallImage && (
        <div className="contact-zoo-images__wrapper">
          <Image
            className="contact-zoo-images__image"
            src={smallImage.url}
            alt={smallImage.alt}
            fill
          />
        </div>
      )}
    </div>
  );
}
