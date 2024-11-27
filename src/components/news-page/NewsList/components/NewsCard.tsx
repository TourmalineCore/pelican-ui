import { CardProps } from "@/src/common/types";
import { Card } from "@/src/components/globals/Card/Card";

export function NewsCard({
  className,
  image,
  title,
  description,
  dataTestId,
}: Omit<CardProps, 'id'> & {
  className: string,
  dataTestId?: string,
}) {
  return (
    <Card
      image={image}
      title={title}
      description={description}
      isNews
      dataTestId={dataTestId}
      className={`news-card ${className}`}
    />
  );
}
