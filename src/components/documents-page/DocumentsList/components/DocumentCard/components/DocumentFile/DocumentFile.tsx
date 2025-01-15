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
  extension: DocumentFileProps['ext'],
}) {
  const numberOfFilesStyle = numberOfFiles === 1 ? `single-document` : `several-documents`;
  return (
    <div className={`${className} document-file`}>
      <Link
        className={`document-file__link document-file__link--${numberOfFilesStyle}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Открыть файл с документом ${name.replace(`${extension}`, ``)} в новой вкладке`}
      >
        {numberOfFiles > 1 && (
          <p className={`document-file__name document-file__name--${numberOfFilesStyle}`}>
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
