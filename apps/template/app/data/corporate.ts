import { DesignElement } from "../types";

export const corporateData: DesignElement = {
  theme: "corporate",
  navigation: {
    logo: "Careers",
    navLinks: ["Open Positions", "Company Benefits", "Our Values"],
    buttonLabel: "Apply",
  },
  hero: {
    heading: "We are HIRING!",
    ctaLabel: "See Open Positions",
    imageURL:
      "https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  cards: [
    {
      id: 1,
      heading: "Have a Huge Impact",
      paragraph:
        "We are changing the world. With your help, we can go to the moon!",
      imageURL:
        "https://images.unsplash.com/photo-1690980568085-002453cb810e?q=80&w=2975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      heading: "Diversity",
      paragraph:
        "Equity and inclusion is at the heart of everything that we do.",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1661901655138-bacf43300134?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      heading: "Hybrid Working",
      paragraph: "Work in a hybrid environment of your choosing",
      imageURL:
        "https://images.unsplash.com/photo-1664575197229-3bbebc281874?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};
