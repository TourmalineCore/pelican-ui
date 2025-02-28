import { Seo } from "@/src/common/types";
import Head from "next/head";
import { PropsWithChildren } from "react";

export function SeoHead({
  metaTitle,
  metaDescription,
  metaKeywords,
  children,
}: Seo & PropsWithChildren) {
  return (
    <Head>
      <title>{metaTitle}</title>
      {metaDescription && (
        <meta
          name="description"
          content={metaDescription}
        />
      )}
      {metaKeywords && (
        <meta
          name="keywords"
          content={metaKeywords}
        />
      )}
      {children}
    </Head>
  );
}
