import { getMockPageData } from '@/src/common/utils/getMockPageData';
import { useRouter } from 'next/router';
import { ContactZooPageProps, GlobalComponentProps, HomePageProps } from '../common/types';
import { BlockRenderer } from '../components/globals/BlockRenderer/BlockRenderer';
import { getPageData } from '../common/utils/getPageData';
import { SeoHead } from '../components/globals/SeoHead/SeoHead';

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

  const {
    email,
  } = globalData;

  const {
    seo,
    blocks,
  } = pageData;

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
  query,
  preview = false,
}: {
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

    pageData.blocks = setBlockPosition({
      slug: query.slug,
      blocks: pageData.blocks,
    });

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
