/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  env: {
    APP_ENV: process.env.APP_ENV,
  },

  images: {
    domains: ['127.0.0.1', 'pelican-local-env.hb.ru-msk.vkcloud-storage.ru', 'minio-s3.pelican.local.tourmalinecore.internal']
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
