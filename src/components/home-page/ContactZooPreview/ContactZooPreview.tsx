import { Button } from "@/src/components/globals/Button/Button";
import { ContactZooPreviewComponentProps } from "@/src/common/types";
import { ContactZooPreviewImages } from "./components/ContactZooPreviewImages/ContactZooPreviewImages";

export function ContactZooPreview({
  title,
  description,
  largeImage,
  smallImage,
}: Omit<ContactZooPreviewComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="contact-zoo"
      data-testid="contact-zoo"
    >
      <div className="contact-zoo__wrapper container">
        <div className="contact-zoo__text">
          <h2 className="contact-zoo__title">{title}</h2>
          <p className="contact-zoo__description">{description}</p>
        </div>
        <ContactZooPreviewImages
          className="contact-zoo__images"
          largeImage={largeImage}
          smallImage={smallImage}
        />
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
