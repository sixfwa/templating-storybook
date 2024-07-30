import Card from "@repo/ui/card";
import Hero from "@repo/ui/hero";
import Navigation from "@repo/ui/navigation";
import { getDesignElements } from "./functions";

export const metadata = {
  title: `version: ${process.env.theme}`,
};

export default async function Home() {
  const designElements = await getDesignElements();
  return (
    <main>
      <Navigation
        buttonLabel={designElements?.navigation.buttonLabel}
        navLinks={designElements?.navigation.navLinks}
        logo={designElements?.navigation.logo}
        theme={designElements?.theme}
      />
      <Hero
        heading={designElements?.hero.heading}
        ctaLabel={designElements?.hero.ctaLabel}
        theme={designElements?.theme}
        imageURL={designElements?.hero.imageURL}
        paragraph={designElements?.hero.paragraph}
      />
      <div className="flex flex-row">
        {designElements?.cards.map((card) => (
          <Card
            key={card.id}
            theme={designElements.theme}
            paragraph={card.paragraph}
            heading={card.heading}
            imageURL={card.imageURL}
          />
        ))}
      </div>
    </main>
  );
}
