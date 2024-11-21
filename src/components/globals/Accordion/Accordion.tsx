import { PropsWithChildren, useState } from 'react';

 type AccordionComponentProps = PropsWithChildren & {
   triggerText: string;
 };

export function Accordion({
  triggerText,
  children,
}: AccordionComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="accordion"
      data-testid="accordion"
    >
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="accordion__trigger"
        data-testid="accordion-trigger"
      >
        {triggerText}
      </button>
      {isOpen && (
        <div
          className="accordion__content"
          data-testid="accordion-content"
        >
          {children}
        </div>
      )}
    </div>
  );
}
