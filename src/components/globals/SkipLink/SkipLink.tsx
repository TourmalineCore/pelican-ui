import clsx from "clsx";
import Link from "next/link";
import { MutableRefObject } from "react";

export function SkipLink({
  isComponentPage,
  mainElementRef,
}: {
  isComponentPage?: boolean;
  mainElementRef: MutableRefObject<null | HTMLElement>;
}) {
  return (
    <Link
      href="#main-content"
      className={clsx(`skip-link button`, {
        'skip-link--components-page': isComponentPage,
      })}
      onClick={() => {
        mainElementRef?.current!.focus();
      }}
      data-testid="skip-link"
    >
      Перейти к основному контенту
    </Link>
  );
}
