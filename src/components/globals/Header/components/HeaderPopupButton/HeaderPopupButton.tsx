import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function HeaderPopupButton({
  className,
  isActive,
  handleToggle,
}: {
  className: string,
  isActive: boolean;
  handleToggle: () => void
}) {
  return (
    <div
      role="button"
      className={clsx(`${className} header-popup-button`, {
        active: isActive,
      })}
      data-testid="header-popup-button"
      onClick={handleToggle}
      onKeyUp={handleOnKeyUp}
      tabIndex={0}
    >
      <span />
    </div>
  );

  function handleOnKeyUp(event: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    if (event.key === `Enter`) {
      handleToggle();
    }
  }
}
