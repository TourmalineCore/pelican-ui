import Head from 'next/head';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps } from '../common/types';
import {
  MAIL, NAVIGATION_LINKS, PHONE, POPUP_TICKET_BUY_TEXT,
} from '../common/mocks/globals-mock';

export default function UniversalPage({
  mail,
  navigationLinks,
  phone,
  popupTicketBuyText,
}: GlobalComponentProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Главная</title>
      </Head>
      <Layout
        navigationLinks={navigationLinks}
        mail={mail}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
      >
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
      popupTicketBuyText: POPUP_TICKET_BUY_TEXT,
      mail: MAIL,
      phone: PHONE,
      navigationLinks: NAVIGATION_LINKS,
    },
  };
}
