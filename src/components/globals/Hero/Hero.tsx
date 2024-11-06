import Image from "next/image";
import { GlobalComponentProps } from "@/src/common/types";
import HeroImageSrc from "@/public/images/hero/hero-main-page.png";
import { Button } from "@/src/components/globals/Button/Button";
import { HeroSchedule } from "./components/HeroSchedule/HeroSchedule";

export function Hero({
  heroTitle,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
}: {
  heroTitle: GlobalComponentProps['heroTitle'],
  scheduleTitle: GlobalComponentProps['scheduleTitle'],
  scheduleTimetables: GlobalComponentProps['scheduleTimetables'],
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
        <HeroSchedule
          className="hero__schedule"
          scheduleTitle={scheduleTitle}
          scheduleTimetables={scheduleTimetables}
        />
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
