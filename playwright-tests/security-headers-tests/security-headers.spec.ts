/* eslint-disable max-len */
import test, { expect, Page } from "@playwright/test";

test.describe(`Check security headers`, () => {
  test(
    `Check main page headers`,
    async ({
      page,
    }) => {
      const response = await page.goto(``);

      const headers = response!.headers();

      await expectSecurityHeaders({
        page,
        headers,
      });
    },
  );

  test(
    `Check JS headers`,
    async ({
      page,
    }) => {
      const headers = await getResponseHeadersByExtension({
        page,
        extension: `.js`,
      });

      await expectSecurityHeaders({
        page,
        headers,
      });
    },
  );

  test(
    `Check image headers`,
    async ({
      page,
    }) => {
      const headers = await getResponseHeadersByExtension({
        page,
        extension: `.svg`,
      });

      await expectSecurityHeaders({
        page,
        headers,
      });
    },
  );

  test(
    `Check font headers`,
    async ({
      page,
    }) => {
      const headers = await getResponseHeadersByExtension({
        page,
        extension: `.woff`,
      });

      await expectSecurityHeaders({
        page,
        headers,
      });
    },
  );
});

async function getResponseHeadersByExtension({
  page,
  extension,
}: {
  page: Page;
  extension: string;
}) {
  const responses: any[] = [];
  page.on(`response`, (res) => responses.push(res));

  await page.goto(``);

  const filtered = responses.filter((res) => res.url()
    .endsWith(extension));

  if (!filtered.length) throw new Error(`No ${extension} response found`);

  return filtered[0].headers();
}

async function expectSecurityHeaders({
  page,
  headers,
}: {
  page: Page;
  headers: Record<string, string>;
}) {
  // 1. Expect CORS headers
  expect(headers[`access-control-allow-credentials`])
    .toBe(`false`);

  expect(headers[`access-control-allow-origin`])
    .toBe(`http://localhost:3000`);

  expect(headers[`cross-origin-opener-policy`])
    .toBe(`same-origin`);

  // 2. Expect security headers
  expect(headers[`x-frame-options`])
    .toBe(`SAMEORIGIN`);

  expect(headers[`x-content-type-options`])
    .toBe(`nosniff`);

  expect(headers[`referrer-policy`])
    .toBe(`no-referrer`);

  expect(headers[`permissions-policy`])
    .toBe(`interest-cohort=(), camera=(), microphone=(), geolocation=(), fullscreen=(), payment=(), usb=(), accelerometer=(), display-capture=(), gyroscope=(), magnetometer=(), midi=(), picture-in-picture=(self), xr-spatial-tracking=()`);

  // 3. Expect CSP headers if exist
  if (headers[`content-security-policy`]) {
    const nonce = await page.evaluate(() => (window as any).__NONCE__);

    expect(headers[`content-security-policy`])
      .toBe(`default-src 'none'; script-src 'self' 'unsafe-inline' 'strict-dynamic' 'nonce-${nonce}' https://mc.yandex.ru https://pos.gosuslugi.ru; style-src 'self' 'strict-dynamic' 'nonce-${nonce}' https://cdn.chelzoo.tech; img-src 'self' https://pos.gosuslugi.ru https://cdn.chelzoo.tech; font-src 'self' https://cdn.chelzoo.tech; media-src 'self' https://storage.yandexcloud.net; frame-src https://pos.gosuslugi.ru; connect-src 'self' https://cdn.chelzoo.tech; manifest-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'; upgrade-insecure-requests;`);
  }
}
