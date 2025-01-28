import Head from 'next/head';
import { getMockPageData } from '@/src/common/utils/getMockPageData';
import { ContactZooProps, GlobalComponentProps, HomePageProps } from '../common/types';
import { NotFound } from '../components/not-found-page/NotFound/NotFound';
import { BlockRenderer } from '../components/globals/BlockRenderer/BlockRenderer';

type UniversalProps = {
  globalData: GlobalComponentProps,
  pageData: HomePageProps | ContactZooProps,
};

export default function UniversalPage({
  globalData,
  pageData,
}: UniversalProps) {
  if (!pageData) {
    return <NotFound />;
  }

  const {
    email,
    phone,
  } = globalData;

  const {
    title, blocks,
  } = pageData;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{title}</title>
      </Head>
      {blocks.map((block) => (
        <BlockRenderer
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
  // TODO Uncomment when the api appears, there will be static data here
  // if (process.env.APP_ENV === `static`) {
  //   return {
  //     props: {
  //       navigationLinks: NAVIGATION_LINKS,
  //     },
  //   };
  // }

  // TODO there will be a request in the Strapi api here
  return {
    props: {
      pageData: getMockPageData({
        slug: query.slug,
      }),
    },
  };
}
