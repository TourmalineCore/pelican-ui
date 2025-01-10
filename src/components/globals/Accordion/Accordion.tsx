import clsx from 'clsx';
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';

 type AccordionComponentProps = PropsWithChildren & {
   triggerText: string;
   triggerHideText?: string;
   className?: string;
   icon: string;
   ariaLabel?: string;
 };

export function Accordion({
  triggerText,
  triggerHideText,
  children,
  className,
  icon,
  ariaLabel,
}: AccordionComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        `accordion`,
        className,
        {
          'is-active': isOpen,
        },
      )}
      data-testid="accordion"
    >
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="accordion__trigger button"
        aria-label={ariaLabel}
        aria-expanded={`${!!isOpen}`}
        aria-controls="accordion-content"
        data-testid="accordion-trigger"
      >
        {isOpen ? triggerHideText || triggerText : triggerText}

        <span className="accordion__icon">
          <Image
            className="accordion__chevron"
            src={icon}
            aria-hidden="true"
            alt={isOpen ? `Hide accordion content` : `Open accordion content`}
          />
        </span>
      </button>
      {isOpen && (
        <div
          className="accordion__content"
          id="accordion-content"
          data-testid="accordion-content"
        >
          {children}
        </div>
      )}
    </div>
  );
}
