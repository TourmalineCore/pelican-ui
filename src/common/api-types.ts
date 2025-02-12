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
    blocks?: SharedHeroComponent[];
    seo?: SharedSeoComponent;
    versions?: (number | string)[];
    vuid?: string;
    versionNumber?: number;
    versionComment?: string;
    isVisibleInListView?: boolean;
  };
}

export interface ContactZooListResponseDataItem {
  id?: number;
  attributes?: ContactZoo;
}

export interface ContactZooListResponse {
  data?: ContactZooListResponseDataItem[];
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
  blocks?: SharedHeroComponent[];
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  versions?: {
    data?: {
      id?: number;
      attributes?: {
        blocks?: {
          id?: number;
          __component?: string;
          title?: string;
          image?: {
            data?: {
              id?: number;
              attributes?: {
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
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          infoCard?: {
            id?: number;
            title?: string;
            description?: string;
          };
          scheduleCard?: {
            id?: number;
            title?: string;
            timetable?: {
              id?: number;
              days?: string;
              time?: string;
              ticketsOfficeTime?: string;
            }[];
          };
        }[];
        seo?: {
          id?: number;
          metaTitle?: string;
          metaDescription?: string;
          metaImage?: {
            data?: {
              id?: number;
              attributes?: {
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
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          metaSocial?: {
            id?: number;
            socialNetwork?: "Facebook" | "Twitter";
            title?: string;
            description?: string;
            image?: {
              data?: {
                id?: number;
                attributes?: {
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
                    data?: {
                      id?: number;
                      attributes?: object;
                    }[];
                  };
                  folder?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  folderPath?: string;
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                };
              };
            };
          }[];
          keywords?: string;
          metaRobots?: string;
          structuredData?: any;
          metaViewport?: string;
          canonicalURL?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        versions?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        vuid?: string;
        versionNumber?: number;
        versionComment?: string;
        isVisibleInListView?: boolean;
      };
    }[];
  };
  vuid?: string;
  versionNumber?: number;
  versionComment?: string;
  isVisibleInListView?: boolean;
}

export interface ContactZooResponseDataObject {
  id?: number;
  attributes?: ContactZoo;
}

export interface ContactZooResponse {
  data?: ContactZooResponseDataObject;
  meta?: object;
}

export interface HeroInfoCardComponent {
  id?: number;
  title?: string;
  description?: string;
}

export interface HeroScheduleCardComponent {
  id?: number;
  title?: string;
  timetable?: {
    id?: number;
    days?: string;
    time?: string;
    ticketsOfficeTime?: string;
  }[];
}

export interface SharedHeroComponent {
  id?: number;
  __component?: string;
  title?: string;
  image?: {
    data?: {
      id?: number;
      attributes?: {
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
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
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
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  infoCard?: HeroInfoCardComponent;
  scheduleCard?: HeroScheduleCardComponent;
}

export interface SharedSeoComponent {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: {
    data?: {
      id?: number;
      attributes?: {
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
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  metaSocial?: {
    id?: number;
    socialNetwork?: "Facebook" | "Twitter";
    title?: string;
    description?: string;
    image?: {
      data?: {
        id?: number;
        attributes?: {
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
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
  }[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface DocumentRequest {
  data: {
    showDate: boolean;
    title: string;
    files: (number | string)[];
    /** @example "string or id" */
    category?: number | string;
    subtitle?: string;
    description?: string;
    /** @format date */
    date?: string;
  };
}

export interface DocumentListResponseDataItem {
  id?: number;
  attributes?: Document;
}

export interface DocumentListResponse {
  data?: DocumentListResponseDataItem[];
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
  showDate: boolean;
  title: string;
  files: {
    data?: {
      id?: number;
      attributes?: {
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
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
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
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    }[];
  };
  category?: {
    data?: {
      id?: number;
      attributes?: {
        title?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
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
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
}

export interface DocumentResponseDataObject {
  id?: number;
  attributes?: Document;
}

export interface DocumentResponse {
  data?: DocumentResponseDataObject;
  meta?: object;
}

export interface DocumentsCategoryRequest {
  data: {
    title: string;
    hasTabs?: boolean;
  };
}

export interface DocumentsCategoryListResponseDataItem {
  id?: number;
  attributes?: DocumentsCategory;
}

export interface DocumentsCategoryListResponse {
  data?: DocumentsCategoryListResponseDataItem[];
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
  title: string;
  hasTabs?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {
        firstname?: string;
        lastname?: string;
        username?: string;
        /** @format email */
        email?: string;
        resetPasswordToken?: string;
        registrationToken?: string;
        isActive?: boolean;
        roles?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              code?: string;
              description?: string;
              users?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              permissions?: {
                data?: {
                  id?: number;
                  attributes?: {
                    action?: string;
                    actionParameters?: any;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          }[];
        };
        blocked?: boolean;
        preferedLanguage?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
}

export interface DocumentsCategoryResponseDataObject {
  id?: number;
  attributes?: DocumentsCategory;
}

export interface DocumentsCategoryResponse {
  data?: DocumentsCategoryResponseDataObject;
  meta?: object;
}

export interface HomeRequest {
  data: {
    blocks?: (SharedHeroComponent | SharedTextAndMediaComponent)[];
        seo?: SharedSeoComponent;
    versions?: (number | string)[];
    vuid?: string;
    versionNumber?: number;
    versionComment?: string;
    isVisibleInListView?: boolean;
  };
}

export interface HomeListResponseDataItem {
  id?: number;
  attributes?: Home;
}

export interface HomeListResponse {
  data?: HomeListResponseDataItem[];
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
  blocks?: (SharedHeroComponent | SharedTextAndMediaComponent)[];
  seo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  versions?: {
    data?: {
      id?: number;
      attributes?: {
        blocks?: (
          | {
              id?: number;
              __component?: string;
              title?: string;
              image?: {
                data?: {
                  id?: number;
                  attributes?: {
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
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                };
              };
              infoCard?: {
                id?: number;
                title?: string;
                description?: string;
              };
              scheduleCard?: {
                id?: number;
                title?: string;
                timetable?: {
                  id?: number;
                  days?: string;
                  time?: string;
                  ticketsOfficeTime?: string;
                }[];
              };
            }
          | {
              id?: number;
              __component?: string;
              title?: string;
              description?: string;
              media?: {
                data?: {
                  id?: number;
                  attributes?: {
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
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                };
              };
              contentOrder?: "Текст слева, видео/изображение справа" | "Видео/изображение слева, текст справа";
              viewFootsteps?: boolean;
            }
        )[];
        seo?: {
          id?: number;
          metaTitle?: string;
          metaDescription?: string;
          metaImage?: {
            data?: {
              id?: number;
              attributes?: {
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
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          metaSocial?: {
            id?: number;
            socialNetwork?: "Facebook" | "Twitter";
            title?: string;
            description?: string;
            image?: {
              data?: {
                id?: number;
                attributes?: {
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
                    data?: {
                      id?: number;
                      attributes?: object;
                    }[];
                  };
                  folder?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  folderPath?: string;
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: number;
                      attributes?: object;
                    };
                  };
                };
              };
            };
          }[];
          keywords?: string;
          metaRobots?: string;
          structuredData?: any;
          metaViewport?: string;
          canonicalURL?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        versions?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        vuid?: string;
        versionNumber?: number;
        versionComment?: string;
        isVisibleInListView?: boolean;
      };
    }[];
  };
  vuid?: string;
  versionNumber?: number;
  versionComment?: string;
  isVisibleInListView?: boolean;
}

export interface HomeResponseDataObject {
  id?: number;
  attributes?: Home;
}

export interface HomeResponse {
  data?: HomeResponseDataObject;
  meta?: object;
}

export interface SharedTextAndMediaComponent {
  id?: number;
  __component?: string;
  title?: string;
  description?: string;
  media?: {
    data?: {
      id?: number;
      attributes?: {
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
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  contentOrder?: "Текст слева, видео/изображение справа" | "Видео/изображение слева, текст справа";
  viewFootsteps?: boolean;
}

export interface NewsCollectionRequest {
  data: {
    title: string;
    description?: string;
    /** @example "string or id" */
    image: number | string;
    innerContent: string;
    versions?: (number | string)[];
    vuid?: string;
    versionNumber?: number;
    versionComment?: string;
    isVisibleInListView?: boolean;
  };
}

export interface NewsCollectionListResponseDataItem {
  id?: number;
  attributes?: NewsCollection;
}

export interface NewsCollectionListResponse {
  data?: NewsCollectionListResponseDataItem[];
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
  title: string;
  description?: string;
  image: {
    data?: {
      id?: number;
      attributes?: {
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
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
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
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  innerContent: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  versions?: {
    data?: {
      id?: number;
      attributes?: {
        title?: string;
        description?: string;
        image?: {
          data?: {
            id?: number;
            attributes?: {
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
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        innerContent?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        versions?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        vuid?: string;
        versionNumber?: number;
        versionComment?: string;
        isVisibleInListView?: boolean;
      };
    }[];
  };
  vuid?: string;
  versionNumber?: number;
  versionComment?: string;
  isVisibleInListView?: boolean;
}

export interface NewsCollectionResponseDataObject {
  id?: number;
  attributes?: NewsCollection;
}

export interface NewsCollectionResponse {
  data?: NewsCollectionResponseDataObject;
  meta?: object;
}
