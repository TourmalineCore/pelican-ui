import Head from 'next/head';
import { Layout } from '../components/globals/Layout/Layout';
import { api } from '../common/utils/HttpClient';

export default function HomePage({
  navigations = [],
}: any) {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Главная</title>
      </Head>
      <Layout navigations={navigations}>
        Hello, World!
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  if (process.env.APP_ENV === `test`) {
    return {
      props: {
        navigations: [
          {
            id: 1,
            name: `Услуги`,
          },
          {
            id: 2,
            name: `Правила посещения`,
          },
          {
            id: 3,
            name: `Адрес`,
          },
          {
            id: 4,
            name: `Льготы`,
          },
          {
            id: 5,
            name: `Документация`,
          },
        ],
      },
    };
  }

  const res = await api.get(`/navigations`);

  return {
    props: {
      navigations: res.data.data,
    },
  };
}
