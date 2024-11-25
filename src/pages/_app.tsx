/* eslint-disable */
import '../styles/index.scss';
import type { AppProps } from 'next/app';

import localFont from "next/font/local";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}
