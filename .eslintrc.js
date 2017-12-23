/* global module */

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
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-underscore-dangle': 0,

    // prettier
    'prettier/prettier': 2,

    // eslint-plugin-ember
    'ember/avoid-leaking-state-in-ember-objects': 2,
    'ember/no-empty-attrs': 2,
    'ember/no-jquery': 2,
    'ember/no-observers': 2,
    'ember/use-ember-get-and-set': 2,
    'ember/alias-model-in-controller': 1
  }
};
