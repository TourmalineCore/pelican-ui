import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  theme: 'primary' | 'secondary';
};

export function Button({
  children,
  className,
  theme,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(`button button_${theme}`, className)}
      {...props}
    >
      {children}
    </button>
  );
}
