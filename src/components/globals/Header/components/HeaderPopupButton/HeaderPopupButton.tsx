import clsx from "clsx";

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
    <button
      type="button"
      className={clsx(`${className} header-popup-button`, {
        active: isActive,
      })}
      data-testid="header-popup-button"
      onClick={handleToggle}
      aria-label={`${isActive ? `Закрыть меню` : `Открыть меню`} `}
    >
      <span />
    </button>
  );
}
