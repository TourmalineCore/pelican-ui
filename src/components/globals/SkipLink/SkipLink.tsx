import Link from "next/link";
import { MutableRefObject } from "react";

export function SkipLink({
  mainElementRef,
}: {
  mainElementRef: MutableRefObject<null | HTMLElement>;
}) {
  return (
    <Link
      href="#main-content"
      className="skip-link button"
      onClick={() => {
        mainElementRef.current!.focus();
      }}
      data-testid="skip-link"
    >
      Перейти к основному контенту
    </Link>
  );
}
