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
  return (
    <li className={`${className} document-card`}>
      <div className="document-card__header">
        <div className="document-card__info">
          {showDate ? (<span className="document-card__date">{date}</span>) : ``}
          <h2 className="document-card__title">{title}</h2>
        </div>
        {files.length === 1 ? (
          <DocumentFile
            className="document-card__document-file"
            url={files[0].url}
            ext={files[0].ext}
          />
        ) : ``}
      </div>
      {(subtitle !== null || files.length !== 1)
        ? (
          <Accordion
            triggerText="Подробнее"
            triggerHideText="Скрыть"
            className="document-card__accordion accordion--document-card"
            icon={iconChevronBlack}
          >
            <div className="document-card__accordion-inner">
              <p className="document-card__subtitle">{subtitle}</p>
              <p className="document-card__description">{description}</p>
              <ul className="document-card__list">
                {files.length !== 1 ? (
                  files.map((file) => (
                    <li
                      className="document-card__item"
                      key={file.id}
                    >
                      <DocumentFile
                        className="document-card__document-file"
                        name={file.name}
                        url={file.url}
                        ext={file.ext}
                      />
                    </li>
                  ))

                ) : ``}
              </ul>
            </div>
          </Accordion>
        ) : ``}
    </li>
  );
}
