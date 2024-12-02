import { useContext } from "react";
import { Breakpoint } from "../enum";
import { WindowWidthContext } from "../providers/WindowWidthProvider";

export function useWindowWidth() {
  const {
    windowWidth,
  } = useContext(WindowWidthContext);

  return {
    windowWidth,
    isMobile: windowWidth < Breakpoint.TABLET,
    isTablet: windowWidth >= Breakpoint.TABLET,
    isTabletXl: windowWidth >= Breakpoint.TABLET_XL,
    isDesktop: windowWidth >= Breakpoint.DESKTOP,
  };
}
