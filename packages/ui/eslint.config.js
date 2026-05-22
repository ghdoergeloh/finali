import { defineConfig } from "eslint/config";

import { baseConfig } from "@finali/eslint-config/base";
import { reactConfig } from "@finali/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig,
  {
    rules: {
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
);
