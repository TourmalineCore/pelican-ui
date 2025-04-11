/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  env: {
    APP_ENV: process.env.APP_ENV,
  },

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
      {
        protocol: 'https',
        hostname: '**'
      },
    ]
  }
};

export default nextConfig;
