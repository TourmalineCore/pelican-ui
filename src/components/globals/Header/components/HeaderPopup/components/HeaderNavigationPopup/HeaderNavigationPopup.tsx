import { GlobalComponentProps } from "@/src/common/types";
import { HeaderNavigation } from "../../../HeaderNavigation/HeaderNavigation";

export function HeaderNavigationPopup({
  navigationLinks,
}:{
  navigationLinks: GlobalComponentProps['navigationLinks']
}) {
  return (
    <HeaderNavigation
      navigationLinks={navigationLinks}
      className="header-navigation-popup"
    />
  );
}
