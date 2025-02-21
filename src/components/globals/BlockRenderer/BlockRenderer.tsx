/* eslint-disable @typescript-eslint/indent */
import { AppRoute, BlockTypes } from '@/src/common/enum';
import {
  GlobalComponentProps,
  HeroComponentProps,
  TextAndMediaComponentProps,
  CardsComponentProps,
  MapComponentProps,
  TicketsComponentProps,
  NotFoundComponentProps,
  ServicesComponentProps,
  ImageWithButtonGridComponentProps,
  SharedTicketsComponentProps,
  CategoriesComponentProps,
  ArticleComponentProps,
} from '@/src/common/types';
import dynamic from 'next/dynamic';
import { Cards } from '../Cards/Cards';
import { ImageWithButtonGrid } from '../ImageWithButtonGrid/ImageWithButtonGrid';

const Hero = dynamic(
  () => import(`../../globals/Hero/Hero`).then((component) => component.Hero),
  {
    ssr: false,
  },
);

const HomepageHero = dynamic(
  () => import(`../../home-page/HomepageHero/HomepageHero`).then((component) => component.HomepageHero),
  {
    ssr: false,
  },
);

const TextAndMedia = dynamic(
  () => import(`../TextAndMedia/TextAndMedia`).then((component) => component.TextAndMedia),
  {
    ssr: false,
  },
);

const Services = dynamic(
  () => import(`../../home-page/Services/Services`).then((component) => component.Services),
  {
    ssr: false,
  },
);

const HomepageImageWithButtonGrid = dynamic(
  () => import(`../../home-page/HomepageImageWithButtonGrid/HomepageImageWithButtonGrid`).then((component) => component.HomepageImageWithButtonGrid),
  {
    ssr: false,
  },
);

const Map = dynamic(
  () => import(`../../home-page/Map/Map`).then((Component) => Component.Map),
  {
    ssr: false,
  },
);

const HomepageTickets = dynamic(
  () => import(`../../home-page/HomepageTickets/HomepageTickets`).then((component) => component.HomepageTickets),
  {
    ssr: false,
  },
);

const Tickets = dynamic(
  () => import(`../../globals/Tickets/Tickets`).then((component) => component.Tickets),
  {
    ssr: false,
  },
);

const NotFound = dynamic(
  () => import(`../../not-found-page/NotFound/NotFound`).then((component) => component.NotFound),
  {
    ssr: false,
  },
);

const Categories = dynamic(
  () => import(`../Categories/Categories`).then((component) => component.Categories),
  {
    ssr: false,
  },
);

const Article = dynamic(
  () => import(`../Article/Article`).then((component) => component.Article),
  {
    ssr: false,
  },
);

type Block = HeroComponentProps
  | SharedTicketsComponentProps
  | TextAndMediaComponentProps
  | CardsComponentProps
  | ServicesComponentProps
  | ImageWithButtonGridComponentProps
  | MapComponentProps
  | TicketsComponentProps
  | NotFoundComponentProps
  | CategoriesComponentProps
  | ArticleComponentProps;

export const BlockRenderer = ({
  slug,
  block,
  email,
}: {
  slug?: string,
  block: Block,
  email: GlobalComponentProps['email']
}) => {
  if (block.__component === BlockTypes.SHARED_HERO && slug === AppRoute.HOME) {
    return (
      <HomepageHero
        title={block.title}
        image={block.image}
        scheduleTitle={block.scheduleTitle}
        scheduleTimetables={block.scheduleTimetables}
        infoCardTitle={block.infoCardTitle}
        infoCardDescription={block.infoCardDescription}
        email={email}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_HERO && slug !== AppRoute.HOME) {
    return (
      <Hero
        title={block.title}
        image={block.image}
        scheduleTitle={block.scheduleTitle}
        scheduleTimetables={block.scheduleTimetables}
        infoCardDescription={block.infoCardDescription}
        isInternalPage
        isFirstBlock={block.isFirstBlock}
        isLastBlock={block.isLastBlock}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_TEXT_AND_MEDIA) {
    return (
      <TextAndMedia
        title={block.title}
        description={block.description}
        media={block.media}
        contentOrder={block.contentOrder}
        viewFootsteps={block.viewFootsteps}
        isFirstBlock={block.isFirstBlock}
        isLastBlock={block.isLastBlock}
      />
    );
  }

  if (block.__component === BlockTypes.HOME_SERVICES) {
    return (
      <Services
        title={block.title}
        cards={block.cards}
        phone={block.phone}
        email={block.email}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_CARDS) {
    return (
      <Cards
        title={block.title}
        cards={block.cards}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_IMAGE_WITH_BUTTON_GRID && slug === AppRoute.HOME) {
    return (
      <HomepageImageWithButtonGrid
        title={block.title}
        description={block.description}
        largeImage={block.largeImage}
        smallImage={block.smallImage}
        link={block.link}
        label={block.label}
      />
    );
  }

  if (block.__component === BlockTypes.HOME_MAP) {
    return (
      <Map
        title={block.title}
        subtitle={block.subtitle}
        note={block.note}
        image={block.image}
      />
    );
  }

  if (block.__component === BlockTypes.HOME_TICKETS) {
    return (
      <HomepageTickets
        generalTicketsTitle={block.generalTicketsTitle}
        generalTickets={block.generalTickets}
        generalTicketsLink={block.generalTicketsLink}
        subsidizedTicketsTitle={block.subsidizedTicketsTitle}
        subsidizedTicketsDescription={block.subsidizedTicketsDescription}
        subsidizedTickets={block.subsidizedTickets}
        subsidizedTicketsLink={block.subsidizedTicketsLink}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_TICKETS) {
    return (
      <Tickets
        title={block.title}
        description={block.description}
        link={block.link}
        tickets={block.tickets}
        note={block.note}
        isFirstBlock={block.isFirstBlock}
        isLastBlock={block.isLastBlock}
      />
    );
  }

  if (block.__component === BlockTypes.NOT_FOUND) {
    return <NotFound />;
  }

  if (block.__component === BlockTypes.SHARED_IMAGE_WITH_BUTTON_GRID) {
    return (
      <ImageWithButtonGrid
        title={block.title}
        description={block.description}
        largeImage={block.largeImage}
        smallImage={block.smallImage}
        link={block.link}
        label={block.label}
        isFirstBlock={block.isFirstBlock}
        isLastBlock={block.isLastBlock}
        isInternalPage
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_CATEGORIES) {
    return (
      <Categories
        categoriesTitle={block.categoriesTitle}
        categories={block.categories}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_ARTICLE) {
    return (
      <Article
        title={block.title}
        date={block.publishedAt}
        innerContent={block.innerContent}
        isFirstBlock={block.isFirstBlock}
        isLastBlock={block.isLastBlock}
      />
    );
  }

  return null;
};
