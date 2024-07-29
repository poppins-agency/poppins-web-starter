import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const { theme } = resolveConfig(tailwindConfig);

export const primary = theme?.colors?.primary;
export const secondary = theme?.colors?.secondary;
export const tertiary = theme?.colors?.tertiary;
