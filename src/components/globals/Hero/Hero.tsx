import Image from "next/image";
import { GlobalComponentProps, HeroComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import clsx from "clsx";
import Link from "next/link";
import { HeroSchedule } from "./components/HeroSchedule/HeroSchedule";
import { HeroInfoCard } from "./components/HeroInfoCard/HeroInfoCard";

export function Hero({
  title,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
  image,
  isContactZoo,
  email,
}: Omit<HeroComponentProps, 'id' | '__component'> & Partial<Pick<GlobalComponentProps, 'email'>>) {
  const {
    isMobile,
    isTablet,
    isDesktop,
  } = useWindowWidth();

  const {
    handleTicketPopupToggle,
  } = useTicketPopup();

  return (
    <section
      className={clsx(
        `hero container`,
        {
          'hero--contact-zoo': isContactZoo,
        },
      )}
      data-testid="hero"
    >
      {(((isMobile || isTablet) && !isDesktop)) && (
        <h1
          className={clsx(
            `hero__title hero__title--contact-zoo`,
            {
              'visually-hidden': !isContactZoo,
            },
          )}
        >
          {title}
        </h1>
      )}
      {isDesktop && <h1 className="hero__title">{title}</h1>}
      <div className="hero__image-wrapper">
        <Image
          data-testid="hero-image"
          src={image.url}
          alt={image.alternativeText}
          sizes="(min-width: 768px) 50vw, 100vw"
          fill
          priority
        />
      </div>
      <div className="hero__cards">
        <HeroSchedule
          className="hero__schedule-card"
          scheduleTitle={scheduleTitle}
          scheduleTimetables={scheduleTimetables}
          isContactZoo={isContactZoo}
        />
        <HeroInfoCard
          className="hero__info-card"
          infoCardTitle={infoCardTitle}
          infoCardDescription={infoCardDescription}
          isContactZoo={isContactZoo}
        />
      </div>
      {(!isDesktop && !isContactZoo)
        && (
          <div className="hero__buttons">
            <Link
              href={`mailto:${email}`}
              className="button button--secondary hero__contact-button"
              data-testid="hero-contact-button"
            >
              Связаться
            </Link>
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
