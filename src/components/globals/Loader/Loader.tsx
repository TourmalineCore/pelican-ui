import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoaderContainer } from "./components/LoaderContainer";

export function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  const [nonce, setNonce] = useState<string | null>(null);
  const route = useRouter();

  useEffect(() => {
    setNonce((window as any).__NONCE__ || null);
  }, []);

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

  return isLoading && nonce ? (
    <div
      data-testid="loader"
      id="static-loader"
    >
      <LoaderContainer nonce={nonce} />
    </div>
  ) : null;
}
