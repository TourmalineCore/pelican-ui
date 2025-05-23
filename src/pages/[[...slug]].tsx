import { getMockPageData } from '@/src/common/utils/getMockPageData';
import { useRouter } from 'next/router';
import { ContactZooPageProps, GlobalComponentProps, HomePageProps } from '../common/types';
import { BlockRenderer } from '../components/globals/BlockRenderer/BlockRenderer';
import { getPageData } from '../common/utils/getPageData';
import { SeoHead } from '../components/globals/SeoHead/SeoHead';
import { useGosBannerWidget } from '../common/hooks/useGosBannerWidget';
import { useScrollTop } from '../common/hooks/useScrollTop';

type UniversalProps = {
  globalData: GlobalComponentProps;
  pageData: HomePageProps | ContactZooPageProps;
};

export default function UniversalPage({
  globalData,
  pageData,
}: UniversalProps) {
  const {
    asPath,
  } = useRouter();
  useGosBannerWidget();

  const {
    email,
  } = globalData;

  const {
    seo,
    blocks,
  } = pageData;

  useScrollTop({
    dependencies: [asPath],
  });

  return (
    <>
      <SeoHead
        metaTitle={seo?.metaTitle || `Челябинский зоопарк`}
        metaDescription={seo?.metaDescription}
        metaKeywords={seo?.metaKeywords}
      />
      {blocks?.map((block) => (
        <BlockRenderer
          slug={asPath}
          key={block.id}
          block={block}
          email={email}
        />
      ))}
    </>
  );
}

export async function getServerSideProps({
  res,
  query,
  preview = false,
}: {
  res: any;
  preview: boolean;
  query: {
    slug: string;
  };
}) {
  let pageData;

  if (process.env.APP_ENV === `static`) {
    pageData = getMockPageData({
      slug: query.slug,
    });

    if (!pageData) {
      return {
        notFound: true,
      };
    }

    pageData.blocks = setBlockPosition({
      slug: query.slug,
      blocks: pageData.blocks,
    });

    return {
      props: {
        pageData,
      },
    };
  }

  try {
    pageData = await getPageData({
      slug: query.slug,
      preview,
    });

    if (!pageData) {
      return {
        notFound: true,
      };
    }

    pageData.blocks = setBlockPosition({
      slug: query.slug,
      blocks: pageData.blocks,
    });

    res.setHeader(
      `Cache-Control`,
      `public, s-maxage=10, stale-while-revalidate=59`,
    );

    return {
      props: {
        pageData,
      },
    };
  } catch {
    return {
      props: {
        pageData: {},
      },
    };
  }
}

function setBlockPosition({
  slug,
  blocks,
}: {
  slug: string;
  blocks: any;
}) {
  if (slug && blocks.length) {
    return blocks.map((block: any, index: number) => {
      const isFirst = index === 0;
      const isLast = index === blocks.length - 1;

      if (isFirst && isLast) {
        return {
          ...block,
          isFirstBlock: true,
          isLastBlock: true,
        };
      }

      if (isFirst) {
        return {
          ...block,
          isFirstBlock: true,
        };
      }

      if (isLast) {
        return {
          ...block,
          isLastBlock: true,
        };
      }

      return block;
    });
  }

  return blocks;
}
