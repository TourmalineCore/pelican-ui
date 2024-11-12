import Link from "next/link";
import Image from 'next/image';
import { GlobalComponentProps } from "@/src/common/types";
import { SocialMedia } from "../SocialNetwork/SocialMedia";

export function Footer({
  officialLinks,
  footerAboutLinks,
  footerUserLinks,
  email,
  phone,
}: Omit<GlobalComponentProps, "navigationLinks" | "popupTicketBuyText" >) {
  return (
    <div
      className="footer"
      data-testid="footer"
    >
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__cols">
            <div className="footer__col footer__col--left">
              <h3 className="footer__title">Посетителям</h3>
              <ul className="footer__nav">
                {footerUserLinks!.map(({
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
              <h3 className="footer__title">О зоопарке</h3>
              <ul className="footer__nav">
                {footerAboutLinks!.map(({
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
          </div>
          <ul className="footer__contacts">
            <li className="footer__contact">
              <Link
                href="#"
                className="footer__contact-link"
              >
                {phone}
              </Link>
            </li>
            <li className="footer__contact">
              <Link
                href="#"
                className="footer__contact-link"
              >
                {email}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__middle">
          <div className="footer__official-name footer__official-name--mobile">МБУК «Зоопарк»</div>
          <div className="footer__official-name footer__official-name--desktop">
            <p>Муниципальное Бюджетное Учреждение Культуры «Зоопарк»</p>
          </div>
          <div className="footer__social-media">
            <SocialMedia />
          </div>
          <div className="footer__copyright">
            Сайт разработан
            <Link
              href="#"
              className="footer__copyright-link"
            >
              Tourmaline Core
              <span className="footer__heart">❤️</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <ul className="footer__official-links">
          {officialLinks!.map(({
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
