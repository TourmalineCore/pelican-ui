export enum AppRoute {
  HOME = `/`,
  NEWS = `/news`,
  DOCUMENTS = `/documents`,
  CONTACT_ZOO = `/contact-zoo`,
  INTERNAL_TEST_PAGE = `/internal-test-page`,
  DISCOUNTS = `/discounts`,
  VISITING_RULES = `/visiting-rules`,
  COMPONENTS = `/components`,
}

export enum Breakpoint {
  MOBILE = 375,
  TABLET = 768,
  TABLET_XL = 1024,
  DESKTOP = 1366,
  DESKTOP_XL = 1920,
}

export enum BreakpointName {
  MOBILE = `mobile`,
  TABLET = `tablet`,
  TABLET_XL = `tablet-xl`,
  DESKTOP = `desktop`,
  DESKTOP_XL = `desktop-xl`,
}

export enum BlockTypes {
  SHARED_HERO = `shared.hero`,
  SHARED_CARDS = `shared.cards`,
  SHARED_TICKETS = `shared.tickets`,
  SHARED_IMAGE_WITH_BUTTON_GRID = `shared.image-with-button-grid`,
  SHARED_TEXT_AND_MEDIA = `shared.text-and-media`,
  SHARED_CATEGORIES = `shared.categories`,
  SHARED_ARTICLE = `shared.article`,

  HOME_SERVICES = `home.services`,
  HOME_TICKETS = `home.tickets`,
  HOME_MAP = `home.map-card`,

  DISCOUNTS_TERMS = `discounts.terms`,
  DISCOUNTS_CATEGORIES = `discounts.categories`,

  VISITING_RULES_MAIN = `visiting-rules.visiting-rules-main`,
  VISITING_RULES_WARNINGS = `visiting-rules.warnings`,
  VISITING_RULES_PHOTOS_POLICY = `visiting-rules.photos-policy`,
  VISITING_RULES_EMERGENCY_PHONES = `visiting-rules.emergency-phones`,
}

export enum ComponentName {
  DISCOUNTS_CATEGORIES = `discounts-categories`,
  DISCOUNTS_TERMS = `discounts-terms`,
  DOCUMENTS_LIST = `documents-list`,
  ARTICLE = `article`,
  CARDS = `cards`,
  CATEGORIES = `categories`,
  COOKIE = `cookie`,
  CUSTOM_ERROR = `custom-error`,
  FOOTER = `footer`,
  HEADER = `header`,
  HEADER_POPUP = `header-popup`,
  TICKET_POPUP = `ticket-popup`,
  HERO = `hero`,
  IMAGE_WITH_BUTTON_GRID = `image-with-button-grid`,
  SKIP_LINK = `skip-link`,
  TEXT_AND_MEDIA = `text-and-media`,
  TICKETS = `tickets`,
  HOME_PAGE_HERO = `home-page-hero`,
  HOME_IMAGE_WITH_BUTTON_GRID = `home-image-with-button-grid`,
  HOME_TICKETS = `home-tickets`,
  HOME_MAP = `home-map`,
  HOME_SERVICES = `home-services`,
  NEWS_SLIDER = `news-slider`,
  NEWS_LIST = `news-list`,
  VISITING_RULES_EMERGENCY_PHONES = `visiting-rules-emergency-phones`,
  VISITING_RULES_MAIN = `visiting-rules-main`,
  VISITING_RULES_PHOTOS_POLICY = `visiting-rules-photo-policy`,
  VISITING_RULES_WARNING = `visiting-rules-warning`,
}
