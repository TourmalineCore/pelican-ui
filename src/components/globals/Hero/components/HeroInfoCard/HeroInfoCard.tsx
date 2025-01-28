import { HeroComponentProps } from "@/src/common/types";
import clsx from "clsx";

export function HeroInfoCard({
  className,
  infoCardTitle,
  infoCardDescription,
  isContactZoo,
}: {
  className: string,
  infoCardTitle?: HeroComponentProps['infoCardTitle'],
  infoCardDescription: HeroComponentProps['infoCardDescription'],
  isContactZoo: HeroComponentProps['isContactZoo'],
}) {
  return (
    <div className={clsx(
      `hero-info-card`,
      className,
      {
        'hero-info-card--contact-zoo': isContactZoo,
      },
    )}
    >
      {infoCardTitle && <p className="hero-info-card__title">{infoCardTitle}</p>}
      <p className="hero-info-card__description">{infoCardDescription}</p>
    </div>
  );
}
