import { MOCK_INTERNAL_TEST_PAGE } from "@/src/common/mocks/internal-test-page-mock/internal-test-page-mock";
import { BlockRenderer } from "@/src/components/globals/BlockRenderer/BlockRenderer";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";

export default function InternalTestPage({
  block,
}: {
  block: any;
}) {
  if (!block) {
    return <NotFound />;
  }

  return (
    <BlockRenderer
      block={block}
      email=""
    />
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    block: string;
  };
}) {
  const testBlock = MOCK_INTERNAL_TEST_PAGE.blocks
    .find((block) => block.__component === query.block);

  return {
    props: {
      block: testBlock || null,
    },
  };
}
