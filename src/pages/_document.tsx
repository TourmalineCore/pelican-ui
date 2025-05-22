/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-danger */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import Script from 'next/script';
import { LoaderContainer, loaderStyles } from '../components/globals/Loader/components/LoaderContainer';
import { gosUslugiScript, yandexId, YMetricScript } from '../common/utils/getScripts';
import { getHash } from '../common/utils/getHash';

class AppDocument extends Document {
  // Get initial props for the custom Document, including the CSP nonce from request headers.
  // We need to create a custom Document to access the incoming HTTP request object (ctx.req),
  // which is not available in other parts of the Next.js rendering process.
  // This is the only place in a Next.js app where we can safely
  // extract request-level data (like CSP nonce) and inject it into the server-rendered HTML.
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = ctx.req?.headers[`x-nonce`] as string | undefined;
    return {
      ...initialProps,
      nonce,
    };
  }

  render() {
    const {
      nonce,
    } = (this.props as any);

    const YMetricHash = getHash(YMetricScript);
    const gosUslugiHash = getHash(gosUslugiScript);

    return (
      <Html lang="ru">
        <Head nonce={nonce}>
          {/* Expose nonce to client-side JavaScript for use in components */}
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `window.__NONCE__ = ${JSON.stringify(nonce)};`,
            }}
          />

          <style nonce={nonce}>
            {loaderStyles}
          </style>

          <link
            rel="icon"
            type="image/png"
            href="/favicon/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon/favicon.svg"
          />
          <link
            rel="shortcut icon"
            href="/favicon/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="manifest"
            href="/favicon/site.webmanifest"
          />
        </Head>

        <body>
          <div id="static-loader">
            <LoaderContainer nonce={nonce} />

            <style
              type="text/css"
              nonce={nonce}
              dangerouslySetInnerHTML={{
                __html: `
                  html {
                    overflow-y: scroll !important;
                  }
                  body {
                    display: block !important;
                  }
              `,
              }}
            />
          </div>

          <Main />
          <NextScript nonce={nonce} />

          {/* crossOrigin="anonymous" allows loading resources from other
          origins without sending credentials (cookies, etc.) */}
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            nonce={nonce}
            integrity={YMetricHash}
            crossOrigin="anonymous"
            dangerouslySetInnerHTML={{
              __html: YMetricScript,
            }}
          />

          <Script
            id="gosWidgetScript"
            strategy="afterInteractive"
            nonce={nonce}
            integrity={gosUslugiHash}
            crossOrigin="anonymous"
            dangerouslySetInnerHTML={{
              __html: gosUslugiScript,
            }}
          />

          <noscript nonce={nonce}>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${yandexId}`}
                style={{
                  position: `absolute`,
                  left: `-9999px`,
                }}
                alt=""
              />
            </div>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default AppDocument;
