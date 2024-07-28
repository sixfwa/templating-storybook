import { businessData } from "./data/business";
import { corporateData } from "./data/corporate";
import { lightData } from "./data/light";
import { DesignElement } from "./types";

export const getDesignElements = async (): Promise<DesignElement> => {
  const theme = process.env["theme"];
  console.log(theme);

  if (theme === "business") return businessData;
  else if (theme === "light") return lightData;

  return corporateData;
};
