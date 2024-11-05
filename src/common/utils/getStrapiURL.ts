export function getStrapiURL(path = ``) {
  return `${process.env.NODE_ENV === `production`
    ? `http://pelican.local.tourmalinecore.internal`
    : `http://localhost:1337`}${path}`;
}
