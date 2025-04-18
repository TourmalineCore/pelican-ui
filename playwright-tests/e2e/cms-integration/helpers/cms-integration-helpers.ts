import { gotoPage } from "@/playwright-tests/global-helpers";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import { Page } from "@playwright/test";
import axios from "axios";

export const E2E_UI_NAME_PREFIX = `[E2E-UI]`;
export const E2E_DRAFT_UI_NAME_PREFIX = `[E2E-DRAFT-UI]`;

export async function getFileIdByName({
  name = `[E2E-SMOKE]-tiger.png`,
}: {
  name?: string;
} = {}) {
  const filesResponse: any[] = (await axios.get(`${getStrapiURL()}/upload/files`)).data;

  return filesResponse.find((file) => file.name === name).id;
}

export async function gotoWithDraftPreviewMode({
  page,
  slug,
}: {
  page: Page;
  slug: string;
}) {
  await gotoPage({
    page,
    url: `/api/preview?secret=secret&slug=${slug}`,
    useNetworkidle: false,
  });
}
