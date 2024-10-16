import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const { theme } = resolveConfig(tailwindConfig);

export const primary = theme?.colors?.primary;
export const secondary = theme?.colors?.secondary;
export const tertiary = theme?.colors?.tertiary;

export type ColorStrings = "primary" | "secondary" | "tertiary";

export const getBorderColor = (color: ColorStrings) => {
  switch (color) {
    case "primary":
      return `border-primary-500`;
    default:
      return "";
  }
};
