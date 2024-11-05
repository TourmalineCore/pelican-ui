import Image from "next/image";
import { GlobalComponentProps } from "@/src/common/types";
import HeroImageSrc from "@/public/images/hero/hero-main-page.png";
import { Button } from "@/src/components/globals/Button/Button";

export function Hero({
  heroTitle,
  scheduleTitle,
  scheduleTimetable,
  infoCardTitle,
  infoCardDescription,
}: {
  heroTitle: GlobalComponentProps['heroTitle'],
  scheduleTitle: GlobalComponentProps['scheduleTitle'],
  scheduleTimetable: GlobalComponentProps['scheduleTimetable'],
  infoCardTitle: GlobalComponentProps['infoCardTitle'],
  infoCardDescription: GlobalComponentProps['infoCardDescription'],
}) {
  return (
    <section
      className="hero container"
      data-testid="hero"
    >
      <div className="hero__title">{heroTitle}</div>
      <div className="hero__image-wrapper">
        <Image
          src={HeroImageSrc}
          alt="#"
        />
      </div>
      <div className="hero__cards">
        <div className="hero__schedule schedule">
          <p className="schedule__title">{scheduleTitle}</p>
          <ul className="schedule__list">
            {scheduleTimetable.map((el) => (
              <li
                className="schedule__item"
                key={el.id}
              >
                <p className="schedule__days">{el.days}</p>
                <span className="schedule__time">{el.time}</span>
                <span className="schedule__tickets-office-time">{el.ticketsOfficeTime}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__info-card info-card">
          <p className="info-card__title">{infoCardTitle}</p>
          <p className="info-card__description">{infoCardDescription}</p>
        </div>
      </div>
      <div className="header__buttons">
        <Button
          className="caption-1 header__contact-button"
          theme="secondary"
        >
          Связаться
        </Button>
        <Button
          className="caption-1 header__ticket-button"
          theme="primary"
        >
          Билеты
        </Button>
      </div>
    </section>
  );
}
