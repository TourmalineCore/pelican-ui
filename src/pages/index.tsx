import Head from 'next/head';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps } from '../common/types';
import { NAVIGATION_LINKS } from '../common/mocks/header-mocks';

export default function HomePage({
  navigationLinks,
}: GlobalComponentProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Главная</title>
      </Head>
      <Layout navigationLinks={navigationLinks}>
        Hello, World!
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
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
      navigationLinks: NAVIGATION_LINKS,
    },
  };
}
