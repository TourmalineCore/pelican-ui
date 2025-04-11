import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => (url !== route.asPath) && setIsLoading(true);
    // eslint-disable-next-line max-len
    const handleComplete = (url: string) => (url === route.asPath) && setTimeout(() => { setIsLoading(false); }, 5000);

    route.events.on(`routeChangeStart`, handleStart);
    route.events.on(`routeChangeComplete`, handleComplete);
    route.events.on(`routeChangeError`, handleComplete);
    return () => {
      route.events.off(`routeChangeStart`, handleStart);
      route.events.off(`routeChangeComplete`, handleComplete);
      route.events.off(`routeChangeError`, handleComplete);
    };
  });
  return isLoading && (
    <div className="spinner-wrapper">
      <div className="spinner" />
    </div>
  );
}
