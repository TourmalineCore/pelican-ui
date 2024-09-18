import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

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
    </>
  );
}
