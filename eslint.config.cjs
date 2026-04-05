const { FlatCompat } = require("@eslint/eslintrc");
const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  // Include Next.js recommended rules via FlatCompat
  ...compat.extends("next/core-web-vitals"),
];
