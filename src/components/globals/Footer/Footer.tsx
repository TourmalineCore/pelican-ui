
import Link from "next/link";
import Image from 'next/image';
import { GlobalComponentProps } from "@/src/common/types";
import { useRouter } from "next/router";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { MutableRefObject } from "react";
import { AppRoute, ComponentName } from "@/src/common/enum";
import { normalizeSlug } from "@/src/common/utils/normalizeSlug";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { SocialMedia } from "../SocialNetwork/SocialMedia";
import { IconGit } from "./components/IconGit/IconGit";

const GosBanner = dynamic(
  () => import(`../../home-page/GosBanner/GosBanner`).then((component) => component.GosBanner),
  {
    ssr: false,
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
                renderContacts({
                  className: `footer__contacts--tablet footer__col col-tablet-4`,
                  phone,
                  email,
                })
              }
            </div>
            {
              renderContacts({
                className: `footer__contacts--mobile`,
                phone,
                email,
              })
            }
          </div>
          <div className="footer__middle grid">
            <div className="footer__official-name col-tablet-4">
              <p className="footer__official-name-text footer__official-name-text--full">
                Муниципальное Бюджетное Учреждение Культуры «Зоопарк»
              </p>
              <p className="footer__official-name-text footer__official-name-text--short">
                МБУК «Зоопарк»
              </p>
            </div>
            <div className="footer__copyright col-tablet-4">
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
                  aria-hidden
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
            <div className="footer__social-media col-tablet-4">
              <SocialMedia
                className="footer__social-icon"
              />
            </div>
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
                {icon && (
                  <Image
                    className="footer__official-link-logo"
                    src={icon.path}
                    alt={icon.alt}
                    aria-hidden="true"
                  />
                )}
                <span className="footer__official-link-name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
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
    <ul className={clsx(`footer__contacts`, className)}>
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
