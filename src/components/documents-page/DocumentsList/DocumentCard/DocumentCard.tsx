import Link from "next/link";

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
        {files.length === 1 ? <Link href="#">Icon</Link> : ``}
      </div>
    </li>
  );
}
