import Head from 'next/head';
import { Hero } from '@/src/components/globals/Hero/Hero';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps, HeroComponentProps } from '../common/types';
import {
  EMAIL, NAVIGATION_LINKS, PHONE, POPUP_TICKET_BUY_TEXT,
} from '../common/mocks/globals-mock';
import {
  HERO_TITLE, INFO_CARD_DESCRIPTION, INFO_CARD_TITLE, SCHEDULE_TIMETABLES, SCHEDULE_TITLE,
} from '../common/mocks/hero-mocks';

type UniversalProps = GlobalComponentProps & HeroComponentProps;

export default function UniversalPage({
  email,
  navigationLinks,
  title,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
  phone,
  popupTicketBuyText,
}: UniversalProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Главная</title>
      </Head>
      <Layout
        navigationLinks={navigationLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
      >
        <Hero
          title={title}
          scheduleTitle={scheduleTitle}
          scheduleTimetables={scheduleTimetables}
          infoCardTitle={infoCardTitle}
          infoCardDescription={infoCardDescription}
        />
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
      title: HERO_TITLE,
      scheduleTitle: SCHEDULE_TITLE,
      scheduleTimetables: SCHEDULE_TIMETABLES,
      infoCardTitle: INFO_CARD_TITLE,
      infoCardDescription: INFO_CARD_DESCRIPTION,
    },
  };
}
