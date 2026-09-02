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
  id?: string | number;
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
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface ContactZooResponse {
  data?: ContactZoo;
  meta?: object;
}

export interface HeroInfoCardComponent {
  id?: string | number;
  title?: string;
  description?: string;
}

export interface ScheduleCardTimetableComponent {
  id?: string | number;
  days?: string;
  time?: string;
  ticketsOfficeTime?: string;
}

export interface HeroScheduleCardComponent {
  id?: string | number;
  title?: string;
  timetable?: ScheduleCardTimetableComponent[];
}

export interface SharedHeroComponent {
  id?: string | number;
  __component?: "shared.hero";
  title?: string;
  image?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
  infoCard?: HeroInfoCardComponent;
  scheduleCard?: HeroScheduleCardComponent;
}

export interface SharedTextAndMediaComponent {
  id?: string | number;
  __component?: "shared.text-and-media";
  title?: string;
  description?: string;
  media?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
  contentOrder?: "Текст слева" | "Текст справа";
  viewFootsteps?: boolean;
}

export interface ButtonButtonComponent {
  id?: string | number;
  label?: string;
  link?: string;
}

export interface SharedImageWithButtonGridComponent {
  id?: string | number;
  __component?: "shared.image-with-button-grid";
  title?: string;
  description?: string;
  button?: ButtonButtonComponent;
  largeImage?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
  smallImage?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
}

export interface TicketsTicketComponent {
  id?: string | number;
  category?: string;
  description?: string;
  price?: string;
  frequency?: string;
  theme?: "Зелёный" | "Коричневый";
}

export interface SharedTicketsComponent {
  id?: string | number;
  __component?: "shared.tickets";
  title?: string;
  description?: string;
  subsidizedTickets?: TicketsTicketComponent[];
  note?: string;
  link?: string;
}

export interface CardLabelComponent {
  id?: string | number;
  text?: string;
}

export interface CardCardComponent {
  id?: string | number;
  title?: string;
  description?: string;
  image?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
  labels?: CardLabelComponent[];
  link?: string;
}

export interface SharedCardsComponent {
  id?: string | number;
  __component?: "shared.cards";
  title?: string;
  cards?: CardCardComponent[];
}

export interface SharedMetaSocialComponent {
  id?: string | number;
  socialNetwork?: "Facebook" | "Twitter";
  title?: string;
  description?: string;
  image?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
}

