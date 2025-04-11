import { CategoryProps, DocumentsProps, DocumentsTabsProps } from "@/src/common/types";
import { DocumentCard } from "@/src/components/documents-page/DocumentsList/components/DocumentCard/DocumentCard";
import { useRouter } from "next/router";
import { Tab } from "../../globals/Tab/Tab";

export function DocumentsList({
  category,
  availableYears,
  documents,
  currentYear,
}: {
  category: CategoryProps;
  availableYears: DocumentsTabsProps[`availableYears`];
  documents: DocumentsProps[];
  currentYear: number;
}) {
  const router = useRouter();

  return (
    <section
      className="documents container"
      data-testid="documents"
    >
      <h1 className="documents__title">{category.title}</h1>
      {category.hasTabs && (
        <ul className="documents__tabs">
          {availableYears.map((year) => (
            <Tab
              key={year}
              className="documents__tab"
              label={year}
              isActive={currentYear === year}
              onClick={() => {
                router.replace(
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
      )}
      {documents.length > 0 && (
        <ul
          className="documents__list"
        >
          {documents.map(({
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
      )}
    </section>
  );
}
