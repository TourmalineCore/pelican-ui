import { Button } from "@/src/components/globals/Button/Button";
import { ContactZooPreviewImages } from "./ContactZooPreviewImages/ContactZooPreviewImages";

export function ContactZooPreview() {
  return (
    <section
      className="contact-zoo"
      data-testid="contact-zoo"
    >
      <div className="contact-zoo__wrapper container">
        <div className="contact-zoo__text">
          <h2 className="contact-zoo__title">
            Один из первых и самых больших контактных зоопарков
          </h2>
          <p className="contact-zoo__description">
            В этой части зоопарка вы почувствуете себя вдали от городской суеты
            в компании кур, гусей, коз и многих других животных.
          </p>
        </div>
        <ContactZooPreviewImages className="contact-zoo__images" />
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
