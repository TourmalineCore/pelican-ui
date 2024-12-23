import axios from "axios";
import { getStrapiURL } from "./getStrapiURL";

export const api = axios.create({
  baseURL: getStrapiURL(),
});

api.interceptors.response.use((response) => response.data);
