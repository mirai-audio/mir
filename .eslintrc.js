module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
  ],
  'plugins': [
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    'expectAssertion': true,
    'expectDeprecation': true,
    'expectNoDeprecation': true,
    'expectWarning': true,
    'expectNoWarning': true,
    'ignoreAssertion': true,
    'ignoreDeprecation': true,

    // required for ember-cli-mirage
    'server': true,

    // A safe subset of 'browser:true':
    'window': true,
    'console': true,
    'document': true,
    'Symbol': true,
    'WeakMap': true,
  },
  rules: {
    // enforce
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // prettier
    'prettier/prettier': 'error',
    // eslint-plugin-ember
    'ember/no-old-shims': 'error',
    'ember/new-module-imports': 'error',
    'ember/no-jquery': 'error',
    'ember/local-modules': 'warn',

    // relax
    'no-underscore-dangle': 0,
    // eslint-plugin-ember
    'ember/alias-model-in-controller': 'warn',
    'ember/named-functions-in-promises': 0,
  }
};
