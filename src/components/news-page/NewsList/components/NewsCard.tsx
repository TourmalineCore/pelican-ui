import { CardProps } from "@/src/common/types";
import { Card } from "@/src/components/globals/Card/Card";

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
      id={id}
      image={image}
      title={title}
      description={description}
      isNews
      dataTestId={dataTestId}
      className={`news-card ${className}`}
    />
  );
}
