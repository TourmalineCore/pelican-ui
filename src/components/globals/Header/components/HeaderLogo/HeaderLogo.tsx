import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import Image from "next/image";
import { DESKTOP_BREAKPOINT } from "@/src/common/constants";
import Link from "next/link";
import { AppRoute } from "@/src/common/enum";
import Logo from '../../../../../../public/images/header/logo.svg';
import LogoDesktop from '../../../../../../public/images/header/logo-desktop.svg';

export function HeaderLogo() {
  const windowWidth = useWindowWidth();

  return (
    <Link href={AppRoute.Home}>
      <Image
        className="header-logo"
        src={getLogo({ breakpoint: windowWidth })}
        alt="Логотип челябинского зоопарка"
      />
    </Link>
  );

  function getLogo({ breakpoint }: { breakpoint: number }) {
    if (breakpoint >= DESKTOP_BREAKPOINT) {
      return LogoDesktop;
    }

    return Logo;
  }
}
