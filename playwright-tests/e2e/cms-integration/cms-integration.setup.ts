import { test as setup } from "@playwright/test";
import fs from 'fs';
import axios from "axios";
import FormData from 'form-data';
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import { E2E_UI_NAME_PREFIX } from "./helpers/cms-integration-helpers";

setup(`Upload test files`, async () => {
  const formData = new FormData();

  const files = [
    {
      name: `${E2E_UI_NAME_PREFIX}-tiger.png`,
      path: `./playwright-tests/fixtures/[${E2E_UI_NAME_PREFIX}]-tiger.png`,
    },
    {
      name: `${E2E_UI_NAME_PREFIX}-new-document.pdf`,
      path: `./playwright-tests/fixtures/${E2E_UI_NAME_PREFIX}-new-document.pdf`,
    },
  ];

  files.forEach((file) => {
    formData.append(
      `files`,
      fs.createReadStream(file.path),
      {
        filename: file.name,
      },
    );
  });

  await axios.post(
    `${getStrapiURL()}/upload`,
    formData,
    {
      headers: {
        ...formData.getHeaders(),
      },
    },
  );
});
