import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
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
