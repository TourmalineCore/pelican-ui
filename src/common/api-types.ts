/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  data?: object | object[] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}

export interface ContactZooRequest {
  data: {
    blocks?: BaseNull &
      (
        | BaseNullComponentMapping<"shared.hero", SharedHeroComponent>
        | BaseNullComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | BaseNullComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | BaseNullComponentMapping<"shared.tickets", SharedTicketsComponent>
        | BaseNullComponentMapping<"shared.cards", SharedCardsComponent>
      );
    seo?: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface ContactZooListResponse {
  data?: ContactZoo[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ContactZoo {
  id?: number;
  documentId?: string;
  blocks?: AbstractNull &
    (
      | AbstractNullComponentMapping<"shared.hero", SharedHeroComponent>
      | AbstractNullComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
      | AbstractNullComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
      | AbstractNullComponentMapping<"shared.tickets", SharedTicketsComponent>
      | AbstractNullComponentMapping<"shared.cards", SharedCardsComponent>
    );
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    blocks?: DiscriminatorNull &
      (
        | DiscriminatorNullComponentMapping<"shared.hero", SharedHeroComponent>
        | DiscriminatorNullComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | DiscriminatorNullComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | DiscriminatorNullComponentMapping<"shared.tickets", SharedTicketsComponent>
        | DiscriminatorNullComponentMapping<"shared.cards", SharedCardsComponent>
      );
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface ContactZooResponse {
  data?: ContactZoo;
  meta?: object;
}

export interface HeroInfoCardComponent {
  id?: number;
  title?: string;
  description?: string;
}

export interface ScheduleCardTimetableComponent {
  id?: number;
  days?: string;
  time?: string;
  ticketsOfficeTime?: string;
}

export interface HeroScheduleCardComponent {
  id?: number;
  title?: string;
  timetable?: ScheduleCardTimetableComponent[];
}

export interface SharedHeroComponent {
  id?: number;
  __component?: "shared.hero";
  title?: string;
  image?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  infoCard?: HeroInfoCardComponent;
  scheduleCard?: HeroScheduleCardComponent;
}

export interface SharedTextAndMediaComponent {
  id?: number;
  __component?: "shared.text-and-media";
  description?: string;
  media?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  contentOrder?: "Текст слева" | "Текст справа";
  viewFootsteps?: boolean;
  title?: string;
}

export interface ButtonButtonComponent {
  id?: number;
  label?: string;
  link?: string;
}

export interface SharedImageWithButtonGridComponent {
  id?: number;
  __component?: "shared.image-with-button-grid";
  title?: string;
  description?: string;
  button?: ButtonButtonComponent;
  largeImage?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  smallImage?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
}

export interface TicketsTicketComponent {
  id?: number;
  category?: string;
  description?: string;
  price?: string;
  frequency?: string;
  theme?: "Зелёный" | "Коричневый";
}

export interface SharedTicketsComponent {
  id?: number;
  __component?: "shared.tickets";
  title?: string;
  description?: string;
  subsidizedTickets?: TicketsTicketComponent[];
  note?: string;
  link?: string;
}

export interface CardLabelComponent {
  id?: number;
  text?: string;
}

export interface CardCardComponent {
  id?: number;
  title?: string;
  description?: string;
  image?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  labels?: CardLabelComponent[];
  link?: string;
}

export interface SharedCardsComponent {
  id?: number;
  title?: string;
  cards?: CardCardComponent[];
}

export interface SharedMetaSocialComponent {
  id?: number;
  socialNetwork?: "Facebook" | "Twitter";
  title?: string;
  description?: string;
  image?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
}

export interface SharedSeoComponent {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  metaSocial?: SharedMetaSocialComponent[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface DiscountPageRequest {
  data: {
    seo?: SharedSeoComponent;
    blocks?: InternalNull &
      (
        | InternalNullComponentMapping<"discounts.categories", DiscountsCategoriesComponent>
        | InternalNullComponentMapping<"discounts.terms", DiscountsTermsComponent>
      );
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface DiscountPageListResponse {
  data?: DiscountPage[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface DiscountPage {
  id?: number;
  documentId?: string;
  seo?: SharedSeoComponent;
  blocks?: PolymorphNull &
    (
      | PolymorphNullComponentMapping<"discounts.categories", DiscountsCategoriesComponent>
      | PolymorphNullComponentMapping<"discounts.terms", DiscountsTermsComponent>
    );
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    blocks?: BaseNull1 &
      (
        | BaseNull1ComponentMapping<"discounts.categories", DiscountsCategoriesComponent>
        | BaseNull1ComponentMapping<"discounts.terms", DiscountsTermsComponent>
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface DiscountPageResponse {
  data?: DiscountPage;
  meta?: object;
}

export interface DiscountsBasisComponent {
  id?: number;
  title?: string;
  link?: string;
  file?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
}

export interface DiscountsTextComponent {
  id?: number;
  text?: string;
}

export interface DiscountsRulesComponent {
  id?: number;
  basis?: DiscountsBasisComponent[];
  terms?: DiscountsTextComponent[];
  docs?: DiscountsTextComponent[];
  info?: string;
}

export interface DiscountsDiscountsCardComponent {
  id?: number;
  title?: string;
  price?: string;
  note?: string;
  rules?: DiscountsRulesComponent;
}

export interface DiscountsCategoriesComponent {
  id?: number;
  __component?: "discounts.categories";
  title?: string;
  remark?: DiscountsBasisComponent;
  discountsCards?: DiscountsDiscountsCardComponent[];
}

export interface DiscountsTermsComponent {
  id?: number;
  __component?: "discounts.terms";
  title?: string;
  subtitle?: string;
  rulesCards?: DiscountsTextComponent[];
}

export interface DocumentRequest {
  data: {
    showDate: boolean;
    title: string;
    files: (number | string)[];
    /** @example "string or id" */
    category: number | string;
    subtitle?: string;
    description?: string;
    /** @format date */
    date?: string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface DocumentListResponse {
  data?: Document[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Document {
  id?: number;
  documentId?: string;
  showDate: boolean;
  title: string;
  files: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: number;
        documentId?: string;
      };
      children?: {
        id?: number;
        documentId?: string;
      }[];
      files?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            id?: number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      path?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  category: {
    id?: number;
    documentId?: string;
    title?: string;
    hasTabs?: boolean;
    slug?: string;
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  subtitle?: string;
  description?: string;
  /** @format date */
  date?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    showDate?: boolean;
    title?: string;
    files?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    category?: {
      id?: number;
      documentId?: string;
    };
    subtitle?: string;
    description?: string;
    /** @format date */
    date?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface DocumentResponse {
  data?: Document;
  meta?: object;
}

export interface DocumentsCategoryRequest {
  data: {
    title: string;
    hasTabs?: boolean;
    slug?: string;
    seo?: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface DocumentsCategoryListResponse {
  data?: DocumentsCategory[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface DocumentsCategory {
  id?: number;
  documentId?: string;
  title: string;
  hasTabs?: boolean;
  slug?: string;
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    title?: string;
    hasTabs?: boolean;
    slug?: string;
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface DocumentsCategoryResponse {
  data?: DocumentsCategory;
  meta?: object;
}

export interface DocumentsPageRequest {
  data: {
    title: string;
    seo?: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface DocumentsPageListResponse {
  data?: DocumentsPage[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface DocumentsPage {
  id?: number;
  documentId?: string;
  title: string;
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    title?: string;
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface DocumentsPageResponse {
  data?: DocumentsPage;
  meta?: object;
}

export interface HeaderRequest {
  data: {
    ticketsPopup: TicketsPopupTicketsPopupComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface HeaderListResponse {
  data?: Header[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Header {
  id?: number;
  documentId?: string;
  ticketsPopup: TicketsPopupTicketsPopupComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    ticketsPopup?: TicketsPopupTicketsPopupComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface HeaderResponse {
  data?: Header;
  meta?: object;
}

export interface TicketsPopupShortenedTicketComponent {
  id?: number;
  category?: string;
  price?: string;
  description?: string;
}

export interface TicketsPopupCategoryComponent {
  id?: number;
  category?: string;
  price?: string;
}

export interface ButtonButtonWithTextComponent {
  id?: number;
  label?: string;
}

export interface TicketsPopupAccordionTicketComponent {
  id?: number;
  category?: string;
  description?: string;
  categories?: TicketsPopupCategoryComponent[];
  button?: ButtonButtonWithTextComponent;
}

export interface TicketsPopupVisitingRulesAccordionComponent {
  id?: number;
  images?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  button?: ButtonButtonComponent;
}

export interface TicketsPopupRefundListItemComponent {
  id?: number;
  refundReason?: string;
}

export interface TicketsPopupTicketRefundAccordionComponent {
  id?: number;
  refundHead?: string;
  refundBody?: TicketsPopupRefundListItemComponent[];
  button?: ButtonButtonComponent;
}

export interface TicketsPopupTicketsPopupComponent {
  id?: number;
  generalTicketsLink?: string;
  generalTickets?: TicketsPopupShortenedTicketComponent[];
  subsidizedTicket?: TicketsPopupAccordionTicketComponent;
  buyTicketsButton?: ButtonButtonComponent;
  note?: string;
  visitingRulesAccordion?: TicketsPopupVisitingRulesAccordionComponent;
  ticketRefundAccordion?: TicketsPopupTicketRefundAccordionComponent;
}

export interface HomeRequest {
  data: {
    blocks?: AbstractNull1 &
      (
        | AbstractNull1ComponentMapping<"shared.hero", SharedHeroComponent>
        | AbstractNull1ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | AbstractNull1ComponentMapping<"home.services", HomeServicesComponent>
        | AbstractNull1ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | AbstractNull1ComponentMapping<"home.map-card", HomeMapCardComponent>
        | AbstractNull1ComponentMapping<"home.tickets", HomeTicketsComponent>
      );
    seo?: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface HomeListResponse {
  data?: Home[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Home {
  id?: number;
  documentId?: string;
  blocks?: AbstractNull2 &
    (
      | AbstractNull2ComponentMapping<"shared.hero", SharedHeroComponent>
      | AbstractNull2ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
      | AbstractNull2ComponentMapping<"home.services", HomeServicesComponent>
      | AbstractNull2ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
      | AbstractNull2ComponentMapping<"home.map-card", HomeMapCardComponent>
      | AbstractNull2ComponentMapping<"home.tickets", HomeTicketsComponent>
    );
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    blocks?: BaseNull2 &
      (
        | BaseNull2ComponentMapping<"shared.hero", SharedHeroComponent>
        | BaseNull2ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | BaseNull2ComponentMapping<"home.services", HomeServicesComponent>
        | BaseNull2ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | BaseNull2ComponentMapping<"home.map-card", HomeMapCardComponent>
        | BaseNull2ComponentMapping<"home.tickets", HomeTicketsComponent>
      );
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface HomeResponse {
  data?: Home;
  meta?: object;
}

export interface HomeServicesComponent {
  id?: number;
  __component?: "home.services";
  cards?: SharedCardsComponent;
  phone?: string;
  email?: string;
}

export interface HomeMapCardComponent {
  id?: number;
  __component?: "home.map-card";
  title?: string;
  description?: string;
  image?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  note?: string;
}

export interface TicketsTicketsComponent {
  id?: number;
  title?: string;
  description?: string;
  ticketsList?: TicketsTicketComponent[];
  link?: string;
}

export interface HomeTicketsComponent {
  id?: number;
  __component?: "home.tickets";
  title?: string;
  generalTickets?: TicketsTicketComponent[];
  generalTicketsLink?: string;
  subsidizedTickets?: TicketsTicketsComponent;
}

export interface NewsCollectionRequest {
  data: {
    title: string;
    description?: string;
    /** @example "string or id" */
    image?: number | string;
    innerContent: string;
    slug?: string;
    seo?: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface NewsCollectionListResponse {
  data?: NewsCollection[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface NewsCollection {
  id?: number;
  documentId?: string;
  title: string;
  description?: string;
  image?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: number;
        documentId?: string;
      };
      children?: {
        id?: number;
        documentId?: string;
      }[];
      files?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            id?: number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      path?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  innerContent: string;
  slug?: string;
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    title?: string;
    description?: string;
    image?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    innerContent?: string;
    slug?: string;
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface NewsCollectionResponse {
  data?: NewsCollection;
  meta?: object;
}

export interface NewsPageRequest {
  data: {
    seo?: SharedSeoComponent;
    title: string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface NewsPageListResponse {
  data?: NewsPage[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface NewsPage {
  id?: number;
  documentId?: string;
  seo?: SharedSeoComponent;
  title: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    title?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface NewsPageResponse {
  data?: NewsPage;
  meta?: object;
}

type BaseNull = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | SharedImageWithButtonGridComponent
  | SharedTicketsComponent
  | SharedCardsComponent
)[];

type BaseNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | SharedImageWithButtonGridComponent
  | SharedTicketsComponent
  | SharedCardsComponent
)[];

type AbstractNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | SharedImageWithButtonGridComponent
  | SharedTicketsComponent
  | SharedCardsComponent
)[];

type DiscriminatorNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull = (DiscountsCategoriesComponent | DiscountsTermsComponent)[];

type InternalNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type PolymorphNull = (DiscountsCategoriesComponent | DiscountsTermsComponent)[];

type PolymorphNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type BaseNull1 = (DiscountsCategoriesComponent | DiscountsTermsComponent)[];

type BaseNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull1 = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | HomeServicesComponent
  | SharedImageWithButtonGridComponent
  | HomeMapCardComponent
  | HomeTicketsComponent
)[];

type AbstractNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull2 = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | HomeServicesComponent
  | SharedImageWithButtonGridComponent
  | HomeMapCardComponent
  | HomeTicketsComponent
)[];

type AbstractNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type BaseNull2 = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | HomeServicesComponent
  | SharedImageWithButtonGridComponent
  | HomeMapCardComponent
  | HomeTicketsComponent
)[];

type BaseNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;
