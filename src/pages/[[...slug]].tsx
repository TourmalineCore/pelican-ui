import Head from 'next/head';
import { getMockPageData } from '@/src/common/utils/getMockPageData';
import { useRouter } from 'next/router';
import { ContactZooPageProps, GlobalComponentProps, HomePageProps } from '../common/types';
import { NotFound } from '../components/not-found-page/NotFound/NotFound';
import { BlockRenderer } from '../components/globals/BlockRenderer/BlockRenderer';
import { getPageData } from '../common/utils/getPageData';

type UniversalProps = {
  globalData: GlobalComponentProps,
  pageData: HomePageProps | ContactZooPageProps,
};

export default function UniversalPage({
  globalData,
  pageData,
}: UniversalProps) {
  const route = useRouter();

  if (!pageData) {
    return <NotFound />;
  }
  const {
    email,
    phone,
  } = globalData;

  const {
    seo, blocks,
  } = pageData;

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta
          name={seo.metaDescription}
          content="Сайт зоопарка"
        />
      </Head>
      {blocks.map((block) => (
        <BlockRenderer
          slug={route.asPath}
          key={block.id}
          block={block}
          phone={phone}
          email={email}
        />
      ))}
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    slug: string,
  },
}) {
  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: getMockPageData({
          slug: query.slug,
        }),
      },
    };
  }

  try {
    return {
      props: {
        pageData: await getPageData({
          slug: query.slug,
        }),
      },
    };
  } catch {
    return {
      props: {
        pageData: null,
      },
    };
  }
}
