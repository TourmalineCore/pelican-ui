import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoaderContent } from "./components/LoaderContent";

export function RouteChangeLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleStart = (url: string) => {
      clearTimeout(timeoutId);
      if (url !== route.asPath) {
        timeoutId = setTimeout(() => {
          setIsLoading(true);
        }, 300);
      }
    };

    const handleComplete = (url: string) => {
      if (url === route.asPath) {
        clearTimeout(timeoutId);
        setIsLoading(false);
      }
    };

    route.events.on(`routeChangeStart`, handleStart);
    route.events.on(`routeChangeComplete`, handleComplete);
    route.events.on(`routeChangeError`, handleComplete);
    return () => {
      clearTimeout(timeoutId);
      route.events.off(`routeChangeStart`, handleStart);
      route.events.off(`routeChangeComplete`, handleComplete);
      route.events.off(`routeChangeError`, handleComplete);
    };
  });

  return isLoading && (
    <div
      data-testid="loader"
      id="static-loader"
    >
      <LoaderContent />
    </div>
  );
}
