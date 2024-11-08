import Head from 'next/head';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps } from '../common/types';
import {
  EMAIL,
  FOOTER_ABOUT_LINKS,
  FOOTER_USER_LINKS,
  NAVIGATION_LINKS,
  OFFICIAL_LINKS,
  PHONE,
  POPUP_TICKET_BUY_TEXT,
} from '../common/mocks/globals-mock';

export default function UniversalPage({
  email,
  navigationLinks,
  officialLinks,
  footerAboutLinks,
  footerUserLinks,
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
        officialLinks={officialLinks}
        footerAboutLinks={footerAboutLinks}
        footerUserLinks={footerUserLinks}
        email={email}
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
      email: EMAIL,
      phone: PHONE,
      navigationLinks: NAVIGATION_LINKS,
      officialLinks: OFFICIAL_LINKS,
      footerUserLinks: FOOTER_USER_LINKS,
      footerAboutLinks: FOOTER_ABOUT_LINKS,
    },
  };
}
