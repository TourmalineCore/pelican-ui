import Head from 'next/head';
import { Layout } from '../components/globals/Layout/Layout';

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Главная</title>
      </Head>
      <Layout>
        Hello, World!
      </Layout>
      {/* <Posts /> */}
    </>
  );
}
