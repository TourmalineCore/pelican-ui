import Image from "next/image";
import { HeroComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { Breakpoint } from "@/src/common/enum";
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
  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= Breakpoint.DESKTOP;

  const {
    handleToggle,
  } = useTicketPopup();

  return (
    <section
      className="hero container"
      data-testid="hero"
    >
      {isDesktop && <div className="hero__title">{title}</div>}
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
      {!isDesktop
        && (
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
              isFeatured
              onClick={handleToggle}
            >
              Билеты
            </Button>
          </div>
        )}
    </section>
  );
}
