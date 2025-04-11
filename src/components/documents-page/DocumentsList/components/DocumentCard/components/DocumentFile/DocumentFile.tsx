import Link from "next/link";
import { DocumentFileProps } from "@/src/common/types";
import { IconOpenDocument } from "../IconOpenDocument/IconOpenDocument";

export function DocumentFile({
  className,
  numberOfFiles,
  buttonTheme,
  name,
  url,
  extension,
} : {
  className: string;
  numberOfFiles: number;
  buttonTheme: "primary" | "secondary";
  name: DocumentFileProps['name'];
  url: DocumentFileProps['url'];
  extension: DocumentFileProps['ext'];
}) {
  const numberOfFilesStyle = numberOfFiles === 1 ? `single-document` : `several-documents`;
  const replaceDocumentName = name.replace(`${extension}`, ``);
  return (
    <div className={`${className} document-file`}>
      <Link
        className={`document-file__link document-file__link--${numberOfFilesStyle}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Открыть файл с документом ${replaceDocumentName} в новой вкладке`}
        data-testid="document-file-link"
      >
        {numberOfFiles > 1 && (
          <p className={`document-file__name document-file__name--${numberOfFilesStyle}`}>
            {replaceDocumentName}
          </p>
        )}
        <span className={`document-file__open-document document-file__open-document--${buttonTheme}`}>
          <IconOpenDocument className="document-file__icon-open-document" />
        </span>
      </Link>
    </div>
  );
}
