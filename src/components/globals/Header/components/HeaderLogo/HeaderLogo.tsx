import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import { AppRoute, Breakpoint } from "@/src/common/enum";
import Logo from '../../../../../../public/images/header/logo.svg';
import LogoDesktop from '../../../../../../public/images/header/logo-desktop.svg';

export function HeaderLogo() {
  const windowWidth = useWindowWidth();

  return (
    <Link href={AppRoute.HOME}>
      <Image
        className="header-logo"
        src={getLogo({ windowsSize: windowWidth })}
        alt="Логотип челябинского зоопарка"
      />
    </Link>
  );

  function getLogo({ windowsSize }: { windowsSize: number }) {
    if (windowsSize >= Breakpoint.DESKTOP) {
      return LogoDesktop;
    }

    return Logo;
  }
}
