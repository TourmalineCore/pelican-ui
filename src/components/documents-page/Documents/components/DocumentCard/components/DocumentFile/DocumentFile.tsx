import { DocumentFileProps } from "@/src/common/types";
import { IconOpenDocument } from "../IconOpenDocument/IconOpenDocument";

export function DocumentFile({
  className,
  name,
  url,
} : {
  className: string;
  name: DocumentFileProps['name'];
  url: DocumentFileProps['url'];
}) {
  return (
    <div className={`${className} document-file`}>
      <a
        className="document-file__link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Открыть файл с документом ${name} в новой вкладке`}
        data-testid="document-file-link"
      >
        <p className="document-file__name">
          {name}
        </p>
        <IconOpenDocument
          className="document-file__icon-open-document"
          theme="secondary"
        />
      </a>
    </div>
  );
}
