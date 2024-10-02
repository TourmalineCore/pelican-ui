import Head from 'next/head';
import { Layout } from '../../components/Layout/Layout';

export default function ApiPage() {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Api page</title>
      </Head>
      <Layout>
        Api page
      </Layout>
    </>
  );
}
