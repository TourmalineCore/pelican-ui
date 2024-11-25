import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import { AppRoute, Breakpoint } from "@/src/common/enum";
import Logo from '../../../../../../public/images/header/logo.svg';
import LogoDesktop from '../../../../../../public/images/header/logo-desktop.svg';

export function HeaderLogo({
  className,
}: {
  className: string,
}) {
  const windowWidth = useWindowWidth();

  return (
    <Link
      className={`${className} header-logo`}
      href={AppRoute.HOME}
    >
      <Image
        src={getLogo({
          windowsSize: windowWidth,
        })}
        alt="Логотип челябинского зоопарка"
      />
    </Link>
  );

  function getLogo({
    windowsSize,
  }: {
    windowsSize: number
  }) {
    if (windowsSize >= Breakpoint.DESKTOP) {
      return LogoDesktop;
    }

    return Logo;
  }
}
