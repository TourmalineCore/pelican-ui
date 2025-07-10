import { ComponentName } from "@/src/common/enum";
import { useSetYearInQuery } from "@/src/common/hooks/useSetYearInQuery";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { MOCK_DOCUMENTS_CATEGORIES } from "@/src/common/mocks/collections-mock/documents-categories-collection-mock";
import { MOCK_DOCUMENTS } from "@/src/common/mocks/collections-mock/documents-collection-mock";
import { MOCK_NEWS } from "@/src/common/mocks/collections-mock/news-collection-mock";
import { MOCK_CONTACT_ZOO_HERO } from "@/src/common/mocks/contact-zoo-page-mock/blocks/hero-mock";
import { MOCK_CONTACT_ZOO_TICKETS } from "@/src/common/mocks/contact-zoo-page-mock/blocks/tickets-mock";
import { MOCK_DISCOUNTS_CATEGORIES } from "@/src/common/mocks/discounts-page-mock/blocks/discounts-categories-mock";
import { MOCK_DISCOUNTS_TERMS } from "@/src/common/mocks/discounts-page-mock/blocks/discounts-terms-mock";
import {
  MOCK_EMAIL,
  MOCK_FOOTER_ABOUT_LINKS,
  MOCK_FOOTER_NAV_TITLE_LEFT,
  MOCK_FOOTER_NAV_TITLE_RIGHT,
  MOCK_FOOTER_USER_LINKS,
  MOCK_NAVIGATION_LINKS,
  MOCK_OFFICIAL_LINKS,
  MOCK_PHONE,
  MOCK_POPUP_TICKET_BUY_TEXT,
  MOCK_TICKETS_POPUP,
} from "@/src/common/mocks/globals-mock";
import { HOME_MOCK_HERO } from "@/src/common/mocks/home-page-mock/blocks/home-hero-mock";
import { MOCK_IMAGE_WITH_BUTTON_GRID } from "@/src/common/mocks/home-page-mock/blocks/image-with-button-grid-mock";
import { MOCK_MAP } from "@/src/common/mocks/home-page-mock/blocks/map-mock";
import { MOCK_SERVICES } from "@/src/common/mocks/home-page-mock/blocks/services-mock";
import { MOCK_TEXT_AND_MEDIA } from "@/src/common/mocks/home-page-mock/blocks/text-and-media-mock";
import { MOCK_HOME_TICKETS } from "@/src/common/mocks/home-page-mock/blocks/tickets-mock";
import { MOCK_SHARED_ARTICLE } from "@/src/common/mocks/components-page-mock/blocks/shared-article";
import { MOCK_NEWS_PAGE } from "@/src/common/mocks/news-page-mock/news-page-mock";
import { MOCK_VISITING_RULES_EMERGENCY_PHONES } from "@/src/common/mocks/visiting-rules-page-mock/blocks/visiting-rules-emergency-phones-mock";
import { MOCK_VISITING_RULES_MAIN } from "@/src/common/mocks/visiting-rules-page-mock/blocks/visiting-rules-main-mock";
import { MOCK_VISITING_RULES_PHOTOS_POLICY } from "@/src/common/mocks/visiting-rules-page-mock/blocks/visiting-rules-photos-policy-mock";
import { MOCK_VISITING_RULES_WARNINGS } from "@/src/common/mocks/visiting-rules-page-mock/blocks/visiting-rules-warnings-mock";
import { DiscountsCategories } from "@/src/components/discounts-page/DiscountsCategories/DiscountsCategories";
import { DiscountsTerms } from "@/src/components/discounts-page/DiscountsTerms/DiscountsTerms";
import { Documents } from "@/src/components/documents-page/Documents/Documents";
import { Article } from "@/src/components/globals/Article/Article";
import { Cards } from "@/src/components/globals/Cards/Cards";
import { Categories } from "@/src/components/globals/Categories/Categories";
import { Cookie } from "@/src/components/globals/Cookie/Cookie";
import { CustomError } from "@/src/components/globals/CustomError/CustomError";
import { Footer } from "@/src/components/globals/Footer/Footer";
import { HeaderPopup } from "@/src/components/globals/Header/components/HeaderPopup/HeaderPopup";
import { Header } from "@/src/components/globals/Header/Header";
import { Hero } from "@/src/components/globals/Hero/Hero";
import { ImageWithButtonGrid } from "@/src/components/globals/ImageWithButtonGrid/ImageWithButtonGrid";
import { SkipLink } from "@/src/components/globals/SkipLink/SkipLink";
import { TextAndMedia } from "@/src/components/globals/TextAndMedia/TextAndMedia";
import { Tickets } from "@/src/components/globals/Tickets/Tickets";
import { TicketsPopup } from "@/src/components/globals/TicketsPopup/TicketsPopup";
import { HomepageHero } from "@/src/components/home-page/HomepageHero/HomepageHero";
import { HomepageImageWithButtonGrid } from "@/src/components/home-page/HomepageImageWithButtonGrid/HomepageImageWithButtonGrid";
import { HomepageTickets } from "@/src/components/home-page/HomepageTickets/HomepageTickets";
import { Map } from "@/src/components/home-page/Map/Map";
import { Services } from "@/src/components/home-page/Services/Services";
import { NewsSlider } from "@/src/components/news-page/NewsArticle/components/NewsSlider/NewsSlider";
import { NewsList } from "@/src/components/news-page/NewsList/NewsList";
import { VisitingRulesEmergencyPhones } from "@/src/components/visiting-rules-page/VisitingRulesEmergencyPhones/VisitingRulesEmergencyPhones";
import { VisitingRulesMain } from "@/src/components/visiting-rules-page/VisitingRulesMain/VisitingRulesMain";
import { VisitingRulesPhotosPolicy } from "@/src/components/visiting-rules-page/VisitingRulesPhotosPolicy/VisitingRulesPhotosPolicy";
import { VisitingRulesWarnings } from "@/src/components/visiting-rules-page/VisitingRulesWarnings/VisitingRulesWarnings";
import { HttpStatusCode } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ComponentsPage() {
  const router = useRouter();
  const {
    query,
  } = router;

  const {
    isTicketPopupActive,
    handleTicketPopupToggle,
  } = useTicketPopup();

  const componentName = query.component?.[0];

  useSetYearInQuery({
    year: query.year as string,
  });

  if (componentName === ComponentName.DISCOUNTS_CATEGORIES) {
    return <DiscountsCategories {...MOCK_DISCOUNTS_CATEGORIES} />;
  }

  if (componentName === ComponentName.DISCOUNTS_TERMS) {
    return <DiscountsTerms {...MOCK_DISCOUNTS_TERMS} />;
  }

  if (componentName === ComponentName.DOCUMENTS_LIST) {
    const queryYear = Number(query?.year);
    return (
      <Documents
        category={MOCK_DOCUMENTS_CATEGORIES[0]}
        currentYear={queryYear || 2025}
        availableYears={[
          2025,
          2024,
          2023,
        ]}
        documents={MOCK_DOCUMENTS.filter(
          (doc) => doc.category.id === MOCK_DOCUMENTS_CATEGORIES[0].id
          && (Number(doc.date.split(`-`)[0]) === (queryYear || 2025)),
        )}
      />
    );
  }

  if (componentName === ComponentName.ARTICLE) {
    return (
      <Article
        title={MOCK_SHARED_ARTICLE.title}
        date={MOCK_SHARED_ARTICLE.date}
        innerContent={MOCK_SHARED_ARTICLE.innerContent}
        isFirstBlock={false}
        isLastBlock={false}
      />
    );
  }

  if (componentName === ComponentName.CARDS) {
    return (
      <Cards
        title="Наши услуги"
        cards={MOCK_SERVICES.cards}
      />
    );
  }

  if (componentName === ComponentName.CATEGORIES) {
    return (
      <Categories
        categoriesTitle={`Информация о\u00A0деятельности МБУК\u00A0«Зоопарк»`}
        categories={MOCK_DOCUMENTS_CATEGORIES}
      />
    );
  }

  if (componentName === ComponentName.COOKIE) {
    return (
      <Cookie isComponentPage />
    );
  }

  if (componentName === ComponentName.CUSTOM_ERROR) {
    return (
      <CustomError
        statusCode={HttpStatusCode.NotFound}
        message="Страница не найдена или не существует"
      />
    );
  }

  if (componentName === ComponentName.FOOTER) {
    return (
      <Footer
        officialLinks={MOCK_OFFICIAL_LINKS}
        footerUserLinks={MOCK_FOOTER_USER_LINKS}
        footerAboutLinks={MOCK_FOOTER_ABOUT_LINKS}
        email={MOCK_EMAIL}
        phone={MOCK_PHONE}
        popupTicketBuyText={MOCK_POPUP_TICKET_BUY_TEXT}
        footerNavTitleLeft={MOCK_FOOTER_NAV_TITLE_LEFT}
        footerNavTitleRight={MOCK_FOOTER_NAV_TITLE_RIGHT}
        footerElementRef={null as any}
      />
    );
  }

  if (componentName === ComponentName.HEADER) {
    return (
      <Header
        navigationLinks={MOCK_NAVIGATION_LINKS}
        email={MOCK_EMAIL}
        phone={MOCK_PHONE}
        popupTicketBuyText={MOCK_POPUP_TICKET_BUY_TEXT}
        overlayElementRef={undefined as any}
        mainElementRef={undefined as any}
        footerElementRef={undefined as any}
        isMobileMenuOpen={false}
        handleMobileMenuToggle={() => {}}
      />
    );
  }

  if (componentName === ComponentName.HEADER_POPUP) {
    return (
      <HeaderPopup
        navigationLinks={MOCK_NAVIGATION_LINKS}
        email={MOCK_EMAIL}
        phone={MOCK_PHONE}
        popupTicketBuyText={MOCK_POPUP_TICKET_BUY_TEXT}
        isActive
        className=""
        handleMobileMenuToggle={() => {}}
      />
    );
  }

  if (componentName === ComponentName.TICKET_POPUP) {
    return (
      <TicketsPopup
        isActive={!isTicketPopupActive}
        handleTicketPopupToggle={handleTicketPopupToggle}
        ticketsPopup={MOCK_TICKETS_POPUP}
        overlayElementRef={null as any}
      />
    );
  }

  if (componentName === ComponentName.HERO) {
    return (
      <Hero
        {...MOCK_CONTACT_ZOO_HERO}
        isInternalPage
      />
    );
  }

  if (componentName === ComponentName.IMAGE_WITH_BUTTON_GRID) {
    return (
      <ImageWithButtonGrid
        {...MOCK_IMAGE_WITH_BUTTON_GRID}
        isInternalPage
      />
    );
  }

  if (componentName === ComponentName.SKIP_LINK) {
    return (
      <SkipLink
        mainElementRef={null as any}
        isComponentPage
      />
    );
  }

  if (componentName === ComponentName.TEXT_AND_MEDIA) {
    return (
      <TextAndMedia {...MOCK_TEXT_AND_MEDIA} />
    );
  }

  if (componentName === ComponentName.TICKETS) {
    return (
      <Tickets {...MOCK_CONTACT_ZOO_TICKETS} />
    );
  }

  if (componentName === ComponentName.HOME_PAGE_HERO) {
    return (
      <HomepageHero
        {...HOME_MOCK_HERO}
        email={MOCK_EMAIL}
      />
    );
  }

  if (componentName === ComponentName.HOME_IMAGE_WITH_BUTTON_GRID) {
    return (
      <HomepageImageWithButtonGrid
        {...MOCK_IMAGE_WITH_BUTTON_GRID}
      />
    );
  }

  if (componentName === ComponentName.HOME_TICKETS) {
    return (
      <HomepageTickets {...MOCK_HOME_TICKETS} />
    );
  }

  if (componentName === ComponentName.HOME_MAP) {
    return (
      <Map {...MOCK_MAP} />
    );
  }

  if (componentName === ComponentName.HOME_SERVICES) {
    return (
      <Services {...MOCK_SERVICES} />
    );
  }

  if (componentName === ComponentName.NEWS_SLIDER) {
    return (
      <NewsSlider news={MOCK_NEWS} />
    );
  }

  if (componentName === ComponentName.NEWS_LIST) {
    return (
      <NewsList
        news={MOCK_NEWS.slice(0, 6)}
        newsTitle={MOCK_NEWS_PAGE.newsTitle}
        pageCount={2}
        isComponentsPage
      />
    );
  }

  if (componentName === ComponentName.VISITING_RULES_EMERGENCY_PHONES) {
    return (
      <VisitingRulesEmergencyPhones {...MOCK_VISITING_RULES_EMERGENCY_PHONES} />
    );
  }

  if (componentName === ComponentName.VISITING_RULES_MAIN) {
    return (
      <VisitingRulesMain {...MOCK_VISITING_RULES_MAIN} />
    );
  }

  if (componentName === ComponentName.VISITING_RULES_PHOTOS_POLICY) {
    return (
      <VisitingRulesPhotosPolicy {...MOCK_VISITING_RULES_PHOTOS_POLICY} />
    );
  }

  if (componentName === ComponentName.VISITING_RULES_WARNING) {
    return (
      <VisitingRulesWarnings {...MOCK_VISITING_RULES_WARNINGS} />
    );
  }

  return (
    <div className="container components-page">
      <ul className="components-page__list">

        <h2 className="components-page__subtitle">Discount page components</h2>
        <li className="components-page__item">
          <Link href={ComponentName.DISCOUNTS_CATEGORIES}>Discounts categories</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.DISCOUNTS_TERMS}>Discounts terms</Link>
        </li>

        <h2 className="components-page__subtitle">Documents page components</h2>
        <li className="components-page__item">
          <Link href={ComponentName.DOCUMENTS_LIST}>Documents list</Link>
        </li>
        <h2 className="components-page__subtitle">Global components</h2>
        <li className="components-page__item">
          <Link href={ComponentName.ARTICLE}>Article</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.CARDS}>Cards</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.CATEGORIES}>Categories</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.COOKIE}>Cookie</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.CUSTOM_ERROR}>Custom Error</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.FOOTER}>Footer</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HEADER}>Header</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HEADER_POPUP}>Header popup</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.TICKET_POPUP}>Ticket popup</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HERO}>Hero</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.IMAGE_WITH_BUTTON_GRID}>Image with button grid</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.SKIP_LINK}>Skip link</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.TEXT_AND_MEDIA}>Text and media</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.TICKETS}>Tickets</Link>
        </li>

        <h2 className="components-page__subtitle">Home page components</h2>
        <li className="components-page__item">
          <Link href={ComponentName.HOME_PAGE_HERO}>Home hero</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HOME_IMAGE_WITH_BUTTON_GRID}>Home image with button grid</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HOME_TICKETS}>Home tickets</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HOME_MAP}>Home map</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HOME_SERVICES}>Home services</Link>
        </li>

        <h2 className="components-page__subtitle">News page components</h2>
        <li className="components-page__item">
          <Link href={ComponentName.NEWS_SLIDER}>News slider</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.NEWS_LIST}>News List</Link>
        </li>

        <h2 className="components-page__subtitle">Visting rules page components</h2>
        <li className="components-page__item">
          <Link
            href={ComponentName.VISITING_RULES_EMERGENCY_PHONES}
          >
            Visting rules emergency phones
          </Link>
        </li>
        <li className="components-page__item">
          <Link
            href={ComponentName.VISITING_RULES_MAIN}
          >
            Visting rules main
          </Link>
        </li>
        <li className="components-page__item">
          <Link
            href={ComponentName.VISITING_RULES_PHOTOS_POLICY}
          >
            Visting rules photo policy
          </Link>
        </li>
        <li className="components-page__item">
          <Link
            href={ComponentName.VISITING_RULES_WARNING}
          >
            Visting rules warning
          </Link>
        </li>

      </ul>
    </div>
  );
}

ComponentsPage.getLayout = (page: React.ReactNode) => page;
