import { GlobalComponentProps, ServicesComponentProps } from "@/src/common/types";
import { ServicesCard } from "./components/ServicesCard";
import { Button } from "../../globals/Button/Button";

export function Services({
  title,
  cards,
  phoneText,
  emailText,
  phone,
  email,
}: Omit<ServicesComponentProps, 'id' | '__component'> & {
  phone: GlobalComponentProps['phone'],
  email: GlobalComponentProps['email']
}) {
  return (
    <section
      className="services "
      data-testid="services"
    >
      <h2 className="services__title container">{title}</h2>
      <ul className="services__cards">
        {cards.map((card) => (
          <ServicesCard
            className="services__card"
            key={card.id}
            labels={card.labels}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
        <div className="services__info-cards">
          <a
            href={`tel:${phone}`}
            className="services__phone-link"
          >
            <Button
              className="services__phone-button"
              theme="secondary"
            >
              {phoneText}
              {` `}
              {phone}
            </Button>

          </a>
          <a
            href={`mailto:${email}`}
            className="services__email-link"
          >
            <Button
              className="services__email-button"
              theme="primary"
            >
              {emailText}
              {` `}
              {email}
            </Button>
          </a>
        </div>
      </ul>
    </section>
  );
}
