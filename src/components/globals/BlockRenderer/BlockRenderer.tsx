/* eslint-disable @typescript-eslint/indent */
import { AppRoute, BlockTypes } from '@/src/common/enum';
import {
  GlobalComponentProps,
  HeroComponentProps,
  TextAndMediaComponentProps,
  CardsComponentProps,
  MapComponentProps,
  HomeTicketsComponentProps,
  ServicesComponentProps,
  ImageWithButtonGridComponentProps,
  SharedTicketsComponentProps,
  CategoriesComponentProps,
  ArticleComponentProps,
  DiscountsCategoriesComponentProps,
  DiscountsTermsComponentProps,
  VisitingRulesMainComponentProps,
  VisitingRulesWarningsComponentProps,
  VisitingRulesPhotosPolicyComponentProps,
  VisitingRulesEmergencyPhonesComponentProps,
} from '@/src/common/types';
import { normalizeSlug } from '@/src/common/utils/normalizeSlug';
import { Cards } from '../Cards/Cards';
import { ImageWithButtonGrid } from '../ImageWithButtonGrid/ImageWithButtonGrid';
import { DiscountsCategories } from '../../discounts-page/DiscountsCategories/DiscountsCategories';
import { DiscountsTerms } from '../../discounts-page/DiscountsTerms/DiscountsTerms';
import { HomepageHero } from '../../home-page/HomepageHero/HomepageHero';
import { HomepageImageWithButtonGrid } from '../../home-page/HomepageImageWithButtonGrid/HomepageImageWithButtonGrid';
import { HomepageTickets } from '../../home-page/HomepageTickets/HomepageTickets';
import { Services } from '../../home-page/Services/Services';
import { VisitingRulesEmergencyPhones } from '../../visiting-rules-page/VisitingRulesEmergencyPhones/VisitingRulesEmergencyPhones';
import { VisitingRulesMain } from '../../visiting-rules-page/VisitingRulesMain/VisitingRulesMain';
import { VisitingRulesPhotosPolicy } from '../../visiting-rules-page/VisitingRulesPhotosPolicy/VisitingRulesPhotosPolicy';
import { VisitingRulesWarnings } from '../../visiting-rules-page/VisitingRulesWarnings/VisitingRulesWarnings';
import { Article } from '../Article/Article';
import { Categories } from '../Categories/Categories';
import { Hero } from '../Hero/Hero';
import { TextAndMedia } from '../TextAndMedia/TextAndMedia';
import { Tickets } from '../Tickets/Tickets';
import { Map } from '../../home-page/Map/Map';

type Block = HeroComponentProps
  | SharedTicketsComponentProps
  | TextAndMediaComponentProps
  | CardsComponentProps
  | ServicesComponentProps
  | ImageWithButtonGridComponentProps
  | MapComponentProps
  | HomeTicketsComponentProps
  | CategoriesComponentProps
  | DiscountsTermsComponentProps
  | DiscountsCategoriesComponentProps
  | ArticleComponentProps
  | VisitingRulesMainComponentProps
  | VisitingRulesWarningsComponentProps
  | VisitingRulesPhotosPolicyComponentProps
  | VisitingRulesEmergencyPhonesComponentProps;

export const BlockRenderer = ({
  slug,
  block,
  phone,
}: {
  slug: string;
  block: Block;
  phone: GlobalComponentProps['phone'];
}) => {
  const normalizedSlug = normalizeSlug({
    slug,
  });

  if (block.__component === BlockTypes.SHARED_HERO && normalizedSlug === AppRoute.HOME) {
    return (
      <HomepageHero
        title={block.title}
        image={block.image}
        scheduleTitle={block.scheduleTitle}
        scheduleTimetables={block.scheduleTimetables}
        infoCardTitle={block.infoCardTitle}
        infoCardDescription={block.infoCardDescription}
        phone={phone}
      />
    );
  }

  if (block.__component === BlockTypes.SHARED_HERO && normalizedSlug !== AppRoute.HOME) {
    return (
      <Hero
        title={block.title}
        image={block.image}
        scheduleTitle={block.scheduleTitle}
        scheduleTimetables={block.scheduleTimetables}
        infoCardTitle={block.infoCardTitle}
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

  // eslint-disable-next-line max-len
  if (block.__component === BlockTypes.SHARED_IMAGE_WITH_BUTTON_GRID && normalizedSlug === AppRoute.HOME) {
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
        date={block.date}
        innerContent={block.innerContent}
        isFirstBlock={block.isFirstBlock}
        isLastBlock={block.isLastBlock}
      />
    );
  }

  if (block.__component === BlockTypes.DISCOUNTS_TERMS) {
    return (
      <DiscountsTerms
        title={block.title}
        subtitle={block.subtitle}
        rulesCards={block.rulesCards}
      />
    );
  }

  if (block.__component === BlockTypes.DISCOUNTS_CATEGORIES) {
    return (
      <DiscountsCategories
        title={block.title}
        categoriesCards={block.categoriesCards}
        remark={block.remark}
      />
    );
  }

  if (block.__component === BlockTypes.VISITING_RULES_MAIN) {
    return (
      <VisitingRulesMain
        title={block.title}
        link={block.link}
        description={block.description}
        cardsTitle={block.cardsTitle}
        cards={block.cards}
      />
    );
  }

  if (block.__component === BlockTypes.VISITING_RULES_WARNINGS) {
    return (
      <VisitingRulesWarnings
        cards={block.cards}
      />
    );
  }

  if (block.__component === BlockTypes.VISITING_RULES_PHOTOS_POLICY) {
    return (
      <VisitingRulesPhotosPolicy
        cardsTitle={block.cardsTitle}
        cards={block.cards}
      />
    );
  }

  if (block.__component === BlockTypes.VISITING_RULES_EMERGENCY_PHONES) {
    return (
      <VisitingRulesEmergencyPhones
        cardsTitle={block.cardsTitle}
        cards={block.cards}
      />
    );
  }

  return null;
};
