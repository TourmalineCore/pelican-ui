import Link from "next/link";
import Image from 'next/image';
import { GlobalComponentProps } from "@/src/common/types";
import { Breakpoint } from "@/src/common/enum";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { useRouter } from "next/router";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { SocialMedia } from "../SocialNetwork/SocialMedia";

export function Footer({
  officialLinks,
  footerAboutLinks,
  footerUserLinks,
  email,
  phone,
  footerNavTitleLeft,
  footerNavTitleRight,
  popupTicketBuyText,
}: Omit<GlobalComponentProps,
"navigationLinks" |
"popupTicketBuyText" |
"ticketsPopupGeneral" |
"ticketsPopupSubsidized" |
"ticketsPopupRulesImages" |
"ticketsPopupRefundReasons" >) {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= Breakpoint.DESKTOP;
  const isTablet = windowWidth >= Breakpoint.TABLET;
  const router = useRouter();

  const {
    handleTicketPopupToggle,
  } = useTicketPopup();

  return (
    <div
      className="footer"
      data-testid="footer"
    >
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__cols">
            <div className="footer__col footer__col--left">
              <h3 className="footer__title">{footerNavTitleLeft}</h3>
              <ul className="footer__nav">
                <li
                  className="footer__nav-item"
                  key={popupTicketBuyText}
                >
                  <button
                    type="button"
                    className="button footer__nav-link"
                    onClick={handleTicketPopupToggle}
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
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <h3 className="footer__title">{footerNavTitleRight}</h3>
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
                      onClick={(e) => {
                        e.preventDefault();
                        if (router.pathname !== link) {
                          router.push(link);
                        }
                      }}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="footer__contacts">
            <li className="footer__contact">
              <Link
                href={`tel:${phone}`}
                className="footer__contact-link"
              >
                {phone}
              </Link>
            </li>
            <li className="footer__contact">
              <Link
                href={`mailto:${email}`}
                className="footer__contact-link"
              >
                {email}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__middle">
          {
            isTablet && (
              isDesktop
                ? (
                  <div className="footer__official-name">
                    <p className="footer__official-name-text">
                      Муниципальное Бюджетное Учреждение Культуры «Зоопарк»
                    </p>
                  </div>
                )
                : (
                  <div className="footer__official-name">
                    <p className="footer__official-name-text">
                      МБУК «Зоопарк»
                    </p>
                  </div>
                )
            )
          }
          <div className="footer__social-media">
            <SocialMedia
              className="footer__social-icon"
            />
          </div>
          <div className="footer__copyright">
            Сайт разработан
            <Link
              href="https://www.tourmalinecore.com/"
              className="footer__copyright-link"
            >
              Tourmaline Core
              <span className="footer__heart">❤</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <ul className="footer__official-links">
          {officialLinks.map(({
            id,
            name,
            link,
            icon,
            alt,
          }) => (
            <li
              key={id}
              className="footer__official-link-item"
            >
              <Link
                href={link}
                className="footer__official-link"
              >
                <Image
                  className="footer__official-link-logo"
                  src={icon}
                  alt={alt}
                />
                <span className="footer__official-link-name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
