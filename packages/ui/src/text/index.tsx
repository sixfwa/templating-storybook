import "./text.css";

interface ParagraphProps {
  theme: "light" | "dark" | "business" | "corporate";
  children: React.ReactNode;
}

interface HeadingProps {
  theme: "light" | "dark" | "business" | "corporate";
  text: string;
}

export const Paragraph = ({ theme, children }: ParagraphProps) => {
  return (
    <p className={["paragraph", `paragraph--${theme}`].join(" ")}>{children}</p>
  );
};

export const Heading = ({ theme, text }: HeadingProps) => {
  return <h1 className={["heading", `heading--${theme}`].join(" ")}>{text}</h1>;
};
