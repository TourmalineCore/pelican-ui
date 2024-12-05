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
          <span className="document-card__date">{date}</span>
          <h2 className="document-card__title">{title}</h2>
        </div>
        {files.length === 1 ? <Link href="#"><span className="document-card__open-document"><IconOpenDocument className="documents-card__icon-open-document" /></span></Link> : ``}
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
              {files.length !== 1 ? (
                <Link href="#">
                  {files}
                  <IconOpenDocument className="documents-card__icon-open-document" />
                </Link>
              ) : ``}
            </div>
          </Accordion>
        ) : ``}
    </li>
  );
}
