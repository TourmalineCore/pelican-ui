import Link from "next/link";
import { DocumentFileProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { IconOpenDocument } from "../IconOpenDocument/IconOpenDocument";

export function DocumentFile({
  className,
  name,
  url,
  ext,
} : {
  className: string,
  name?: DocumentFileProps['name'],
  url: DocumentFileProps['url'],
  ext: DocumentFileProps['ext'],
}) {
  return (
    <Link
      className={`${className} document-card__link`}
      href={url}
    >
      {name?.replace(`${ext}`, ``)}
      <span className="document-card__open-document document-card__open-document--secondary">
        <IconOpenDocument className="documents-card__icon-open-document" />
      </span>
    </Link>
  );
}
