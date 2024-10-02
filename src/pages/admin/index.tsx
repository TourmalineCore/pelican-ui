import Head from 'next/head';
import { Layout } from '../../components/Layout/Layout';

export default function AdminPage() {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Admin page</title>
      </Head>
      <Layout>
        Admin page
      </Layout>
    </>
  );
}
