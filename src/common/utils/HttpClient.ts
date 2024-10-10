import axios from 'axios';
import { getStrapiURL } from './getStrapiURL';

export const api = axios.create({
  baseURL: getStrapiURL('/admin/api'),
});
