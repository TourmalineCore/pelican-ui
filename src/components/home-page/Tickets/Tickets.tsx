import { TicketsComponentProps } from "@/src/common/types";
import { Button } from "@/src/components/globals/Button/Button";

export function Tickets({
  title,
}: Omit<TicketsComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="tickets container"
      data-testid="tickets"
    >
      {title}
      <Button
        className="tickets__ticket-button"
        theme="primary"
        isFeatured
      >
        Билеты
      </Button>
    </section>
  );
}
