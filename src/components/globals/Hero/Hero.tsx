import Image from "next/image";
import { GlobalComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import HeroImageSrc from "@/public/images/hero/hero-main-page.png";
import { HeroSchedule } from "./components/HeroSchedule/HeroSchedule";
import { HeroInfoCard } from "./components/HeroInfoCard/HeroInfoCard";

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
        <HeroInfoCard
          className="hero__info-card"
          infoCardTitle={infoCardTitle}
          infoCardDescription={infoCardDescription}
        />
      </div>
      <div className="hero__buttons">
        <Button
          className="caption-1 hero__contact-button"
          theme="secondary"
        >
          Связаться
        </Button>
        <Button
          className="caption-1 hero__ticket-button"
          theme="primary"
        >
          Билеты
        </Button>
      </div>
    </section>
  );
}
