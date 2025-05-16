/** @type {import('next').NextConfig} */

const nextConfig = {
  // https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // 1. CORS headers:

          // Indicates whether the browser should include credentials, such as cookies or HTTP authentication, in the cross-origin request
          {
            key: "Access-Control-Allow-Credentials",
            value: "false",
          },

          // Specifies the origin that has access to the resource
          {
            key: "Access-Control-Allow-Origin",
            value: "https://chelzoo.tech",
          },

          // Indicates how the browser should handle opening new windows and tabs in the context of cross-origin requests
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },


          // 2. Security headers:

          // Prevents the site from being opened in an <iframe> (protection against clickjacking)
          {
            key: 'X-Frame-Options',
            value: "SAMEORIGIN",
          },

          // Prevents MIME-sniffing (e.g., ensuring HTML is not treated as JS)
          {
            key: 'X-Content-Type-Options',
            value: "nosniff",
          },

          // Controls what data goes into the Referer header
          {
            key: 'Referrer-Policy',
            value: "no-referrer",
          },

          // Block access to browser features and APIs
          {
            key: 'Permissions-Policy',
            value: "interest-cohort=(), camera=(), microphone=(), geolocation=(), fullscreen=(), payment=(), usb=(), accelerometer=(), display-capture=(), gyroscope=(), magnetometer=(), midi=(), picture-in-picture=(self), xr-spatial-tracking=()",
          }
        ]
      }
    ]
  },

  async redirects() {
    const documentPaths = [
      '/articles/info/documents',
      '/articles/rekvizity-zooparka',
      '/articles/info/tasks',
      '/articles/info/plans',
      '/articles/info/orders',
      '/articles/info/activities',
      '/articles/info/purchases',
      '/articles/info/trades',
      '/articles/info/reports'
    ];

    const documentRedirects = documentPaths.map((path) => ({
      source: path,
      destination: '/documents',
      permanent: false,
    }));

    return [
      {
        source: '/news/newsitems',
        destination: '/news',
        permanent: false,
      },
      {
        source: '/news/archive',
        destination: '/news',
        permanent: false,
      },
      {
        source: '/articles/rules2022',
        destination: '/visiting-rules',
        permanent: false,
      },
      {
        source: '/services/zoo/lgoty-na-poseshenie-zooparka',
        destination: '/discounts',
        permanent: false,
      },
      {
        source: '/services/zoo/detskij-kontaktnyj-zoopark',
        destination: '/contact-zoo',
        permanent: false,
      },
      {
        source: '/services/zoo',
        destination: '/',
        permanent: false,
      },
      ...documentRedirects
    ]
  },

  reactStrictMode: true,
  output: "standalone",

  env: {
    APP_ENV: process.env.APP_ENV,
  },

  ...(process.env.CDN_ENABLED === 'true' && process.env.CDN_DOMAIN && {
    // https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix
    // asset prefix for JavaScript and CSS files that it loads from /_next/
    assetPrefix: `https://${process.env.CDN_DOMAIN}`
  }),

  // https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports
  experimental: {
    optimizePackageImports: [
      'clsx',
      'dayjs',
      'plyr-react',
      'react-markdown',
      'axios'
    ]
  },

  images: {
    ...(process.env.CDN_ENABLED === 'true' && process.env.CDN_DOMAIN && {
      // https://nextjs.org/docs/app/api-reference/components/image#domains
      domains: [process.env.CDN_DOMAIN],
      path: `https://${process.env.CDN_DOMAIN}/_next/image`
    }),

    unoptimized: process.env.NODE_ENV === 'test',

    // lifetime in seconds for cached optimized images
    // https://nextjs.org/docs/pages/api-reference/components/image#minimumcachettl
    minimumCacheTTL: 86400,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'minio-s3',
      },
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',

        // Todo: need specify production bucket name 
        // pathname: '/bucketName/**',
      },
      ...(process.env.CDN_ENABLED === 'true' && process.env.CDN_DOMAIN ? [
        {
          protocol: 'https',
          hostname: process.env.CDN_DOMAIN,
          pathname: '/_next/**'
        }
      ] : [])
    ]
  }
};

export default nextConfig;
