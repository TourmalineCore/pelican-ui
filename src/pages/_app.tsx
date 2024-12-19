/* eslint-disable @typescript-eslint/quotes */
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../components/globals/Layout/Layout';
import { NotFound } from '../components/not-found-page/NotFound/NotFound';
import { WindowWidthProvider } from '../common/providers/WindowWidthProvider';
import {
  POPUP_TICKET_BUY_TEXT,
  TICKET_BUY_LINK,
  EMAIL,
  PHONE,
  NAVIGATION_LINKS,
  FOOTER_ABOUT_LINKS,
  FOOTER_USER_LINKS,
  OFFICIAL_LINKS,
  FOOTER_NAV_TITLE_LEFT,
  FOOTER_NAV_TITLE_RIGHT,
  TICKETS_POPUP_GENERAL,
  TICKETS_POPUP_SUBSIDIZED,
  TICKETS_POPUP_RULES_IMAGES,
  TICKETS_POPUP_REFUND_REASONS,
} from '../common/mocks/globals-mock';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const {
    pathname,
  } = useRouter();

  useEffect(() => {
    document.body.scroll({
      top: 0,
    });
  }, [pathname]);

  if (!pageProps.globalData) {
    return (
      <div className={inter.variable}>
        <NotFound />
      </div>
    );
  }

  const {
    navigationLinks,
    email,
    phone,
    popupTicketBuyText,
    ticketBuyLink,
    footerAboutLinks,
    footerUserLinks,
    officialLinks,
    footerNavTitleLeft,
    footerNavTitleRight,
    ticketsPopupGeneral,
    ticketsPopupSubsidized,
    ticketsPopupRulesImages,
    ticketsPopupRefundReasons,
  } = pageProps.globalData;

  return (
    <WindowWidthProvider>
      <div className={inter.variable}>
        <Layout
          navigationLinks={navigationLinks}
          officialLinks={officialLinks}
          footerAboutLinks={footerAboutLinks}
          footerUserLinks={footerUserLinks}
          email={email}
          phone={phone}
          popupTicketBuyText={popupTicketBuyText}
          ticketBuyLink={ticketBuyLink}
          footerNavTitleLeft={footerNavTitleLeft}
          footerNavTitleRight={footerNavTitleRight}
          ticketsPopupGeneral={ticketsPopupGeneral}
          ticketsPopupSubsidized={ticketsPopupSubsidized}
          ticketsPopupRulesImages={ticketsPopupRulesImages}
          ticketsPopupRefundReasons={ticketsPopupRefundReasons}
        >
          <Component {...pageProps} />
        </Layout>
      </div>
    </WindowWidthProvider>
  );
}

App.getInitialProps = async () => ({
  // TODO Uncomment when the api appears, there will be static data here
  // if (process.env.APP_ENV === `test`) {
  //   return {
  //     props: {
  //       navigationLinks: NAVIGATION_LINKS,
  //     },
  //   };
  // }

  // TODO there will be a request in the Strapi api here
  pageProps: {
    globalData: {
      popupTicketBuyText: POPUP_TICKET_BUY_TEXT,
      ticketBuyLink: TICKET_BUY_LINK,
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
      ticketsPopupRefundReasons: TICKETS_POPUP_REFUND_REASONS,
    },
  },
});
