import { GlobalComponentProps, ServicesComponentProps } from "@/src/common/types";
import { ServicesCard } from "./components/ServicesCard/ServicesCard";

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
      className="services container"
      data-testid="services"
    >
      <h2 className="services__title">{title}</h2>
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
        <li className="services__info-cards">
          <a
            href={`tel:${phone}`}
            className="services__phone-link"
            data-testid="services-phone-link"
          >
            <span
              className="services__phone-button button button--secondary"
            >
              {phoneText}
              {` `}
              {phone}
            </span>
          </a>
          <a
            href={`mailto:${email}`}
            className="services__email-link"
            data-testid="services-email-link"
          >
            <span
              className="services__email-button button button--primary"
            >
              {emailText}
              {` `}
              {email}
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
