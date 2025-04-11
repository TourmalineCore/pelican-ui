import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  theme: 'primary' | 'secondary';
  isFeatured?: boolean;
};

export function Button({
  children,
  className,
  theme,
  isFeatured,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        `button button--${theme}`,
        className,
        {
          'button--featured': isFeatured,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
