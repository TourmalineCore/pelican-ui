import { AppRoute } from "@/src/common/enum";
import { CardProps } from "@/src/common/types";
import { Card } from "@/src/components/globals/Cards/components/Card/Card";

export function NewsCard({
  id,
  className,
  image,
  title,
  description,
  dataTestId,
}: CardProps & {
  className: string,
  dataTestId?: string,
}) {
  return (
    <Card
      image={image}
      title={title}
      description={description}
      link={`${AppRoute.NEWS}/${id}`}
      dataTestId={dataTestId}
      className={`news-card ${className}`}
    />
  );
}
