import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';

 type AccordionComponentProps = PropsWithChildren & {
   triggerText: string;
   triggerHideText: string;
   className?: string;
 };

export function Accordion({
  triggerText,
  triggerHideText,
  children,
  className,
}: AccordionComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        `accordion`,
        className,
      )}
      data-testid="accordion"
    >
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="accordion__trigger button"
        data-testid="accordion-trigger"
      >
        {isOpen ? triggerHideText : triggerText}
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
