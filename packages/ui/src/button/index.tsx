import "./button.css";

interface ButtonProps {
  label: string;
  status: "primary" | "secondary";
  theme: "light" | "dark" | "business" | "corporate";
  size: "small" | "medium" | "large";
}

const Button = ({ label, status, theme, size, ...props }: ButtonProps) => {
  return (
    <button
      className={[
        "button",
        `button--${status}-${theme}`,
        `button--${size}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
