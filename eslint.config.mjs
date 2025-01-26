import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the 'react/no-unescaped-entities' rule
      "react/no-unescaped-entities": "off",

      // Allow <img> tag usage (disables warning about using <img> for images)
      "@next/next/no-img-element": "off",

      // Add any other custom rules or changes here
    },
  },
];

export default eslintConfig;
