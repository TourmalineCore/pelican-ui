import Head from 'next/head';
import { BlockRenderer } from '@/src/components/globals/BlockRenderer/BlockRenderer';
import { getMockPageData } from '@/src/common/utils/getMockPageData';
import { Layout } from '../components/globals/Layout/Layout';
import { GlobalComponentProps, HomePageProps } from '../common/types';
import {
  EMAIL,
  FOOTER_ABOUT_LINKS,
  FOOTER_USER_LINKS,
  NAVIGATION_LINKS,
  OFFICIAL_LINKS,
  PHONE,
  POPUP_TICKET_BUY_TEXT,
  FOOTER_NAV_TITLE_LEFT,
  FOOTER_NAV_TITLE_RIGHT,
  TICKETS_POPUP_GENERAL,
  TICKETS_POPUP_SUBSIDIZED,
  TICKETS_POPUP_RULES_IMAGES,
  TICKETS_POPUP_RETURN_REASONS,
} from '../common/mocks/globals-mock';

type UniversalProps = {
  globalData: GlobalComponentProps,
  pageData: HomePageProps,
};

export default function UniversalPage({
  globalData,
  pageData,
}: UniversalProps) {
  // TODO: Редирект на 404 в будущем будет внутри getServerSideProps
  if (!pageData) {
    return <div>404</div>;
  }

  const {
    navigationLinks,
    email,
    phone,
    popupTicketBuyText,
    footerAboutLinks,
    footerUserLinks,
    officialLinks,
    footerNavTitleLeft,
    footerNavTitleRight,
    ticketsPopupGeneral,
    ticketsPopupSubsidized,
    ticketsPopupRulesImages,
    ticketsPopupReturnReasons,
  } = globalData;
  const {
    title, blocks,
  } = pageData;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{title}</title>
      </Head>
      <Layout
        navigationLinks={navigationLinks}
        officialLinks={officialLinks}
        footerAboutLinks={footerAboutLinks}
        footerUserLinks={footerUserLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
        footerNavTitleLeft={footerNavTitleLeft}
        footerNavTitleRight={footerNavTitleRight}
        ticketsPopupGeneral={ticketsPopupGeneral}
        ticketsPopupSubsidized={ticketsPopupSubsidized}
        ticketsPopupRulesImages={ticketsPopupRulesImages}
        ticketsPopupReturnReasons={ticketsPopupReturnReasons}
      >
        {blocks.map((block) => (
          <BlockRenderer
            key={block.id}
            block={block}
            phone={phone}
            email={email}
          />
        ))}
      </Layout>
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    slug: string,
  },
}) {
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
      globalData: {
        popupTicketBuyText: POPUP_TICKET_BUY_TEXT,
        email: EMAIL,
        phone: PHONE,
        navigationLinks: NAVIGATION_LINKS,
        footerAboutLinks: FOOTER_ABOUT_LINKS,
        footerUserLinks: FOOTER_USER_LINKS,
        officialLinks: OFFICIAL_LINKS,
        footerNavTitleLeft: FOOTER_NAV_TITLE_LEFT,
        footerNavTitleRight: FOOTER_NAV_TITLE_RIGHT,
        ticketsPopupGeneral: TICKETS_POPUP_GENERAL,
        ticketsPopupSubsidized: TICKETS_POPUP_SUBSIDIZED,
        ticketsPopupRulesImages: TICKETS_POPUP_RULES_IMAGES,
        ticketsPopupReturnReasons: TICKETS_POPUP_RETURN_REASONS,
      },
      pageData: getMockPageData({
        slug: query.slug,
      }),
    },
  };
}
