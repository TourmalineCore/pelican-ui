import Link from "next/link";
import { DocumentFileProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { IconOpenDocument } from "../IconOpenDocument/IconOpenDocument";

export function DocumentFile({
  className,
  numberOfFiles,
  buttonTheme,
  name,
  url,
  extension,
} : {
  className: string,
  numberOfFiles: number,
  buttonTheme: "primary" | "secondary",
  name: DocumentFileProps['name'],
  url: DocumentFileProps['url'],
  extension: DocumentFileProps['extension'],
}) {
  return (
    <div className={`${className} document-file`}>
      <Link
        className={`document-file__link--${numberOfFiles === 1 ? `single-document` : `several-documents`}`}
        href={url}
        aria-label={`Открыть файл с документом ${name.replace(`${extension}`, ``)} в новой вкладке`}
      >
        {numberOfFiles > 1 && (
          <p className={`document-file__name--${numberOfFiles === 1 ? `single-document` : `several-documents`}`}>
            {name.replace(`${extension}`, ``)}
          </p>
        )}
        <span className={`document-file__open-document document-file__open-document--${buttonTheme}`}>
          <IconOpenDocument className="document-file__icon-open-document" />
        </span>
      </Link>
    </div>
  );
}
