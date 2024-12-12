import { DocumentsListComponentProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { DocumentCard } from "@/src/components/documents-page/DocumentsList/components/DocumentCard/DocumentCard";

export function DocumentsList({
  categoryTitle,
  documents,
}: {
  categoryTitle: string,
  documents: DocumentsListComponentProps[],
}) {
  return (
    <section
      className="documents container"
    >
      <h1 className="documents__title">{categoryTitle}</h1>
      <ul
        className="documents__list"
        data-testid="documents-list"
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
