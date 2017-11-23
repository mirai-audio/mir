module.exports = {
  env: {
    embertest: true
  },
  extends: '../.eslintrc.js',
  rules: {
    // relax
    'func-names': 0,
    'prefer-const': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': 0,

    // eslint-plugin-ember
    'ember/no-jquery': 1,
    'ember/use-ember-get-and-set': 0,
    'ember/avoid-leaking-state-in-components': 0,
    'ember/named-functions-in-promises': 0
  }
};
