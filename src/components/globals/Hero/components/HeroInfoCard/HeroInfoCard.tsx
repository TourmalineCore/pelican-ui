import { HeroComponentProps } from "@/src/common/types";
import clsx from "clsx";

export function HeroInfoCard({
  className,
  infoCardTitle,
  infoCardDescription,
  isInternalPage,
}: {
  className: string;
  infoCardTitle?: HeroComponentProps['infoCardTitle'];
  infoCardDescription: HeroComponentProps['infoCardDescription'];
  isInternalPage?: boolean;
}) {
  return (
    <div className={clsx(
      `hero-info-card`,
      className,
      {
        'hero-info-card--internal-page': isInternalPage,
      },
    )}
    >
      {infoCardTitle && <p className="hero-info-card__title">{infoCardTitle}</p>}
      <p className="hero-info-card__description">{infoCardDescription}</p>
    </div>
  );
}
