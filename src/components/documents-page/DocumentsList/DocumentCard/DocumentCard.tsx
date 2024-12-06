import { Accordion } from "@/src/components/globals/Accordion/Accordion";
import Link from "next/link";
import iconChevronBlack from "@/public/images/svg/icon-chevron-black.svg";
import { IconOpenDocument } from "./IconOpenDocument/IconOpenDocument";

export function DocumentCard({
  className,
  date,
  showDate,
  title,
  subtitle,
  description,
  files,
}: {
  className: string,
  date: string,
  showDate: boolean,
  title: string,
  subtitle: string | null,
  description: string | null,
  files: string[],
}) {
  return (
    <li className={`${className} document-card`}>
      <div className="document-card__header">
        <div className="document-card__info">
          {showDate ? (<span className="document-card__date">{date}</span>) : ``}
          <h2 className="document-card__title">{title}</h2>
        </div>
        {files.length === 1 ? (
          <Link href="#">
            <span className="document-card__open-document  document-card__open-document--primary">
              <IconOpenDocument className="documents-card__icon-open-document" />
            </span>
          </Link>
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
                      key={file}
                    >
                      <Link
                        className="document-card__link"
                        href="#"
                      >
                        {file}
                        <span className="document-card__open-document document-card__open-document--secondary">
                          <IconOpenDocument className="documents-card__icon-open-document" />
                        </span>
                      </Link>
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
