module.exports = {
  env: {
    embertest: true
  },
  extends: '../.eslintrc.js',
  rules: {
    'func-names': 0,
    'prefer-const': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': 0,

    // eslint-plugin-ember
    'ember/no-jquery': 1,
    'ember/use-ember-get-and-set': 1,
    'ember/avoid-leaking-state-in-ember-objects': 0
  }
};
