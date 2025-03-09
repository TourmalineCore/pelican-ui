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
  MOCK_POPUP_TICKET_BUY_TEXT,
  MOCK_EMAIL,
  MOCK_PHONE,
  MOCK_NAVIGATION_LINKS,
  MOCK_FOOTER_ABOUT_LINKS,
  MOCK_FOOTER_USER_LINKS,
  MOCK_OFFICIAL_LINKS,
  MOCK_FOOTER_NAV_TITLE_LEFT,
  MOCK_FOOTER_NAV_TITLE_RIGHT,
  MOCK_TICKETS_POPUP,
} from '../common/mocks/globals-mock';
import { TicketPopupProvider } from '../common/providers/TicketPopupProvider';
import { getGlobalData } from '../common/utils/getGlobalData';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Regular.woff',
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
    query,
  } = useRouter();

  useEffect(() => {
    if (!query?.pageSize) {
      document.body.scroll({
        top: 0,
      });
    }
  }, [pathname, query]);

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
    footerAboutLinks,
    footerUserLinks,
    officialLinks,
    footerNavTitleLeft,
    footerNavTitleRight,
    ticketsPopup,
  } = pageProps.globalData;

  return (
    <WindowWidthProvider>
      <TicketPopupProvider>
        <div className={inter.variable}>
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
            ticketsPopup={ticketsPopup}
          >
            <Component {...pageProps} />
          </Layout>
        </div>
      </TicketPopupProvider>
    </WindowWidthProvider>
  );
}

App.getInitialProps = async () => {
  if (process.env.APP_ENV === `static`) {
    return {
      pageProps: {
        globalData: {
          popupTicketBuyText: MOCK_POPUP_TICKET_BUY_TEXT,
          email: MOCK_EMAIL,
          phone: MOCK_PHONE,
          navigationLinks: MOCK_NAVIGATION_LINKS,
          footerAboutLinks: MOCK_FOOTER_ABOUT_LINKS,
          footerUserLinks: MOCK_FOOTER_USER_LINKS,
          officialLinks: MOCK_OFFICIAL_LINKS,
          footerNavTitleLeft: MOCK_FOOTER_NAV_TITLE_LEFT,
          footerNavTitleRight: MOCK_FOOTER_NAV_TITLE_RIGHT,
          ticketsPopup: MOCK_TICKETS_POPUP,
        },
      },
    };
  }

  try {
    const globalResponse = await getGlobalData();

    return {
      pageProps: {
        globalData: {
          popupTicketBuyText: MOCK_POPUP_TICKET_BUY_TEXT,
          email: MOCK_EMAIL,
          phone: MOCK_PHONE,
          navigationLinks: MOCK_NAVIGATION_LINKS,
          footerAboutLinks: MOCK_FOOTER_ABOUT_LINKS,
          footerUserLinks: MOCK_FOOTER_USER_LINKS,
          officialLinks: MOCK_OFFICIAL_LINKS,
          footerNavTitleLeft: MOCK_FOOTER_NAV_TITLE_LEFT,
          footerNavTitleRight: MOCK_FOOTER_NAV_TITLE_RIGHT,
          ...globalResponse,
        },
      },
    };
  } catch {
    return {
      pageProps: {
        globalData: null,
      },
    };
  }
};
