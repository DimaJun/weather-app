import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser
    },
    ...pluginJs.configs.recommended,
    rules: {
      'no-console': 'off', // Разрешить использование console.log
      'no-unused-vars': 'warn', // Предупреждать о неиспользуемых переменных
      'indent': ['error', 2], // Использовать два пробела для отступов
    }
  }
];
