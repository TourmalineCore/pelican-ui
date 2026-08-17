import { Accordion } from "@/src/components/globals/Accordion/Accordion";
import iconChevronBlack from "@/public/images/svg/icon-chevron-black.svg";
import { MarkdownText } from "@/src/components/globals/MarkdownText/MarkdownText";
import dayjs from "dayjs";
import { DocumentsProps } from "@/src/common/types";
import { IconOpenDocument } from "./components/IconOpenDocument/IconOpenDocument";
import { DocumentFile } from "./components/DocumentFile/DocumentFile";

export function DocumentCard({
  className,
  date,
  showDate,
  title,
  subtitle,
  description,
  files,
}: Omit<DocumentsProps, 'id' | 'category'> & {
  className: string;
}) {
  const isSingleDocument = files.length === 1;
  const hasMultipleFiles = files.length > 1;

  return (
    <li
      className={`${className} document-card`}
      data-testid="document-card"
    >
      {renderDocumentCardHeader()}
      {(subtitle || hasMultipleFiles) && (
        <Accordion
          triggerText="Подробнее"
          triggerHideText="Скрыть"
          className="document-card__accordion accordion--document-card"
          icon={iconChevronBlack}
        >
          <div className="document-card__accordion-inner">
            {subtitle && (
              <MarkdownText className="document-card__subtitle">
                {subtitle}
              </MarkdownText>
            )}
            {description && (
              <MarkdownText className="document-card__description">
                {description}
              </MarkdownText>
            )}
            {hasMultipleFiles && (
              <ul className="document-card__list">
                {(files.map((file) => (
                  <li
                    className="document-card__item"
                    key={file.id}
                  >
                    <DocumentFile
                      className="document-card__file"
                      name={file.name.replace(`${file.ext}`, ``)}
                      url={file.url}
                    />
                  </li>
                ))
                )}
              </ul>
            )}
          </div>
        </Accordion>
      )}
    </li>
  );

  function renderDocumentCardHeader() {
    const documentHeaderInfo = (
      <div className="document-card__info">
        {showDate && (
          <span className="document-card__date">
            {
              dayjs(date)
                .format(`DD.MM.YYYY`)
            }
          </span>
        )}
        <h2 className="document-card__title">{title}</h2>
      </div>
    );

    if (isSingleDocument) {
      const firstFile = files[0];
      const replaceDocumentName = firstFile.name.replace(`${firstFile.ext}`, ``);

      return (
        <a
          className="document-card__header-link"
          href={firstFile.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Открыть файл с документом ${replaceDocumentName} в новой вкладке`}
        >
          {documentHeaderInfo}
          <IconOpenDocument
            className="document-card__icon-open-document"
            theme="primary"
          />
        </a>
      );
    }

    return (
      <div className="document-card__header">
        {documentHeaderInfo}
      </div>
    );
  }
}
