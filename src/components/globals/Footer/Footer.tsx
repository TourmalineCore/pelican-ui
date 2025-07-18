
import Link from "next/link";
import Image from 'next/image';
import { GlobalComponentProps } from "@/src/common/types";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { useRouter } from "next/router";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { MutableRefObject } from "react";
import clsx from "clsx";
import { AppRoute, ComponentName } from "@/src/common/enum";
import { normalizeSlug } from "@/src/common/utils/normalizeSlug";
import dynamic from "next/dynamic";
import { SocialMedia } from "../SocialNetwork/SocialMedia";
import { IconGit } from "./components/IconGit/IconGit";

const GosBanner = dynamic(
  () => import(`../../home-page/GosBanner/GosBanner`).then((component) => component.GosBanner),
  {
    ssr: true,
  },
);

type FooterProps =
  Omit<GlobalComponentProps,
  "navigationLinks"
  | "ticketsPopup"
  > & {
    footerElementRef: MutableRefObject<HTMLDivElement | null>;
  };

export function Footer({
  officialLinks,
  footerAboutLinks,
  footerUserLinks,
  email,
  phone,
  footerNavTitleLeft,
  footerNavTitleRight,
  popupTicketBuyText,
  footerElementRef,
}: FooterProps) {
  const router = useRouter();

  const {
    isMobile,
    isTablet,
    isDesktop,
  } = useWindowWidth();

  const {
    handleTicketPopupToggle,
  } = useTicketPopup();

  const slugAfterNormalize = normalizeSlug({
    slug: router.asPath,
  });

  const isGosBannerVisible = slugAfterNormalize === AppRoute.HOME
   || slugAfterNormalize === `${AppRoute.COMPONENTS}/${ComponentName.FOOTER}`;

  return (
    <footer
      ref={footerElementRef}
      className="footer"
      data-testid="footer"
    >
      <div className="footer__inner">
        <div className="container">
          <div className="footer__top">
            <div className="footer__cols grid">
              <div className="footer__col col-tablet-4">
                <p className="footer__title">{footerNavTitleLeft}</p>
                <ul className="footer__nav">
                  <li
                    className="footer__nav-item"
                    key={popupTicketBuyText}
                  >
                    <button
                      type="button"
                      className="button footer__nav-link"
                      onClick={handleTicketPopupToggle}
                      aria-label="Открыть модальное окно с билетами"
                      data-testid="footer-tickets-popup-button"
                    >
                      {popupTicketBuyText}
                    </button>
                  </li>
                  {footerUserLinks.map(({
                    id,
                    name,
                    link,
                  }) => (
                    <li
                      key={id}
                      className="footer__nav-item"
                    >
                      <Link
                        href={link}
                        className="footer__nav-link"
                        aria-label={`Перейти на страницу ${name}`}
                        data-testid="footer-nav-link"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer__col col-tablet-4">
                <p className="footer__title">{footerNavTitleRight}</p>
                <ul className="footer__nav">
                  {footerAboutLinks.map(({
                    id,
                    name,
                    link,
                  }) => (
                    <li
                      key={id}
                      className="footer__nav-item"
                    >
                      <Link
                        href={link}
                        className="footer__nav-link"
                        data-testid="footer-nav-link"
                        onClick={(e) => router.pathname === link && e.preventDefault()}
                        aria-label={`Перейти на страницу ${name}`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {
                isTablet && (
                  renderContacts({
                    className: `footer__col col-tablet-4`,
                    phone,
                    email,
                  }))
              }
            </div>
            {
              !isTablet && (
                renderContacts({
                  className: `footer__contacts`,
                  phone,
                  email,
                }))
            }
          </div>
          <div className="footer__middle grid">
            {
              isTablet && (
                isDesktop
                  ? (
                    <div className="footer__official-name col-tablet-4">
                      <p className="footer__official-name-text">
                        Муниципальное Бюджетное Учреждение Культуры «Зоопарк»
                      </p>
                    </div>
                  )
                  : (
                    <div className="footer__official-name col-tablet-4">
                      <p className="footer__official-name-text">
                        МБУК «Зоопарк»
                      </p>
                    </div>
                  )
              )
            }
            {
              isTablet && (
                renderCopyright({
                  className: `col-tablet-4`,
                  isTablet,
                }))
            }
            <div className="footer__social-media col-tablet-4">
              <SocialMedia
                className="footer__social-icon"
              />
            </div>
            {
              isMobile && (
                renderCopyright()
              )
            }
          </div>
        </div>
      </div>
      {isGosBannerVisible && <GosBanner />}
      <div className="container footer__bottom">
        <ul className="footer__official-links grid">
          {officialLinks.map(({
            id,
            name,
            link,
            icon,
            alt,
          }) => (
            <li
              key={id}
              className="footer__official-link-item col-tablet-4"
            >
              <Link
                href={link}
                className="footer__official-link"
                data-testid="footer-official-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="footer__official-link-logo"
                  src={icon}
                  alt={alt}
                  aria-hidden="true"
                />
                <span className="footer__official-link-name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function renderCopyright({
  className,
  isTablet = false,
} : {
  className?: string;
  isTablet?: boolean;
} = {}) {
  return (
    <div className={clsx(
      `footer__copyright`,
      className,
    )}
    >
      Открытый код проекта
      <Link
        href="https://www.tourmalinecore.com/ru/"
        className="footer__copyright-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Перейти на сайт компании Tourmaline Core"
        data-testid="footer-copyright-link"
      >
        Tourmaline Core
        <span
          className="footer__heart"
          {...(isTablet && {
            "aria-hidden": `true`,
          })}
        >
          ❤
        </span>
      </Link>
      <Link
        href="https://github.com/TourmalineCore/pelican-documentation"
        className="footer__github-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ссылка на github"
        data-testid="footer-icon-github"
      >
        <IconGit />
      </Link>
    </div>
  );
}

function renderContacts({
  className,
  phone,
  email,
} : {
  className: string;
  phone: string;
  email: string;
}) {
  return (
    <ul className={className}>
      <li className="footer__contact">
        <a
          href={`tel:${phone}`}
          className="footer__contact-link"
          aria-label={`Связаться с нами по телефону ${phone}`}
          data-testid="footer-tel-link"
        >
          {phone}
        </a>
      </li>
      <li className="footer__contact">
        <a
          href={`mailto:${email}`}
          className="footer__contact-link"
          aria-label={`Связаться с нами по почте ${email}`}
          data-testid="footer-email-link"
        >
          {email}
        </a>
      </li>
    </ul>
  );
}
