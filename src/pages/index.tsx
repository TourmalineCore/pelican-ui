import Head from 'next/head';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps } from '../types';

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

// TODO move to other file
const NAVIGATION_LINKS: GlobalComponentProps['navigationLinks'] = [
  {
    id: 1,
    name: `Услуги`,
    link: ``,
  },
  {
    id: 2,
    name: `Правила посещения`,
    link: ``,
  },
  {
    id: 3,
    name: `Адрес`,
    link: ``,
  },
  {
    id: 4,
    name: `Льготы`,
    link: ``,
  },
  {
    id: 5,
    name: `Документация`,
    link: ``,
  },
];

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
