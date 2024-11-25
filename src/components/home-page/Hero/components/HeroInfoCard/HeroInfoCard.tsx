import { HeroComponentProps } from "@/src/common/types";

export function HeroInfoCard({
  className,
  infoCardTitle,
  infoCardDescription,
}: {
  className: string,
  infoCardTitle?: HeroComponentProps['infoCardTitle'],
  infoCardDescription: HeroComponentProps['infoCardDescription'],
}) {
  return (
    <div className={`${className} hero-info-card`}>
      {infoCardTitle && <p className="hero-info-card__title">{infoCardTitle}</p>}
      <p className="hero-info-card__description">{infoCardDescription}</p>
    </div>
  );
}
