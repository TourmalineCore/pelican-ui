// https://gitnation.com/contents/content-security-policy-with-nextjs-leveling-up-your-websites-security/video
// https://nextjs.org/docs/app/guides/content-security-policy

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isDev = process.env.NODE_ENV !== `production`;
  const nonce = Buffer.from(crypto.randomUUID())
    .toString(`base64`);

  const cspHeader = `
    default-src 'none';
    script-src 'self' ${isDev ? `'unsafe-eval'` : `'strict-dynamic' 'nonce-${nonce}'`} https://mc.yandex.ru https://pos.gosuslugi.ru 'unsafe-inline';
    style-src 'self' ${isDev ? `'unsafe-eval' 'unsafe-inline'` : `'strict-dynamic' 'nonce-${nonce}'`};
    img-src 'self' https://pos.gosuslugi.ru https://cdn.chelzoo.tech;
    font-src 'self' https://cdn.chelzoo.tech;
    media-src 'self' https://storage.yandexcloud.net;
    frame-src https://pos.gosuslugi.ru;
    connect-src 'self' https://cdn.chelzoo.tech;
    manifest-src 'self';
    base-uri 'none';
    frame-ancestors 'none';
    form-action 'none';
    upgrade-insecure-requests;
  `;

  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ` `)
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(`x-nonce`, nonce);

  requestHeaders.set(
    `Content-Security-Policy`,
    contentSecurityPolicyHeaderValue,
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    `Content-Security-Policy`,
    contentSecurityPolicyHeaderValue,
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: `/((?!api|_next/static|_next/image|favicon.ico).*)`,
      missing: [
        {
          type: `header`,
          key: `next-router-prefetch`,
        },
        {
          type: `header`,
          key: `purpose`,
          value: `prefetch`,
        },
      ],
    },
  ],
};
