/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  env: {
    APP_ENV: process.env.APP_ENV,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'http',
        hostname: 'minio-s3.pelican.local.tourmalinecore.internal',
      },
      {
        protocol: 'https',
        hostname: '**'
      },
    ]
  }
};

export default nextConfig;
