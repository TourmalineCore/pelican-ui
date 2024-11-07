import Image from "next/image";
import FirstImageSrc from "@/public/images/contact-zoo/contact-zoo-image1.png";
import SecondImageSrc from "@/public/images/contact-zoo/contact-zoo-image2.png";
import { Button } from "@/src/components/globals/Button/Button";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { Breakpoint } from "@/src/common/enum";

export function ContactZoo() {
  const windowWidth = useWindowWidth();

  if (windowWidth === 0) {
    return null;
  }

  const isDesktop = windowWidth >= Breakpoint.DESKTOP;

  return (
    <section
      className="contact-zoo"
      data-testid="contact-zoo"
    >
      <div className="contact-zoo__wrapper container">
        <h2 className="contact-zoo__title">
          Один из первых и самых больших контактных зоопарков
        </h2>
        <p className="contact-zoo__description">
          В этой части зоопарка вы почувствуете себя вдали от городской суеты
          в компании кур, гусей, коз и многих других животных.
        </p>
        <div className="contact-zoo__images">
          <div className="contact-zoo__image-wrapper">
            <Image
              className="contact-zoo__image"
              src={FirstImageSrc}
              alt="Изображение с кроликом"
            />
          </div>
          {isDesktop && (
            <div className="contact-zoo__image-wrapper">
              <Image
                className="contact-zoo__image"
                src={SecondImageSrc}
                alt="Изображение с кроликом"
              />
            </div>
          )}
        </div>
        <Button
          className="contact-zoo__btn"
          theme="primary"
        >
          Подробнее
        </Button>
      </div>
    </section>
  );
}
