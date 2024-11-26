/* eslint-disable @typescript-eslint/quotes */
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import {
  EMAIL,
  FOOTER_ABOUT_LINKS,
  FOOTER_NAV_TITLE_LEFT,
  FOOTER_NAV_TITLE_RIGHT,
  FOOTER_USER_LINKS,
  NAVIGATION_LINKS,
  OFFICIAL_LINKS,
  PHONE,
  POPUP_TICKET_BUY_TEXT,
  TICKETS_POPUP_GENERAL,
  TICKETS_POPUP_REFUND_REASONS,
  TICKETS_POPUP_RULES_IMAGES,
  TICKETS_POPUP_SUBSIDIZED,
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
  Component, pageProps,
}: AppProps) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
    </div>
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
