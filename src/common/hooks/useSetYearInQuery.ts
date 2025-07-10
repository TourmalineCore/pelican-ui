import { useRouter } from "next/router";
import { useEffect } from "react";

export function useSetYearInQuery({
  year,
}: {
  year: string;
}) {
  const router = useRouter();

  useEffect(() => {
    if (year) {
      router.replace(
        {
          query: {
            ...router.query,
            year,
          },
        },
        undefined,
        {
          shallow: true,
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
