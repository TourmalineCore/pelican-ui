import Image from "next/image";
import { HeroComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { HeroSchedule } from "./components/HeroSchedule/HeroSchedule";
import { HeroInfoCard } from "./components/HeroInfoCard/HeroInfoCard";

export function Hero({
  title,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
  image,
}: Omit<HeroComponentProps, 'id' | '__component'>) {
  const {
    isMobile,
    isDesktop,
  } = useWindowWidth();

  const {
    handleTicketPopupToggle,
  } = useTicketPopup();

  return (
    <section
      className="hero container"
      data-testid="hero"
    >
      {((isMobile && !isDesktop)) && (
        <h1
          className="visually-hidden"
        >
          {title}
        </h1>
      )}
      {isDesktop && <h1 className="hero__title">{title}</h1>}
      <div className="hero__image-wrapper">
        <Image
          src={image.url}
          alt={image.alternativeText}
          priority
        />
      </div>
      <div className="hero__cards">
        <HeroSchedule
          className="hero__schedule-card"
          scheduleTitle={scheduleTitle}
          scheduleTimetables={scheduleTimetables}
        />
        <HeroInfoCard
          className="hero__info-card"
          infoCardTitle={infoCardTitle}
          infoCardDescription={infoCardDescription}
        />
      </div>
      {!isDesktop
        && (
          <div className="hero__buttons">
            <Button
              className="hero__contact-button"
              theme="secondary"
              data-testid="hero-contact-button"
            >
              Связаться
            </Button>
            <Button
              className="hero__ticket-button"
              theme="primary"
              isFeatured
              onClick={handleTicketPopupToggle}
              data-testid="hero-tickets-popup-button"
            >
              Билеты
            </Button>
          </div>
        )}
    </section>
  );
}
