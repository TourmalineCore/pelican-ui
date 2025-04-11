
import Link from "next/link";
import Image from 'next/image';
import { GlobalComponentProps } from "@/src/common/types";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { useRouter } from "next/router";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { MutableRefObject } from "react";
import clsx from "clsx";
import { SocialMedia } from "../SocialNetwork/SocialMedia";

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
              {isTablet && (
                <ul className="footer__col col-tablet-4">
                  <li className="footer__contact">
                    <Link
                      href={`tel:${phone}`}
                      className="footer__contact-link"
                      aria-label={`Связаться с нами по телефону ${phone}`}
                      data-testid="footer-tel-link"
                    >
                      {phone}
                    </Link>
                  </li>
                  <li className="footer__contact">
                    <Link
                      href={`mailto:${email}`}
                      className="footer__contact-link"
                      aria-label={`Связаться с нами по почте ${email}`}
                      data-testid="footer-email-link"
                    >
                      {email}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {!isTablet && (
              <ul className="footer__contacts">
                <li className="footer__contact">
                  <Link
                    href={`tel:${phone}`}
                    className="footer__contact-link"
                    aria-label={`Связаться с нами по телефону ${phone}`}
                    data-testid="footer-tel-link"
                  >
                    {phone}
                  </Link>
                </li>
                <li className="footer__contact">
                  <Link
                    href={`mailto:${email}`}
                    className="footer__contact-link"
                    aria-label={`Связаться с нами по почте ${email}`}
                    data-testid="footer-email-link"
                  >
                    {email}
                  </Link>
                </li>
              </ul>
            )}
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
      Сайт разработан
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
    </div>
  );
}
