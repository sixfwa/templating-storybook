import Card from "@repo/ui/card";

interface CardElementProps {
  theme: "light" | "dark" | "business" | "corporate";
  heading: string;
  paragraph: string;
  imageURL: string;
}

export const CardElement = ({
  theme,
  heading,
  paragraph,
  imageURL,
}: CardElementProps) => {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Card
        theme={theme}
        heading={heading}
        paragraph={paragraph}
        imageURL={imageURL}
      />
    </div>
  );
};
