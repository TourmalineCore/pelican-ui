import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { Posts } from '../components/Posts/Posts';

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
      <Posts />
    </>
  );
}