export interface SharedSeoComponent {
  id?: string | number;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
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
  id?: string | number;
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
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
    documentId?: string;
    seo?: SharedSeoComponent;
    blocks?: DiscriminatorNull1 &
      (
        | DiscriminatorNull1ComponentMapping<"discounts.categories", DiscountsCategoriesComponent>
        | DiscriminatorNull1ComponentMapping<"discounts.terms", DiscountsTermsComponent>
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface DiscountPageResponse {
  data?: DiscountPage;
  meta?: object;
}

export interface DiscountsBasisComponent {
  id?: string | number;
  title?: string;
  link?: string;
  file?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
}

export interface DiscountsTextComponent {
  id?: string | number;
  text?: string;
}

export interface DiscountsRulesComponent {
  id?: string | number;
  basis?: DiscountsBasisComponent[];
  terms?: DiscountsTextComponent[];
  docs?: DiscountsTextComponent[];
  info?: string;
}

export interface DiscountsDiscountsCardComponent {
  id?: string | number;
  title?: string;
  price?: string;
  note?: string;
  rules?: DiscountsRulesComponent;
}

export interface DiscountsCategoriesComponent {
  id?: string | number;
  __component?: "discounts.categories";
  title?: string;
  remark?: DiscountsBasisComponent;
  discountsCards?: DiscountsDiscountsCardComponent[];
}

export interface DiscountsTermsComponent {
  id?: string | number;
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
  id?: string | number;
  documentId?: string;
  showDate: boolean;
  title: string;
  files: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: string | number;
        documentId?: string;
      };
      children?: {
        id?: string | number;
        documentId?: string;
      }[];
      files?: {
        id?: string | number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        focalPoint?: any;
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
          id?: string | number;
          documentId?: string;
        }[];
        folder?: {
          id?: string | number;
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
          id?: string | number;
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
            id?: string | number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: {
              id?: string | number;
              documentId?: string;
            }[];
            permissions?: {
              id?: string | number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: string | number;
                documentId?: string;
              };
              apiToken?: {
                id?: string | number;
                documentId?: string;
                name?: string;
                description?: string;
                kind?: "content-api" | "admin";
                type?: "read-only" | "full-access" | "custom";
                accessKey?: string;
                encryptedKey?: string;
                /** @format date-time */
                lastUsedAt?: string;
                permissions?: {
                  id?: string | number;
                  documentId?: string;
                  action?: string;
                  token?: {
                    id?: string | number;
                    documentId?: string;
                  };
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  /** @format date-time */
                  publishedAt?: string;
                  createdBy?: {
                    id?: string | number;
                    documentId?: string;
                  };
                  updatedBy?: {
                    id?: string | number;
                    documentId?: string;
                  };
                  locale?: string;
                  localizations?: {
                    id?: string | number;
                    documentId?: string;
                  }[];
                }[];
                adminPermissions?: {
                  id?: string | number;
                  documentId?: string;
                }[];
                adminUserOwner?: {
                  id?: string | number;
                  documentId?: string;
                };
                /** @format date-time */
                expiresAt?: string;
                /**
                 * @pattern ^\d*$
                 * @example "123456789"
                 */
                lifespan?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: string | number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: string | number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: string | number;
                  documentId?: string;
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: string | number;
                documentId?: string;
              };
              updatedBy?: {
                id?: string | number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: string | number;
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
              id?: string | number;
              documentId?: string;
            };
            updatedBy?: {
              id?: string | number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: string | number;
              documentId?: string;
            }[];
          }[];
          apiTokens?: {
            id?: string | number;
            documentId?: string;
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
            id?: string | number;
            documentId?: string;
          };
          updatedBy?: {
            id?: string | number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: string | number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: string | number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: string | number;
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
        id?: string | number;
        documentId?: string;
      };
      updatedBy?: {
        id?: string | number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
  category: {
    id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
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
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
    documentId?: string;
    showDate?: boolean;
    title?: string;
    files?: {
      id?: string | number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      focalPoint?: any;
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
        id?: string | number;
        documentId?: string;
      }[];
      folder?: {
        id?: string | number;
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
        id?: string | number;
        documentId?: string;
      };
      updatedBy?: {
        id?: string | number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: string | number;
        documentId?: string;
      }[];
    }[];
    category?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
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
  id?: string | number;
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
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
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
  id?: string | number;
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
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
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
  id?: string | number;
  documentId?: string;
  ticketsPopup: TicketsPopupTicketsPopupComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
    documentId?: string;
    ticketsPopup?: TicketsPopupTicketsPopupComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface HeaderResponse {
  data?: Header;
  meta?: object;
}

export interface TicketsPopupShortenedTicketComponent {
  id?: string | number;
  category?: string;
  price?: string;
  description?: string;
}

export interface TicketsPopupCategoryComponent {
  id?: string | number;
  category?: string;
  price?: string;
}

export interface ButtonButtonWithTextComponent {
  id?: string | number;
  label?: string;
}

export interface TicketsPopupAccordionTicketComponent {
  id?: string | number;
  category?: string;
  description?: string;
  categories?: TicketsPopupCategoryComponent[];
  button?: ButtonButtonWithTextComponent;
}

export interface TicketsPopupVisitingRulesAccordionComponent {
  id?: string | number;
  images?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
  button?: ButtonButtonComponent;
}

export interface TicketsPopupRefundListItemComponent {
  id?: string | number;
  refundReason?: string;
}

export interface TicketsPopupTicketRefundAccordionComponent {
  id?: string | number;
  refundHead?: string;
  refundBody?: TicketsPopupRefundListItemComponent[];
  button?: ButtonButtonComponent;
}

export interface TicketsPopupTicketsPopupComponent {
  id?: string | number;
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
    blocks?: DiscriminatorNull2 &
      (
        | DiscriminatorNull2ComponentMapping<"shared.hero", SharedHeroComponent>
        | DiscriminatorNull2ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | DiscriminatorNull2ComponentMapping<"home.services", HomeServicesComponent>
        | DiscriminatorNull2ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | DiscriminatorNull2ComponentMapping<"home.map-card", HomeMapCardComponent>
        | DiscriminatorNull2ComponentMapping<"home.tickets", HomeTicketsComponent>
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
  id?: string | number;
  documentId?: string;
  blocks?: InternalNull1 &
    (
      | InternalNull1ComponentMapping<"shared.hero", SharedHeroComponent>
      | InternalNull1ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
      | InternalNull1ComponentMapping<"home.services", HomeServicesComponent>
      | InternalNull1ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
      | InternalNull1ComponentMapping<"home.map-card", HomeMapCardComponent>
      | InternalNull1ComponentMapping<"home.tickets", HomeTicketsComponent>
    );
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
    documentId?: string;
    blocks?: InternalNull2 &
      (
        | InternalNull2ComponentMapping<"shared.hero", SharedHeroComponent>
        | InternalNull2ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | InternalNull2ComponentMapping<"home.services", HomeServicesComponent>
        | InternalNull2ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | InternalNull2ComponentMapping<"home.map-card", HomeMapCardComponent>
        | InternalNull2ComponentMapping<"home.tickets", HomeTicketsComponent>
      );
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface HomeResponse {
  data?: Home;
  meta?: object;
}

export interface HomeServicesComponent {
  id?: string | number;
  __component?: "home.services";
  cards?: SharedCardsComponent;
  phone?: string;
  email?: string;
}

export interface HomeMapCardComponent {
  id?: string | number;
  __component?: "home.map-card";
  title?: string;
  description?: string;
  image?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
  note?: string;
}

export interface TicketsTicketsComponent {
  id?: string | number;
  title?: string;
  description?: string;
  ticketsList?: TicketsTicketComponent[];
  link?: string;
}

export interface HomeTicketsComponent {
  id?: string | number;
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
    isPinned?: boolean;
    slug?: string;
    seo?: SharedSeoComponent;
    /** @format date */
    date?: string;
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
  id?: string | number;
  documentId?: string;
  title: string;
  description?: string;
  image?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: string | number;
        documentId?: string;
      };
      children?: {
        id?: string | number;
        documentId?: string;
      }[];
      files?: {
        id?: string | number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        focalPoint?: any;
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
          id?: string | number;
          documentId?: string;
        }[];
        folder?: {
          id?: string | number;
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
          id?: string | number;
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
            id?: string | number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: {
              id?: string | number;
              documentId?: string;
            }[];
            permissions?: {
              id?: string | number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: string | number;
                documentId?: string;
              };
              apiToken?: {
                id?: string | number;
                documentId?: string;
                name?: string;
                description?: string;
                kind?: "content-api" | "admin";
                type?: "read-only" | "full-access" | "custom";
                accessKey?: string;
                encryptedKey?: string;
                /** @format date-time */
                lastUsedAt?: string;
                permissions?: {
                  id?: string | number;
                  documentId?: string;
                  action?: string;
                  token?: {
                    id?: string | number;
                    documentId?: string;
                  };
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  /** @format date-time */
                  publishedAt?: string;
                  createdBy?: {
                    id?: string | number;
                    documentId?: string;
                  };
                  updatedBy?: {
                    id?: string | number;
                    documentId?: string;
                  };
                  locale?: string;
                  localizations?: {
                    id?: string | number;
                    documentId?: string;
                  }[];
                }[];
                adminPermissions?: {
                  id?: string | number;
                  documentId?: string;
                }[];
                adminUserOwner?: {
                  id?: string | number;
                  documentId?: string;
                };
                /** @format date-time */
                expiresAt?: string;
                /**
                 * @pattern ^\d*$
                 * @example "123456789"
                 */
                lifespan?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: string | number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: string | number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: string | number;
                  documentId?: string;
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: string | number;
                documentId?: string;
              };
              updatedBy?: {
                id?: string | number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: string | number;
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
              id?: string | number;
              documentId?: string;
            };
            updatedBy?: {
              id?: string | number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: string | number;
              documentId?: string;
            }[];
          }[];
          apiTokens?: {
            id?: string | number;
            documentId?: string;
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
            id?: string | number;
            documentId?: string;
          };
          updatedBy?: {
            id?: string | number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: string | number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: string | number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: string | number;
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
        id?: string | number;
        documentId?: string;
      };
      updatedBy?: {
        id?: string | number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
  innerContent: string;
  isPinned?: boolean;
  slug?: string;
  seo?: SharedSeoComponent;
  /** @format date */
  date?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
    documentId?: string;
    title?: string;
    description?: string;
    image?: {
      id?: string | number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      focalPoint?: any;
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
        id?: string | number;
        documentId?: string;
      }[];
      folder?: {
        id?: string | number;
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
        id?: string | number;
        documentId?: string;
      };
      updatedBy?: {
        id?: string | number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: string | number;
        documentId?: string;
      }[];
    };
    innerContent?: string;
    isPinned?: boolean;
    slug?: string;
    seo?: SharedSeoComponent;
    /** @format date */
    date?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
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
  id?: string | number;
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
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface NewsPageResponse {
  data?: NewsPage;
  meta?: object;
}

export interface OtherRequest {
  data: {
    title?: string;
    seo?: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface OtherListResponse {
  data?: Other[];
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

export interface Other {
  id?: string | number;
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
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface OtherResponse {
  data?: Other;
  meta?: object;
}

export interface OtherPageRequest {
  data: {
    title: string;
    slug?: string;
    blocks: DiscriminatorNull3 &
      (
        | DiscriminatorNull3ComponentMapping<"shared.tickets", SharedTicketsComponent>
        | DiscriminatorNull3ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | DiscriminatorNull3ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | DiscriminatorNull3ComponentMapping<"shared.hero", SharedHeroComponent>
        | DiscriminatorNull3ComponentMapping<"shared.cards", SharedCardsComponent>
        | DiscriminatorNull3ComponentMapping<"shared.markdown-block", SharedMarkdownBlockComponent>
        | DiscriminatorNull3ComponentMapping<"shared.steps", SharedStepsComponent>
      );
    seo: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface OtherPageListResponse {
  data?: OtherPage[];
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

export interface OtherPage {
  id?: string | number;
  documentId?: string;
  title: string;
  slug?: string;
  blocks: InternalNull3 &
    (
      | InternalNull3ComponentMapping<"shared.tickets", SharedTicketsComponent>
      | InternalNull3ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
      | InternalNull3ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
      | InternalNull3ComponentMapping<"shared.hero", SharedHeroComponent>
      | InternalNull3ComponentMapping<"shared.cards", SharedCardsComponent>
      | InternalNull3ComponentMapping<"shared.markdown-block", SharedMarkdownBlockComponent>
      | InternalNull3ComponentMapping<"shared.steps", SharedStepsComponent>
    );
  seo: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
    documentId?: string;
    title?: string;
    slug?: string;
    blocks?: InternalNull4 &
      (
        | InternalNull4ComponentMapping<"shared.tickets", SharedTicketsComponent>
        | InternalNull4ComponentMapping<"shared.text-and-media", SharedTextAndMediaComponent>
        | InternalNull4ComponentMapping<"shared.image-with-button-grid", SharedImageWithButtonGridComponent>
        | InternalNull4ComponentMapping<"shared.hero", SharedHeroComponent>
        | InternalNull4ComponentMapping<"shared.cards", SharedCardsComponent>
        | InternalNull4ComponentMapping<"shared.markdown-block", SharedMarkdownBlockComponent>
        | InternalNull4ComponentMapping<"shared.steps", SharedStepsComponent>
      );
    seo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface OtherPageResponse {
  data?: OtherPage;
  meta?: object;
}

export interface SharedMarkdownBlockComponent {
  id?: string | number;
  __component?: "shared.markdown-block";
  markdown?: string;
}

export interface SharedStepsCardComponent {
  id?: string | number;
  text?: string;
}

export interface SharedStepsComponent {
  id?: string | number;
  __component?: "shared.steps";
  subtitle?: string;
  stepsCards?: SharedStepsCardComponent[];
}

export interface VisitingRulesPageRequest {
  data: {
    seo?: SharedSeoComponent;
    blocks?: InternalNull5 &
      (
        | InternalNull5ComponentMapping<"visiting-rules.warnings", VisitingRulesWarningsComponent>
        | InternalNull5ComponentMapping<"visiting-rules.visiting-rules-main", VisitingRulesVisitingRulesMainComponent>
        | InternalNull5ComponentMapping<"visiting-rules.photos-policy", VisitingRulesPhotosPolicyComponent>
        | InternalNull5ComponentMapping<"visiting-rules.emergency-phones", VisitingRulesEmergencyPhonesComponent>
      );
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface VisitingRulesPageListResponse {
  data?: VisitingRulesPage[];
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

export interface VisitingRulesPage {
  id?: string | number;
  documentId?: string;
  seo?: SharedSeoComponent;
  blocks?: InternalNull6 &
    (
      | InternalNull6ComponentMapping<"visiting-rules.warnings", VisitingRulesWarningsComponent>
      | InternalNull6ComponentMapping<"visiting-rules.visiting-rules-main", VisitingRulesVisitingRulesMainComponent>
      | InternalNull6ComponentMapping<"visiting-rules.photos-policy", VisitingRulesPhotosPolicyComponent>
      | InternalNull6ComponentMapping<"visiting-rules.emergency-phones", VisitingRulesEmergencyPhonesComponent>
    );
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: string | number;
    documentId?: string;
  };
  updatedBy?: {
    id?: string | number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: string | number;
    documentId?: string;
    seo?: SharedSeoComponent;
    blocks?: BaseNull1 &
      (
        | BaseNull1ComponentMapping<"visiting-rules.warnings", VisitingRulesWarningsComponent>
        | BaseNull1ComponentMapping<"visiting-rules.visiting-rules-main", VisitingRulesVisitingRulesMainComponent>
        | BaseNull1ComponentMapping<"visiting-rules.photos-policy", VisitingRulesPhotosPolicyComponent>
        | BaseNull1ComponentMapping<"visiting-rules.emergency-phones", VisitingRulesEmergencyPhonesComponent>
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  }[];
}

export interface VisitingRulesPageResponse {
  data?: VisitingRulesPage;
  meta?: object;
}

export interface VisitingRulesTextCardComponent {
  id?: string | number;
  label?: string;
}

export interface VisitingRulesWarningsComponent {
  id?: string | number;
  __component?: "visiting-rules.warnings";
  warningsCards?: VisitingRulesTextCardComponent[];
}

export interface VisitingRulesMainRulesCardComponent {
  id?: string | number;
  image?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
  label?: string;
}

export interface VisitingRulesMainRulesComponent {
  id?: string | number;
  title?: string;
  mainRulesCards?: VisitingRulesMainRulesCardComponent[];
}

export interface VisitingRulesDocumentLinkComponent {
  id?: string | number;
  label?: string;
  file?: {
    id?: string | number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    focalPoint?: any;
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
      id?: string | number;
      documentId?: string;
    }[];
    folder?: {
      id?: string | number;
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
      id?: string | number;
      documentId?: string;
    };
    updatedBy?: {
      id?: string | number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: string | number;
      documentId?: string;
    }[];
  };
}

export interface VisitingRulesVisitingRulesMainComponent {
  id?: string | number;
  __component?: "visiting-rules.visiting-rules-main";
  title?: string;
  description?: string;
  mainRules?: VisitingRulesMainRulesComponent;
  documentLink?: VisitingRulesDocumentLinkComponent;
}

export interface VisitingRulesPhotosPolicyComponent {
  id?: string | number;
  __component?: "visiting-rules.photos-policy";
  title?: string;
  photosPolicyCards?: VisitingRulesTextCardComponent[];
}

export interface VisitingRulesEmergencyPhonesCardComponent {
  id?: string | number;
  phone?: string;
  label?: string;
}

export interface VisitingRulesEmergencyPhonesComponent {
  id?: string | number;
  __component?: "visiting-rules.emergency-phones";
  title?: string;
  emergencyPhonesCards?: VisitingRulesEmergencyPhonesCardComponent[];
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

type DiscriminatorNull1 = (DiscountsCategoriesComponent | DiscountsTermsComponent)[];

type DiscriminatorNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull2 = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | HomeServicesComponent
  | SharedImageWithButtonGridComponent
  | HomeMapCardComponent
  | HomeTicketsComponent
)[];

type DiscriminatorNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull1 = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | HomeServicesComponent
  | SharedImageWithButtonGridComponent
  | HomeMapCardComponent
  | HomeTicketsComponent
)[];

type InternalNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull2 = (
  | SharedHeroComponent
  | SharedTextAndMediaComponent
  | HomeServicesComponent
  | SharedImageWithButtonGridComponent
  | HomeMapCardComponent
  | HomeTicketsComponent
)[];

type InternalNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull3 = (
  | SharedTicketsComponent
  | SharedTextAndMediaComponent
  | SharedImageWithButtonGridComponent
  | SharedHeroComponent
  | SharedCardsComponent
  | SharedMarkdownBlockComponent
  | SharedStepsComponent
)[];

type DiscriminatorNull3ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull3 = (
  | SharedTicketsComponent
  | SharedTextAndMediaComponent
  | SharedImageWithButtonGridComponent
  | SharedHeroComponent
  | SharedCardsComponent
  | SharedMarkdownBlockComponent
  | SharedStepsComponent
)[];

type InternalNull3ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull4 = (
  | SharedTicketsComponent
  | SharedTextAndMediaComponent
  | SharedImageWithButtonGridComponent
  | SharedHeroComponent
  | SharedCardsComponent
  | SharedMarkdownBlockComponent
  | SharedStepsComponent
)[];

type InternalNull4ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull5 = (
  | VisitingRulesWarningsComponent
  | VisitingRulesVisitingRulesMainComponent
  | VisitingRulesPhotosPolicyComponent
  | VisitingRulesEmergencyPhonesComponent
)[];

type InternalNull5ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull6 = (
  | VisitingRulesWarningsComponent
  | VisitingRulesVisitingRulesMainComponent
  | VisitingRulesPhotosPolicyComponent
  | VisitingRulesEmergencyPhonesComponent
)[];

type InternalNull6ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type BaseNull1 = (
  | VisitingRulesWarningsComponent
  | VisitingRulesVisitingRulesMainComponent
  | VisitingRulesPhotosPolicyComponent
  | VisitingRulesEmergencyPhonesComponent
)[];

type BaseNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;
