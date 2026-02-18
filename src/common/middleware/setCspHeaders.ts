export function setCspHeaders({
  headers,
}: {
  headers: Headers;
}): void {
  // Generate a unique random nonce (base64 string) for each request
  const nonce = Buffer.from(crypto.randomUUID())
    .toString(`base64`);

  // Define the CSP header.
  // In development, allow 'unsafe-eval' and 'unsafe-inline' for easier debugging.
  // In production, allow only scripts and styles with the generated nonce and use 'strict-dynamic'.
  // Note: 'unsafe-inline' is ignored by modern browsers when a 'nonce' is present,
  // but it is included for compatibility with older browsers that do not support nonces.
  const csp = `
    default-src 'none';
    script-src 'self' 'strict-dynamic' 'nonce-${nonce}' ${process.env.CSP_SCRIPT_SRC_URLS};
    style-src 'self' 'unsafe-inline' ${process.env.CSP_STYLE_SRC_URLS};
    img-src 'self' ${process.env.CSP_IMG_SRC_URLS};
    font-src 'self' ${process.env.CSP_FONT_SRC_URLS};
    media-src 'self' ${process.env.CSP_MEDIA_SRC_URLS};
    frame-src ${process.env.CSP_FRAME_SRC_URLS};
    connect-src 'self' ${process.env.CSP_CONNECT_SRC_URLS};
    manifest-src 'self';
    base-uri 'none';
    frame-ancestors 'none';
    form-action 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ` `) // Replace two or more spaces with a single space
    .trim(); // Remove leading and trailing whitespace

  // Add nonce and CSP to headers
  headers.set(`x-nonce`, nonce);
  headers.set(`Content-Security-Policy`, csp);
}
