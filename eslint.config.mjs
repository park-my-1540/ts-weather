import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
    },

    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        quotes: ["error", "double"],
        "comma-dangle": "off",
        camelcase: "off",
        "no-console": "off",
        "no-unused-expressions": "off",
        "no-underscore-dangle": "off",
        "max-classes-per-file": "off",
        "remove-unused-variable": "off",
        "no-restricted-syntax": [
            "error",
            {
              "selector": "Literal[value='']",
              "message": "Empty strings ('') are not allowed."
            }
          ],
        "func-names": "off",
        "no-shadow": "off",
        "no-param-reassign": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "prefer-const": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["off"],
        "arrow-body-style": "off",

        "import/extensions": ["error", "ignorePackages", {
            js: "never",
            ts: "never",
        }],

        "prefer-destructuring": "off",
        "dot-notation": "off",
    },
}];