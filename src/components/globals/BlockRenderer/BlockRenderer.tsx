import { ContactZooPreviewComponentProps } from '@/src/common/types';
import { ContactZooPreview } from "@/src/components/home-page/ContactZooPreview/ContactZooPreview";

enum BlockTypes {
  CONTACT_ZOO_PREVIEW = `home.contact-zoo-preview`,
}

export const BlockRenderer = ({
  block,
}: {
  block: ContactZooPreviewComponentProps
}) => {
  switch (block.__component) {
    case BlockTypes.CONTACT_ZOO_PREVIEW:
      return (
        <ContactZooPreview
          title={block.title}
          description={block.description}
          largeImage={block.largeImage}
          smallImage={block.smallImage}
        />
      );
    default:
      return null;
  }
};
