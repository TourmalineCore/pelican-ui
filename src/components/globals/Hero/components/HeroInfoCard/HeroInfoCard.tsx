import { GlobalComponentProps } from "@/src/common/types";

export function HeroInfoCard({
  className = ``,
  infoCardTitle,
  infoCardDescription,
}: {
  className: string,
  infoCardTitle: GlobalComponentProps['infoCardTitle'],
  infoCardDescription: GlobalComponentProps['infoCardDescription'],
}) {
  return (
    <div className={`${className} info-card`}>
      <p className="info-card__title body-1 font-weight-medium">{infoCardTitle}</p>
      <p className="info-card__description caption-1 font-weight-medium">{infoCardDescription}</p>
    </div>
  );
}
