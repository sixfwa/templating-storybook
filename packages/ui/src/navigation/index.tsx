import Button from "../button";
import "./navigation.css";

interface NavigationProps {
  logo: string;
  theme: "light" | "dark" | "business" | "corporate";
  navLinks: string[];
  buttonLabel: string;
}

const Navigation = ({
  logo,
  theme,
  navLinks,
  buttonLabel,
}: NavigationProps) => {
  return (
    <nav className={["navigation", `navigation--${theme}`].join(" ")}>
      <a href="/" className="logo">
        {logo}
      </a>
      <div className="nav-items">
        {navLinks.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
        <Button
          theme={theme}
          label={buttonLabel}
          status="primary"
          size="medium"
        />
      </div>
    </nav>
  );
};

export default Navigation;
