import Head from 'next/head';
import { GlobalComponentProps } from '@/src/common/types';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { Layout } from '@/src/components/globals/Layout/Layout';
import { DOCUMENTS_PAGE, DocumentsPageProps } from '@/src/common/mocks/documents-page-mock/documents-page-mock';

export default function DocumentsPage({
  globalData,
  pageData,
}: {
  globalData: GlobalComponentProps,
  pageData: DocumentsPageProps,
}) {
  if (!pageData || !globalData) {
    return <NotFound />;
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
    ticketsPopupRefundReasons,
  } = globalData;

  const {
    title,
    documentsTitle,
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
        ticketsPopupRefundReasons={ticketsPopupRefundReasons}
      >
        <DocumentsCategoriesList />
      </Layout>
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    pageSize: number
  }
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
      pageData: DOCUMENTS_PAGE,
    },
  };
}
