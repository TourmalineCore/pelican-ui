import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function HeaderMobileButton({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: () => void
}) {
  return (
    <div
      role="button"
      className={clsx(`header-mobile-button`, {
        active: isActive,
      })}
      onClick={setIsActive}
      onKeyUp={handleOnKeyUp}
      tabIndex={0}
    >
      <span />
    </div>
  );

  function handleOnKeyUp(event: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    if (event.key === `Enter`) {
      setIsActive();
    }
  }
}