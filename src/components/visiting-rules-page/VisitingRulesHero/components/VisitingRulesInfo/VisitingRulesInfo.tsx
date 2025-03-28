import { VisitingRulesHeroComponentProps } from "@/src/common/types";
import Link from "next/link";

export function VisitingRulesInfo({
  title,
  link,
  description,
}: Pick<VisitingRulesHeroComponentProps, 'title' | 'link' | 'description'>) {
  const {
    path, label,
  } = link;

  return (
    <div className="visiting-rules-info container">
      <div className="visiting-rules-info__header">
        <div className="visiting-rules-info__header--title">
          {title}
        </div>
        <Link
          className="text-link visiting-rules-info__header--link"
          href={path}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </Link>
      </div>
      <div className="visiting-rules-info__description">
        {description}
      </div>
    </div>
  );
}
