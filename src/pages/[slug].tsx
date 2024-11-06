import Head from 'next/head';
import { Hero } from '@/src/components/globals/Hero/Hero';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps } from '../common/types';
import { NAVIGATION_LINKS } from '../common/mocks/header-mocks';
import {
  INFO_CARD_TITLE, INFO_CARD_DESCRIPTION, HERO_TITLE, SCHEDULE_TITLE, SCHEDULE_TIMETABLES,
} from '../common/mocks/hero-mocks';

export default function UniversalPage({
  navigationLinks,
  heroTitle,
  scheduleTitle,
  scheduleTimetables,
  infoCardTitle,
  infoCardDescription,
}: GlobalComponentProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Сайт зоопарка" />
        <title>Главная</title>
      </Head>
      <Layout navigationLinks={navigationLinks}>
        <Hero
          heroTitle={heroTitle}
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
      navigationLinks: NAVIGATION_LINKS,
      heroTitle: HERO_TITLE,
      scheduleTitle: SCHEDULE_TITLE,
      scheduleTimetables: SCHEDULE_TIMETABLES,
      infoCardTitle: INFO_CARD_TITLE,
      infoCardDescription: INFO_CARD_DESCRIPTION,
    },
  };
}
