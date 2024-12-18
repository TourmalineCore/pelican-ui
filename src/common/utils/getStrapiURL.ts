export function getStrapiURL() {
  return process.env.API_URL || `http://localhost:1337/api`;
}
