import "./card.css";
import { Heading, Paragraph } from "../text";

interface CardProps {
  theme: "light" | "dark" | "business" | "corporate";
  heading: string;
  paragraph: string;
  imageURL: string;
}

const Card = ({ theme, heading, paragraph, imageURL }: CardProps) => {
  return (
    <div className={["card-container", `card-container--${theme}`].join(" ")}>
      <Heading text={heading} theme={theme} />
      <Paragraph theme={theme}>{paragraph}</Paragraph>
      <img src={imageURL} alt="earth" width="80%" className="image" />
    </div>
  );
};

export default Card;
