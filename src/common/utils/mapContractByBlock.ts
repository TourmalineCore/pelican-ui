/* eslint-disable no-case-declarations */
import {
  HomeServicesComponent,
  SharedTextAndMediaComponent,
  SharedHeroComponent,
  SharedImageWithButtonGridComponent,
  HomeMapCardComponent,
  HomeTicketsComponent,
  SharedTicketsComponent,
  SharedCardsComponent,
  VisitingRulesVisitingRulesMainComponent,
  VisitingRulesWarningsComponent,
  VisitingRulesPhotosPolicyComponent,
  VisitingRulesEmergencyPhonesComponent,
} from "../api-types";
import { BlockTypes } from "../enum";
import { Block } from "../types";

export function mapContractByBlock({
  block,
}: {
  block: Block;
}) {
  switch (`${block.__component}`) {
    case BlockTypes.SHARED_HERO:
      const sharedHeroBlock = block as SharedHeroComponent;

      return {
        id: crypto.randomUUID(),
        title: sharedHeroBlock.title,
        __component: sharedHeroBlock.__component,
        image: {
          url: sharedHeroBlock.image?.url || ``,
          alternativeText: sharedHeroBlock.image?.alternativeText || ``,
        },
        scheduleTitle: sharedHeroBlock.scheduleCard?.title,
        scheduleTimetables: sharedHeroBlock.scheduleCard?.timetable,
        infoCardTitle: sharedHeroBlock.infoCard?.title,
        infoCardDescription: sharedHeroBlock.infoCard?.description,
      };

    case BlockTypes.SHARED_TEXT_AND_MEDIA:
      const sharedTextAndMediaBlock = block as SharedTextAndMediaComponent;

      return {
        id: crypto.randomUUID(),
        __component: sharedTextAndMediaBlock.__component,
        title: sharedTextAndMediaBlock.title,
        description: sharedTextAndMediaBlock.description,
        media: {
          url: sharedTextAndMediaBlock.media?.url || ``,
          alternativeText: sharedTextAndMediaBlock?.media?.alternativeText || ``,
          mime: sharedTextAndMediaBlock.media?.mime || null,
        },
        contentOrder: sharedTextAndMediaBlock.contentOrder,
        viewFootsteps: sharedTextAndMediaBlock.viewFootsteps,
      };

    case BlockTypes.HOME_SERVICES:
      const servicesBlock = block as HomeServicesComponent;

      return {
        id: crypto.randomUUID(),
        __component: servicesBlock.__component,
        title: servicesBlock.cards?.title,
        phone: servicesBlock.phone,
        email: servicesBlock.email,
        cards: servicesBlock.cards?.cards?.map((card) => ({
          ...card,
          image: {
            url: card.image?.url || ``,
            alternativeText: card.image?.alternativeText || ``,
          },
        })),
      };

    case BlockTypes.SHARED_IMAGE_WITH_BUTTON_GRID:
      const sharedImageWithButtonGrid = block as SharedImageWithButtonGridComponent;

      return {
        id: crypto.randomUUID(),
        __component: sharedImageWithButtonGrid.__component,
        title: sharedImageWithButtonGrid.title,
        description: sharedImageWithButtonGrid.description,
        link: sharedImageWithButtonGrid.button?.link,
        label: sharedImageWithButtonGrid.button?.label,
        largeImage: {
          url: sharedImageWithButtonGrid.largeImage?.url || ``,
          alternativeText: sharedImageWithButtonGrid.largeImage?.alternativeText || ``,
        },
        smallImage: {
          url: sharedImageWithButtonGrid.smallImage?.url || ``,
          alternativeText: sharedImageWithButtonGrid.smallImage?.alternativeText || ``,
        },
      };

    case BlockTypes.HOME_MAP:
      const homeMapCard = block as HomeMapCardComponent;

      return {
        id: crypto.randomUUID(),
        __component: homeMapCard.__component,
        title: homeMapCard.title,
        subtitle: homeMapCard.description,
        note: homeMapCard.note,
        image: {
          url: homeMapCard.image?.url || ``,
          alternativeText: homeMapCard.image?.alternativeText || ``,
        },
      };

    case BlockTypes.HOME_TICKETS:
      const ticketsBlock = block as HomeTicketsComponent;

      return {
        id: crypto.randomUUID(),
        __component: ticketsBlock.__component,
        generalTicketsTitle: ticketsBlock.title,
        generalTickets: ticketsBlock.generalTickets,
        generalTicketsLink: ticketsBlock.generalTicketsLink,
        subsidizedTicketsTitle: ticketsBlock.subsidizedTickets?.title,
        subsidizedTicketsDescription: ticketsBlock.subsidizedTickets?.description,
        subsidizedTickets: ticketsBlock.subsidizedTickets?.ticketsList,
        subsidizedTicketsLink: ticketsBlock.subsidizedTickets?.link,
      };

    case BlockTypes.SHARED_TICKETS:
      const sharedTicketsBlock = block as SharedTicketsComponent;

      return {
        id: crypto.randomUUID(),
        __component: sharedTicketsBlock.__component,
        title: sharedTicketsBlock.title,
        description: sharedTicketsBlock.description,
        tickets: sharedTicketsBlock.subsidizedTickets,
        link: sharedTicketsBlock.link,
        note: sharedTicketsBlock.note,
      };

    case BlockTypes.SHARED_CARDS:
      const sharedCardsBlock = block as (SharedCardsComponent & {
        __component: BlockTypes;
      });

      return {
        id: crypto.randomUUID(),
        __component: sharedCardsBlock.__component,
        title: sharedCardsBlock.title,
        cards: sharedCardsBlock.cards?.map((card) => ({
          ...card,
          image: {
            url: card.image?.url || ``,
            alternativeText: card.image?.alternativeText || ``,
          },
        })),
      };

    case BlockTypes.VISITING_RULES_MAIN:
      const visitingRulesMainBlock = block as VisitingRulesVisitingRulesMainComponent;

      return {
        id: crypto.randomUUID(),
        __component: visitingRulesMainBlock.__component,
        title: visitingRulesMainBlock.title,
        link: {
          label: visitingRulesMainBlock.documentLink?.label,
          path: visitingRulesMainBlock.documentLink?.file?.url || ``,
        },
        description: visitingRulesMainBlock.description,
        cardsTitle: visitingRulesMainBlock.mainRules?.title,
        cards: visitingRulesMainBlock.mainRules?.mainRulesCards?.map((card) => ({
          ...card,
          iconUrl: card.image?.url || ``,
        })),
      };

    case BlockTypes.VISITING_RULES_WARNINGS:
      const visitingRulesWarningsBlock = block as VisitingRulesWarningsComponent;

      return {
        id: crypto.randomUUID(),
        __component: visitingRulesWarningsBlock.__component,
        cards: visitingRulesWarningsBlock.warningsCards,
      };

    case BlockTypes.VISITING_RULES_PHOTOS_POLICY:
      const visitingRulesPhotosPolicyBlock = block as VisitingRulesPhotosPolicyComponent;

      return {
        id: crypto.randomUUID(),
        __component: visitingRulesPhotosPolicyBlock.__component,
        cardsTitle: visitingRulesPhotosPolicyBlock.title,
        cards: visitingRulesPhotosPolicyBlock.photosPolicyCards,
      };

    case BlockTypes.VISITING_RULES_EMERGENCY_PHONES:
      const visitingRulesEmergencyPhonesBlock = block as VisitingRulesEmergencyPhonesComponent;

      return {
        id: crypto.randomUUID(),
        __component: visitingRulesEmergencyPhonesBlock.__component,
        cardsTitle: visitingRulesEmergencyPhonesBlock.title,
        cards: visitingRulesEmergencyPhonesBlock.emergencyPhonesCards,
      };

    default:
      return {};
  }
}
