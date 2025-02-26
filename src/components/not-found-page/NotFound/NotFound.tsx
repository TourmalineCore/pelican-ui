import Image from "next/image";
import { AppRoute } from "@/src/common/enum";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import Link from "next/link";
import BearImageSrc from "@/public/images/not-found/bear.svg";
import GeeseImageSrc from "@/public/images/contact-zoo/contact-zoo-geese.svg";

export function NotFound() {
  const {
    isTablet,
  } = useWindowWidth();

  return (
    <section
      className="not-found container"
      data-testid="not-found"
    >
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Ой, что-то пошло не так</h2>
      <p className="not-found__note">Страница не найдена или не существует</p>
      <Image
        className="not-found__image"
        src={BearImageSrc}
        unoptimized
        alt="Медведь"
      />
      {isTablet && (
        <Image
          className="not-found__image"
          src={GeeseImageSrc}
          unoptimized
          alt="Гуси"
        />
      )}
      <Link
        href={AppRoute.HOME}
        className="not-found__button button button--primary"
      >
        Главная страница
      </Link>
    </section>
  );
}
