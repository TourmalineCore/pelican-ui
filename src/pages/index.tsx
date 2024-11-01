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
      {/* <Posts /> */}
    </>
  );
}

export async function getServerSideProps() {
  const res = await api.get(`/navigations`);

  return {
    props: {
      navigations: res.data.data,
    },
  };
}
