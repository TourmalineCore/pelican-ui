import Link from "next/link";
import { DocumentFileProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { IconOpenDocument } from "../IconOpenDocument/IconOpenDocument";

export function DocumentFile({
  className,
  buttonTheme,
  name,
  url,
  ext,
} : {
  className: string,
  buttonTheme: "primary" | "secondary",
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
      <span className={`document-card__open-document document-card__open-document--${buttonTheme}`}>
        <IconOpenDocument className="document-card__icon-open-document" />
      </span>
    </Link>
  );
}
