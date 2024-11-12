import Head from 'next/head';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps, HomePageProps } from '../common/types';
import { EMAIL, NAVIGATION_LINKS, PHONE, POPUP_TICKET_BUY_TEXT } from '../common/mocks/globals-mock';
import { BlockRenderer } from '../components/globals/BlockRenderer/BlockRenderer';
import { getMockPageData } from '../common/utils/getMockPageData';

type UniversalProps = {
  globalData: GlobalComponentProps,
  pageData: HomePageProps,
};

export default function UniversalPage({
  globalData,
  pageData,
}: UniversalProps) {
  // TODO: Редирект на 404 в будущем будет внутри getServerSideProps
  if (!pageData) {
    return <div>404</div>;
  }

  const {
    navigationLinks, email, phone, popupTicketBuyText,
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
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
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
      globalData: {
        popupTicketBuyText: POPUP_TICKET_BUY_TEXT,
        email: EMAIL,
        phone: PHONE,
        navigationLinks: NAVIGATION_LINKS,
      },
      pageData: getMockPageData({
        slug: query.slug,
      }),
    },
  };
}
