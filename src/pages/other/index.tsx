import { OtherPageListResponse, OtherResponse } from "@/src/common/api-types";
import { useScrollTop } from "@/src/common/hooks/useScrollTop";
import { CategoryProps, OtherPageProps } from "@/src/common/types";
import { apiFetch } from "@/src/common/utils/HttpClient";
import { Categories } from "@/src/components/globals/Categories/Categories";
import { SeoHead } from "@/src/components/globals/SeoHead/SeoHead";
import qs from "qs";

export default function OtherPage({
  pageData,
  otherPages,
}: {
  pageData: OtherPageProps;
  otherPages: Omit<CategoryProps, 'hasTabs'>[];
}) {
  const {
    seo,
    title,
  } = pageData;

  useScrollTop();

  return (
    <>
      <SeoHead
        metaTitle={seo?.metaTitle || `Другое`}
        metaDescription={seo?.metaDescription}
        metaKeywords={seo?.metaKeywords}
      />
      <Categories
        categoriesTitle={title}
        categories={otherPages}
      />
    </>
  );
}

export async function getServerSideProps({
  preview = false,
}: {
  preview: boolean;
}) {
  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: {},
        otherPages: [],
      },
    };
  }

  const otherPageData = await getOtherPageData({
    isPreview: preview,
  });

  const otherPages = await getOtherPages({
    isPreview: preview,
  });

  return {
    props: {
      pageData: otherPageData,
      otherPages,
    },
  };
}

async function getOtherPageData({
  isPreview,
}: {
  isPreview: boolean;
}) {
  const otherPageResponse: OtherResponse = await apiFetch(`/other?populate=*&status=${isPreview ? `draft` : `published`}`);

  if (!otherPageResponse) {
    return {};
  }

  return {
    title: otherPageResponse.data?.title,
    ...(otherPageResponse.data?.seo && {
      seo: {
        metaTitle: otherPageResponse.data?.seo?.metaTitle,
        metaDescription: otherPageResponse.data?.seo?.metaDescription,
        metaKeywords: otherPageResponse.data?.seo?.keywords,
      },
    }),
  };
}

async function getOtherPages({
  isPreview,
}: {
  isPreview: boolean;
}) {
  const queryParams = {
    fields: [`title`, `slug`],
    status: isPreview ? `draft` : `published`,
  };

  const response: OtherPageListResponse = await apiFetch(`/other-pages?${qs.stringify(queryParams)}`, {
    isPreview,
  });

  return response.data!.map((item) => ({
    slug: item.slug,
    title: item.title,
  }));
}
