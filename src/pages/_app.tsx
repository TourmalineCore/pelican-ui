import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
