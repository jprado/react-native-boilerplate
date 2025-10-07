module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
    'perfectionist',
    'react',
    'react-hooks',
    'react-refresh',
    'testing-library',
    'unicorn',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    'react-native/react-native': true,
    jest: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // TypeScript rules
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/dot-notation': [2, { allowKeywords: true }],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    
    // General rules
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-magic-numbers': [
      2,
      { ignore: [-1, 0, 1, 2, 3, 4, 5, 6], ignoreArrayIndexes: true },
    ],
    
    // Import rules
    'import/no-unresolved': 0, // handled by TypeScript
    
    // React rules
    'react-refresh/only-export-components': 0,
    'react/forbid-component-props': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-max-depth': [2, { max: 10 }],
    'react/jsx-no-bind': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-multi-comp': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: true,
        functions: 'defaultArguments',
      },
    ],
    
    // Unicorn rules
    'unicorn/filename-case': 0,
    'unicorn/no-keyword-prefix': 0,
    'unicorn/no-useless-undefined': 0,
    'unicorn/prefer-top-level-await': 0, // not valid on RN for the moment
    'unicorn/prevent-abbreviations': [
      2,
      {
        allowList: {
          env: true,
          Param: true,
          props: true,
          Props: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/theme/*.ts'],
      rules: {
        'no-magic-numbers': 0,
      },
    },
    {
      files: ['*.conf.js', '*.config.js', '*.setup.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        'no-undef': 0,
        'unicorn/prefer-module': 0,
      },
    },
    {
      files: ['**/*.spec.{js,ts,jsx,tsx}', '**/*.test.{js,ts,jsx,tsx}'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/expect-expect': 0,
      },
    },
  ],
  ignorePatterns: ['plugins/**'],
};