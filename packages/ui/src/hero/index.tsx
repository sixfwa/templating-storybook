import "./hero.css";
import { Heading, Paragraph } from "../text";
import Button from "../button";

interface HeroProps {
  theme: "light" | "dark" | "business" | "corporate";
  imageURL: string;
  ctaLabel: string;
  heading: string;
  paragraph: string;
}

const Hero = ({ theme, ctaLabel, imageURL, heading, paragraph }: HeroProps) => {
  return (
    <section className={["hero", `hero--${theme}`].join(" ")}>
      <div className="hero-text-container">
        <Heading theme={theme} text={heading} />
        <Paragraph theme={theme}>{paragraph}</Paragraph>
        <Button
          theme={theme}
          label={ctaLabel}
          status="secondary"
          size="large"
        />
      </div>
      <div className="hero-image-container">
        <img className="hero-image" width="70%" src={imageURL} />
      </div>
    </section>
  );
};

export default Hero;
