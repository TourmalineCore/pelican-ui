import Link from "next/link";
import { DocumentFileProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { IconOpenDocument } from "../IconOpenDocument/IconOpenDocument";

export function DocumentFile({
  className,
  buttonTheme,
  name,
  url,
  extension,
} : {
  className: string,
  buttonTheme: "primary" | "secondary",
  name?: DocumentFileProps['name'],
  url: DocumentFileProps['url'],
  extension: DocumentFileProps['extension'],
}) {
  return (
    <div className="document-file">
      <p className="document-file__name">
        {name?.replace(`${extension}`, ``)}
      </p>
      <Link
        className={`${className} document-file__link`}
        href={url}
      >
        <span className={`document-file__open-document document-file__open-document--${buttonTheme}`}>
          <IconOpenDocument className="document-file__icon-open-document" />
        </span>
      </Link>
    </div>
  );
}
