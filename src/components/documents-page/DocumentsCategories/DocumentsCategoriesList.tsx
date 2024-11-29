import { useWindowWidth } from "@/src/common/hooks/useWindowSize";

export function DocumentsCategoriesList() {
  const windowWidth = useWindowWidth();

  if (windowWidth === 0) {
    return null;
  }

  return (
    <section
      className="documents-categories-list container"
      data-testid="documents-categories-list"
    >
      documents
    </section>
  );
}
