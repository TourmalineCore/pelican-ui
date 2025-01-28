import { DocumentsProps, DocumentsTabsProps } from "@/src/common/types";
import { DocumentCard } from "@/src/components/documents-page/DocumentsList/components/DocumentCard/DocumentCard";
import { useRouter } from "next/router";
import { Tab } from "../../globals/Tab/Tab";

export function DocumentsList({
  categoryTitle,
  availableYears,
  documents,
  currentYear,
}: {
  categoryTitle: string,
  availableYears: DocumentsTabsProps[`availableYears`],
  documents: DocumentsProps[],
  currentYear: number
}) {
  const router = useRouter();

  return (
    <section
      className="documents container"
      data-testid="documents"
    >
      <h1 className="documents__title">{categoryTitle}</h1>
      <ul className="documents__tabs">
        {availableYears.map((year) => (
          <Tab
            key={year}
            className="documents__tab"
            label={year}
            isActive={currentYear === year}
            onClick={() => {
              router.push(
                {
                  query: {
                    ...router.query,
                    year,
                  },
                },
              );
            }}
            ariaLabel={`Отобразить документы за ${year} год`}
          />
        ))}
      </ul>
      <ul
        className="documents__list"
      >
        {documents?.map(({
          id,
          date,
          showDate,
          title,
          subtitle,
          description,
          files,
        }) => (
          <DocumentCard
            className="documents__item"
            key={id}
            date={date}
            showDate={showDate}
            title={title}
            subtitle={subtitle}
            description={description}
            files={files}
          />
        ))}
      </ul>
    </section>
  );
}
