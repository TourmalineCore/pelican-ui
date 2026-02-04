import Image from "next/image";
import { GlobalComponentProps, HeroComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import clsx from "clsx";
import Link from "next/link";
import { HeroSchedule } from "./components/HeroSchedule/HeroSchedule";
import { HeroInfoCard } from "./components/HeroInfoCard/HeroInfoCard";

type HeroProps = Omit<HeroComponentProps, 'id' | '__component'> & Partial<Pick<GlobalComponentProps, 'phone'>> & {
  isInternalPage?: boolean;
};

export function Hero({
  title,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
  image,
  isInternalPage,
  phone,
  isFirstBlock,
  isLastBlock,
}: HeroProps) {
  const {
    handleTicketPopupToggle,
  } = useTicketPopup();

  return (
    <section
      className={clsx(
        `hero container`,
        {
          'hero--internal-page': isInternalPage,
          'first-block': isFirstBlock,
          'last-block': isLastBlock,
        },
      )}
      data-testid="hero"
    >
      <h1
        className={clsx(
          `hero__title`,
          {
            'hero__title--internal-page': isInternalPage,
            'visually-hidden': !isInternalPage,
          },
        )}
      >
        {title}
      </h1>
      <div className="hero__image-wrapper">
        <Image
          data-testid="hero-image"
          src={image.url}
          alt={image.alternativeText}
          sizes="(max-width: 768px) 98vw, (max-width: 1366px) 48vw, 38vw"
          fill
          loading="eager"
          priority
        />
      </div>
      <div className="hero__cards">
        <HeroSchedule
          className="hero__schedule-card"
          scheduleTitle={scheduleTitle}
          scheduleTimetables={scheduleTimetables}
          isInternalPage={isInternalPage}
        />
        <HeroInfoCard
          className="hero__info-card"
          infoCardTitle={infoCardTitle}
          infoCardDescription={infoCardDescription}
          isInternalPage={isInternalPage}
        />
      </div>
      {(!isInternalPage)
        && (
          <div className="hero__buttons">
            <Link
              href={`tel:${phone}`}
              className="button button--secondary hero__contact-button"
              data-testid="hero-contact-button"
              aria-label={`Связаться с нами по телефону ${phone}`}
            >
              Связаться
            </Link>
            <Button
              className="hero__ticket-button"
              theme="primary"
              isFeatured
              onClick={handleTicketPopupToggle}
              data-testid="hero-tickets-popup-button"
              aria-label="Открыть модальное окно  с билетами"
            >
              Билеты
            </Button>
          </div>
        )}
    </section>
  );
}
