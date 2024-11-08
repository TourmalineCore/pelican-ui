import Image from "next/image";
import FirstImageSrc from "@/public/images/contact-zoo/contact-zoo-image1.png";
import SecondImageSrc from "@/public/images/contact-zoo/contact-zoo-image2.png";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { Breakpoint } from "@/src/common/enum";

export function ContactZooPreviewImages({
  className,
}: {
  className: string,
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
          src={FirstImageSrc}
          alt="Изображение с кроликом"
          fill
        />
      </div>
      {isDesktop && (
        <div className="contact-zoo-images__wrapper">
          <Image
            className="contact-zoo-images__image"
            src={SecondImageSrc}
            alt="Изображение с кроликом"
            fill
          />
        </div>
      )}
    </div>
  );
}
