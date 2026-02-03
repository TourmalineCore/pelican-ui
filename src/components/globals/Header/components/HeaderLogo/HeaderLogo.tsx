import Image from "next/image";
import Link from "next/link";
import { AppRoute } from "@/src/common/enum";
import Logo from '../../../../../../public/images/header/logo.svg';
import LogoDesktop from '../../../../../../public/images/header/logo-desktop.svg';

export function HeaderLogo({
  className,
  isMobileMenuOpen,
  handleMobileMenuToggle,
}: {
  className: string;
  isMobileMenuOpen: boolean;
  handleMobileMenuToggle: () => void;
}) {
  return (
    <Link
      className={`${className} header-logo`}
      href={AppRoute.HOME}
      aria-label="Ссылка на главную страницу"
      data-testid="header-logo"
      onClick={() => {
        if (isMobileMenuOpen) {
          handleMobileMenuToggle();
        }
      }}
    >
      <Image
        className="header-logo__image--desktop"
        src={LogoDesktop}
        priority
        unoptimized
        alt=""
        aria-hidden="true"
      />
      <Image
        className="header-logo__image--mobile"
        src={Logo}
        priority
        unoptimized
        alt=""
        aria-hidden="true"
      />
    </Link>
  );
}
