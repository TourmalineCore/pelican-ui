import { GlobalComponentProps } from "@/src/common/types";
import { HeaderNavigation } from "../../../HeaderNavigation/HeaderNavigation";

export function HeaderNavigationPopup({
  className,
  navigationLinks,
}:{
  className: string,
  navigationLinks: GlobalComponentProps['navigationLinks'],
}) {
  return (
    <HeaderNavigation
      navigationLinks={navigationLinks}
      className={`${className} header-navigation-popup`}
    />
  );
}
