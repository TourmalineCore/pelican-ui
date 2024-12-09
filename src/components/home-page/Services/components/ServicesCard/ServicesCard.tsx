import { ServicesCardProps } from "@/src/common/types";
import { Card } from "@/src/components/globals/Card/Card";

export function ServicesCard({
  className,
  image,
  labels,
  title,
  description,
}: Omit<ServicesCardProps, 'id'> & {
  className: string
}) {
  return (
    <Card
      image={image}
      title={title}
      description={description}
      labels={labels}
      isService
      className={`services-card ${className}`}
    />
  );
}
