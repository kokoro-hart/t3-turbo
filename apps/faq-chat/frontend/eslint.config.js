import baseConfig, { restrictEnvAccess } from "@dir/eslint-config/base";
import nextjsConfig from "@dir/eslint-config/nextjs";
import reactConfig from "@dir/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
