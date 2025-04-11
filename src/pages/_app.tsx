/* eslint-disable @typescript-eslint/quotes */
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../components/globals/Layout/Layout';
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
import { Loading } from '../components/globals/Loader/Loader';

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

const isMetricsEnabled = process.env.NEXT_PUBLIC_METRICS_ENABLED === 'true';

const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export default function App({
  Component,
  pageProps,
  isPreview,
}: AppProps & {
  isPreview: boolean;
}) {
  const {
    pathname,
    query,
  } = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (document.cookie.includes('cookieAccept=true') && typeof window !== 'undefined' && isMetricsEnabled) {
        window.ym(Number(yandexId), 'hit', url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  // ToDo: check warning
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  useEffect(() => {
    if (!query?.pageSize) {
      document.body.scroll({
        top: 0,
      });
    }
  }, [pathname, query]);

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
          <Loading />
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
            isPreview={isPreview}
          >
            <Component {...pageProps} />
          </Layout>
        </div>
      </TicketPopupProvider>
    </WindowWidthProvider>
  );
}

App.getInitialProps = async ({
  // eslint-disable-next-line @typescript-eslint/no-shadow
  router,
}: {
  router: {
    isPreview: boolean
  }
}) => {
  const globalMock = {
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
  };

  if (process.env.APP_ENV === `static`) {
    return {
      pageProps: {
        globalData: {
          ...globalMock,
        },
      },
    };
  }

  try {
    const globalResponse = await getGlobalData({
      isPreview: router.isPreview,
    });

    return {
      isPreview: router.isPreview,
      pageProps: {
        globalData: {
          ...globalMock,
          ...globalResponse,
        },
      },
    };
  } catch {
    return {
      isPreview: router.isPreview,
      pageProps: {
        globalData: {
          ...globalMock,
          ticketsPopup: {},
        },
      },
    };
  }
};
