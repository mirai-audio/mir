module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['ember', 'prettier'],
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  env: {
    browser: true,
    node: true
  },
  globals: {
    expectAssertion: true,
    expectDeprecation: true,
    expectNoDeprecation: true,
    expectWarning: true,
    expectNoWarning: true,
    ignoreAssertion: true,
    ignoreDeprecation: true,

    // required for ember-cli-mirage
    server: true,

    // A safe subset of 'browser:true':
    window: true,
    console: true,
    document: true,
    Symbol: true,
    WeakMap: true
  },
  rules: {
    // enforce
    'no-console': [2, { allow: ['warn', 'error'] }],

    // prettier
    'prettier/prettier': 2,

    // eslint-plugin-ember
    'ember/no-old-shims': 2,
    'ember/new-module-imports': 2,
    'ember/no-jquery': 2,
    'ember/local-modules': 1,
    'ember/alias-model-in-controller': 1,
    'ember/named-functions-in-promises': 0,

    // relax
    'no-underscore-dangle': 0
  }
};
