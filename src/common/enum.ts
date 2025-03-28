export enum AppRoute {
  HOME = `/`,
  NEWS = `/news`,
  DOCUMENTS = `/documents`,
  CONTACT_ZOO = `/contact-zoo`,
  INTERNAL_TEST_PAGE = `/internal-test-page`,
  VISITING_RULES = `/visiting-rules`,
}

export enum Breakpoint {
  MOBILE = 375,
  TABLET = 768,
  TABLET_XL = 1024,
  DESKTOP = 1366,
  DESKTOP_XL = 1920,
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

  NOT_FOUND = `not-found.not-found`,

  VISITING_RULES_HERO = `visiting-rules.visiting-rules-hero`,
  VISITING_RULES_WARNINGS = `visiting-rules.visiting-rules-warnings`,
  VISITING_RULES_PHOTO = `visiting-rules.visiting-rules-photo`,
  VISITING_RULES_EMERGENCY = `visiting-rules.visiting-rules-emergency`,
}
