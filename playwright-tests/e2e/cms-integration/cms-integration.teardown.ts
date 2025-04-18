import { test as teardown } from '@playwright/test';
import { getStrapiURL } from '@/src/common/utils/getStrapiURL';
import axios from 'axios';
import { E2E_UI_NAME_PREFIX } from './helpers/cms-integration-helpers';

const UPLOAD_API_ENDPOINT = `${getStrapiURL()}/upload/files`;

teardown(`Cleanup test files and single types`, async () => {
  const filesResponse = (await axios.get(`${UPLOAD_API_ENDPOINT}`)).data;

  const filesDelete: any[] = filesResponse
    .filter((file: any) => file.name?.startsWith(E2E_UI_NAME_PREFIX));

  if (filesDelete.length) {
    filesDelete.forEach(async ({
      id,
    }) => {
      await axios.delete(`${UPLOAD_API_ENDPOINT}/${id}`);
    });
  }
});
