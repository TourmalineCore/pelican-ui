// next-sitemap.js
module.exports = {
  siteUrl: `https://chelzoo.ru`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [`*`],
  robotsTxtOptions: {
    policies: [
      process.env.ENABLE_SEO_INDEXING === `true` ? {
        userAgent: `*`,
        disallow: [`/components`],
      } : {
        userAgent: `*`,
        disallow: `/`,
      },
    ],
    ...(process.env.ENABLE_SEO_INDEXING === `true` && {
      additionalSitemaps: [`https://chelzoo.ru/api/get-sitemap`],
    }),
  },
};
