type Card = {
  id: number;
  heading: string;
  paragraph: string;
  imageURL: string;
};

export type DesignElement = {
  theme: "dark" | "light" | "business" | "corporate";
  navigation: {
    logo: string;
    navLinks: string[];
    buttonLabel: string;
  };
  hero: {
    heading: string;
    ctaLabel: string;
    imageURL: string;
    paragraph: string;
  };
  cards: Card[];
};
