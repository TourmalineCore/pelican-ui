import clsx from "clsx";

export function Tab({
  className,
  label,
  isActive,
  ariaLabel,
  onClick,
}: {
  className: string;
  label: string | number;
  isActive: boolean;
  ariaLabel: string;
  onClick: () => void;
}) {
  return (
    <li
      className={clsx(
        `tab`,
        className,
      )}
    >
      <button
        type="button"
        className={clsx(
          `tab__button`,
          {
            'tab__button--active': isActive,
          },
        )}
        onClick={onClick}
        aria-label={ariaLabel}
        data-testid="tab"
      >
        {label}
      </button>
    </li>
  );
}
