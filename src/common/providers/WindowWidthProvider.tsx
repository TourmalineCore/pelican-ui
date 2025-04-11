import {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from "react";

type WindowWidth = {
  windowWidth: number;
  handleSetWindowWidth:() => void;
};

export const WindowWidthContext = createContext<WindowWidth>({
  windowWidth: 0,
  handleSetWindowWidth: () => {},
});

export function WindowWidthProvider({
  children,
}: PropsWithChildren) {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleSetWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const windowWidthState = useMemo(() => ({
    windowWidth,
    handleSetWindowWidth,
  }), [windowWidth]);

  return (
    <WindowWidthContext.Provider value={windowWidthState}>
      {children}
    </WindowWidthContext.Provider>
  );
}
