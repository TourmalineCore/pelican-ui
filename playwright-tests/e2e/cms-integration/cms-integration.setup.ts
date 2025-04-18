import { test as setup } from "@playwright/test";
import fs from 'fs';
import axios from "axios";
import FormData from 'form-data';
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";

setup(`Upload test files`, async () => {
  const formData = new FormData();

  const files = [
    {
      name: `[E2E-SMOKE]-tiger.png`,
      path: `./playwright-tests/fixtures/[E2E-SMOKE]-tiger.png`,
    },
    {
      name: `[E2E-SMOKE]-new-document.pdf`,
      path: `./playwright-tests/fixtures/[E2E-SMOKE]-new-document.pdf`,
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
