import Image from "next/image";
import { HeroComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import { HeroSchedule } from "./components/HeroSchedule/HeroSchedule";
import { HeroInfoCard } from "./components/HeroInfoCard/HeroInfoCard";

export function Hero({
  title,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
  image,
}: HeroComponentProps) {
  return (
    <section
      className="hero container"
      data-testid="hero"
    >
      <div className="hero__title">{title}</div>
      <div className="hero__image-wrapper">
        <Image
          src={image.url}
          alt={image.alt}
        />
      </div>
      <div className="hero__cards">
        <HeroSchedule
          scheduleTitle={scheduleTitle}
          scheduleTimetables={scheduleTimetables}
        />
        <HeroInfoCard
          infoCardTitle={infoCardTitle}
          infoCardDescription={infoCardDescription}
        />
      </div>
      <div className="hero__buttons">
        <Button
          className="hero__contact-button"
          theme="secondary"
        >
          Связаться
        </Button>
        <Button
          className="hero__ticket-button"
          theme="primary"
        >
          Билеты
        </Button>
      </div>
    </section>
  );
}
