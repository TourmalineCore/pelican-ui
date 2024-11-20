import { NotFoundComponentProps } from "@/src/common/types";
import Image from "next/image";
import { Breakpoint } from "@/src/common/enum";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { Button } from "../Button/Button";

export function NotFound({
  title,
  subtitle,
  note,
  largeImage,
  smallImage,
}: Omit<NotFoundComponentProps, 'id' | '__component'>) {
  const windowWidth = useWindowWidth();

  if (windowWidth === 0) {
    return null;
  }

  const isTablet = windowWidth >= Breakpoint.TABLET;

  return (
    <section
      className="not-found container"
      data-testid="not-found"
    >
      <h1 className="not-found__title">{title}</h1>
      <h2 className="not-found__subtitle">{subtitle}</h2>
      <p className="not-found__note">{note}</p>
      <Image
        className="not-found__image"
        src={largeImage.url}
        alt={largeImage.alt}
      />
      {isTablet && (
        <Image
          className="not-found__image"
          src={smallImage.url}
          alt={smallImage.alt}
        />
      )}
      <Button
        className="not-found__btn"
        theme="primary"
      >
        Главная страница
      </Button>
    </section>
  );
}
