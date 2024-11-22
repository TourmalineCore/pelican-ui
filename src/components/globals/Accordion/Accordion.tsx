import clsx from 'clsx';
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';

 type AccordionComponentProps = PropsWithChildren & {
   triggerText: string;
   triggerHideText?: string;
   className?: string;
   icon: string;
 };

export function Accordion({
  triggerText,
  triggerHideText,
  children,
  className,
  icon,
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
        data-testid="accordion-trigger"
      >
        {isOpen ? triggerHideText || triggerText : triggerText}

        <span className="accordion__icon">
          <Image
            className="accordion__chevron"
            src={icon}
            alt={isOpen ? `Hide accordion content` : `Open accordion content`}
          />
        </span>
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
