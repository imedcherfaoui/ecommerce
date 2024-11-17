module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    /* 'prettier/prettier': ['error', { endOfLine: 'auto' }], */
    'no-console': 'off', // Allow console statements
    'simple-import-sort/imports': 'off', // Disable import sorting rule
    'prettier/prettier': 'off', // Disable Prettier rules
  },
}
