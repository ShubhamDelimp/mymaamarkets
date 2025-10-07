export interface HomepageData {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;

    hero_section: {
      id: number;
      title1: string;
      title2: string;
      button1: string;
      button2: string;
      description: string;
      background_image: {
        name: string;
        url: string;
      };
      feature: {
        id: number;
        title: string;
        description: string;
        image: {
          url: string;
          name: string;
        } | null;
      }[];
    };
    HomeSectionTwo: [{
      id: number;
      title1: string;
      title2: string;
      title3?: string;
      description: string;
      button_name: string;
      cards: {
        id: number;
        title: string;
        description: string;
        image: {
          name: string;
          url: string;
        };
      }[];
    }];
  // home_section_three: {
  //     id: number;
  //     image: {
  //       id: number;
  //       image:{
  //       name: string;
  //       url: string;
  //       }
  //     };
  //     features: {
  //       id: number;
  //       title: string;
  //       description: string;
  //     }[];
  //     logos: {
  //       id: number;
  //       name: string;
  //       url: string;
  //     }[];
  //     cta_button: {
  //       text: string;
  //       url: string;
  //     };
  //   };
    home_section2: {
      id: number;
      title1: string;
      description1: string;
      title2: string;
      description2: string;
    };

    home_section3: {
      id: number;
      title: string;
      description: string;
      button_name: string;
      image: {
        url: string;
        name: string;
      } | null;
    }[];

    home_section4: {
      id: number;
      title: string;
      trade_card: {
        id: string;
        symbol: string;
        price: string;
        change_percent: string;
      }[];
      cta: string;
    };

    home_section5: {
      id: number;
      title: string;
      description: string;
      subtitle: string;
      subdescription: string;
      cta: string;
      qr_code: {
        name: string;
        url: string;
      };
      section_image: {
        name: string;
        url: string;
      };
      subimage: {
        name: string;
        url: string;
      };
      extras_card: {
        id: number;
        title: string;
        image: {
          name: string;
          url: string;
        };
      }[];
    };

    home_section6: {
      id: number;
      title: string;
      card: {
        id: number;
        title: string;
        description: string;
        redirect_url: string;
        image: {
          name: string;
          url: string;
        };
      }[];
    };

    home_section7: {
      id: number;
      title: string;
      subtitle: string;
      description: string;
      subdescription: string;
      cta: string;
      background_image: {
        name: string;
        url: string;
      };
      extras_title: string;
      options: {
        id: number;
        title: string;
        image: {
          name: string;
          url: string;
        };
      }[];
    };

    home_section8: {
      id: number;
      title: string;
      description: string;
      cta: string;
       image: {
          name: string;
          url: string;
        };
      card: {
        id: number;
        title: string;
        description: string;
      }[];
    };

    home_faqs: {
      id: number;
      heading: string;
      faq: {
        id: number;
        question: string;
        answer: string;
      }[];
    };

    home_footer: {
      id: number;
      logo: {
        name: string;
        url: string;
      };
      footer_links: {
        id: number;
        heading: string;
        link: {
          id: number;
          context: string;
          context_url: string;
        }[];
      }[];
      social: {
        id: number;
        name: string;
        url: string;
        icon: {
          name: string;
          url: string;
        };
      }[];
      regulations: string;
      disclaimer: string;
      risk_disclosure: string;
      restricted_countries: string;
    };
  };
  // meta: object;
}
