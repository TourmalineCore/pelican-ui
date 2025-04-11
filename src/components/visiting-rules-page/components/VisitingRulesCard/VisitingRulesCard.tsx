import { VisitingRulesCardProps } from '@/src/common/types';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import IconWarning from "@/public/images/svg/exclamation-mark.svg";

export function VisitingRulesCard({
  label,
  phone,
  iconUrl,
  isWarning,
  isFirst,
  className,
} : VisitingRulesCardProps & {
  isWarning?: boolean;
  isFirst?: boolean;
  className?: string;
}) {
  return (
    <li className={clsx(`visiting-rules-card`, className, {
      'visiting-rules-card--first': isFirst,
    })}
    >

      {iconUrl && (
        <span className="visiting-rules-card__image">
          <Image
            src={iconUrl}
            fill
            alt=""
          />
        </span>
      )}

      {isWarning && (
        <span className="visiting-rules-card__icon">
          <Image
            src={IconWarning}
            fill
            alt=""
          />
        </span>
      )}

      {phone ? (
        <Link
          href={`tel:${phone}`}
          aria-label={`Позвонить по телефону ${phone}`}
          className="visiting-rules-card__link"
          data-testid="visiting-rules-emergency-phone-link"
        >
          {renderCardLabel({
            label,
            phone,
          })}
        </Link>
      ) : renderCardLabel({
        label,
      })}
    </li>
  );
}

function renderCardLabel({
  label,
  phone,
}: Pick<VisitingRulesCardProps, 'label' | 'phone'>) {
  return (
    <>
      {phone && (
        <div className="visiting-rules-card__phone">
          {phone}
        </div>
      )}

      <div className="visiting-rules-card__label">
        {label}
      </div>
    </>
  );
}
