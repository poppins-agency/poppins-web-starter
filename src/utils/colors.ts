import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const { theme } = resolveConfig(tailwindConfig);

export const primary = theme?.colors?.primary;
export const secondary = theme?.colors?.secondary;
export const tertiary = theme?.colors?.tertiary;

export type ColorStrings = "primary-500" | "secondary-500" | "tertiary-500";

export const getBorderColor = (color: ColorStrings) => {
  return `border-${color}`;
};

export const getBGColor = (color: ColorStrings) => {
  return `border-${color}`;
};
