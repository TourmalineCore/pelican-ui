import Head from 'next/head';
import { BlockRenderer } from '@/src/components/globals/BlockRenderer/BlockRenderer';
import { getMockPageData } from '@/src/common/utils/getMockPageData';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps, HomePageProps } from '../common/types';
import { NotFound } from '../components/not-found-page/NotFound/NotFound';

type UniversalProps = {
  globalData: GlobalComponentProps,
  pageData: HomePageProps,
};

export default function UniversalPage({
  globalData,
  pageData,
}: UniversalProps) {
  if (!pageData || !globalData) {
    return <NotFound />;
  }

  const {
    navigationLinks,
    email,
    phone,
    popupTicketBuyText,
    footerAboutLinks,
    footerUserLinks,
    officialLinks,
    footerNavTitleLeft,
    footerNavTitleRight,
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
      <Layout
        navigationLinks={navigationLinks}
        officialLinks={officialLinks}
        footerAboutLinks={footerAboutLinks}
        footerUserLinks={footerUserLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
        footerNavTitleLeft={footerNavTitleLeft}
        footerNavTitleRight={footerNavTitleRight}
      >
        {blocks.map((block) => (
          <BlockRenderer
            key={block.id}
            block={block}
            phone={phone}
            email={email}
          />
        ))}
      </Layout>
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
  // if (process.env.APP_ENV === `test`) {
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
