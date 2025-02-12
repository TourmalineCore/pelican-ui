import { GlobalComponentProps, ServicesComponentProps } from "@/src/common/types";
import { Cards } from "../../globals/Cards/Cards";

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
    <Cards
      className="services"
      dataTestId="services"
      title={title}
      cards={cards}
    >
      <li>
        <a
          href={`tel:${phone}`}
          data-testid="services-phone-link"
        >
          <span
            className="services__button button button--secondary"
          >
            {phoneText}
            {` `}
            {phone}
          </span>
        </a>
      </li>
      <li>
        <a
          href={`mailto:${email}`}
          data-testid="services-email-link"
        >
          <span
            className="services__button button button--primary"
          >
            {emailText}
            {` `}
            {email}
          </span>
        </a>
      </li>
    </Cards>
  );
}
