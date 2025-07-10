import { HttpStatusCode } from "axios";
import { getStrapiURL } from "./getStrapiURL";

type CustomRequestInit = RequestInit & { isPreview?: boolean; isResponseText?: boolean; };

const getApiFetch = () => {
  const baseUrl = getStrapiURL();

  return async (endpoint: string, options: CustomRequestInit = {}) => {
    const {
      isPreview,
      isResponseText,
      ...restOptions
    } = options;

    const url = `${baseUrl}${endpoint}`;
    const updatedOptions: CustomRequestInit = {
      ...(isPreview && {
        headers: {
          'Cache-Control': `no-cache`,
        },
      }),
      ...restOptions,
    };
    const response = await fetch(url, updatedOptions);

    if (!response.ok && response.status !== HttpStatusCode.NotFound) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status === HttpStatusCode.NotFound) {
      return null;
    }

    if (isResponseText) {
      return response.text();
    }

    return response.json();
  };
};

export const apiFetch = getApiFetch();
