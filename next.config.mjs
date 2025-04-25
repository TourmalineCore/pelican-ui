/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/pages/api-reference/config/next-config-js/headers
  // configuring custom HTTP headers
  async headers() {
    return [
      {
        source: "/(.*).(woff|css)",
        // CORS 
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
      {
        source: '/(.*)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=80, must-revalidate',
          }
        ],
      }
    ];
  },

  reactStrictMode: true,
  output: "standalone",

  env: {
    APP_ENV: process.env.APP_ENV,
  },

  ...(process.env.CDN_ENABLED === 'true' && {
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
    ...(process.env.CDN_ENABLED === 'true' && {
      // https://nextjs.org/docs/app/api-reference/components/image#domains
      domains: [process.env.CDN_DOMAIN],
      path: `https://${process.env.CDN_DOMAIN}/_next/image`
    }),

    minimumCacheTTL: 100,
    unoptimized: process.env.NODE_ENV === 'test',
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
      // todo remove for prod
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'https',
        hostname: `https://${process.env.CDN_DOMAIN}/_next/image`
      },
    ]
  }
};

export default nextConfig;
