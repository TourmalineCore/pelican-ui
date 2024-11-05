import axios from 'axios';
import { getStrapiURL } from './getStrapiURL';

export const api = axios.create({
  baseURL: getStrapiURL(
    process.env.NODE_ENV === `production`
      ? `/cms/api`
      : `/api`,
  ),
});
