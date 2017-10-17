module.exports = {
  env: {
    embertest: true
  },
  rules: {
    // enforce
    'ember/no-old-shims': 'error',
    'ember/new-module-imports': 'error',
    'ember/no-jquery': 'warn',

    // relax
    'comma-dangle': 0,
    'func-names': 0,
    'prefer-const': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': 0,
    'ember/use-ember-get-and-set': 0,
    'ember/avoid-leaking-state-in-components': 0,
    'ember/named-functions-in-promises': 'off',
  },
};
