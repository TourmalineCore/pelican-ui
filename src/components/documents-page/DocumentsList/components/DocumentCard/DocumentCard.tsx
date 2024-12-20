import { Accordion } from "@/src/components/globals/Accordion/Accordion";
import iconChevronBlack from "@/public/images/svg/icon-chevron-black.svg";
import { DocumentsListComponentProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { DocumentFile } from "./components/DocumentFile/DocumentFile";

export function DocumentCard({
  className,
  date,
  showDate,
  title,
  subtitle,
  description,
  files,
}: Omit<DocumentsListComponentProps, 'id' | 'category'> & {
  className: string,
}) {
  const isSingleDocument = files.length === 1;
  return (
    <li className={`${className} document-card`}>
      <div className="document-card__header">
        <div className="document-card__info">
          {showDate && <span className="document-card__date">{date}</span>}
          <h2 className="document-card__title">{title}</h2>
        </div>
        {isSingleDocument && (
          <DocumentFile
            className="document-card__document-file"
            numberOfFiles={files.length}
            buttonTheme="primary"
            name={files[0].name}
            url={files[0].url}
            extension={files[0].extension}
          />
        )}
      </div>
      {(subtitle || !isSingleDocument)
        && (
          <Accordion
            triggerText="Подробнее"
            triggerHideText="Скрыть"
            className="document-card__accordion accordion--document-card"
            icon={iconChevronBlack}
          >
            <div className="document-card__accordion-inner">
              {subtitle && <p className="document-card__subtitle">{subtitle}</p>}
              {description && <p className="document-card__description">{description}</p>}
              {!isSingleDocument
              && (
                <ul className="document-card__list">
                  {(files.map((file) => (
                    <li
                      className="document-card__item"
                      key={file.id}
                    >
                      <DocumentFile
                        className="document-card__document-file"
                        numberOfFiles={files.length}
                        buttonTheme="secondary"
                        name={file.name}
                        url={file.url}
                        extension={file.extension}
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
}
