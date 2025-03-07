/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  env: {
    APP_ENV: process.env.APP_ENV,
  },

  images: {
    unoptimized: process.env.NODE_ENV === 'test',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'http',
        hostname: 'minio-s3.localhost',
      },
      {
        protocol: 'http',
        hostname: '10.244.0.8',
      },
      {
        protocol: 'https',
        hostname: '**'
      },
    ]
  }
};

export default nextConfig;
