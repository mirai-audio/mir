module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['ember', 'prettier'],
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  globals: {
    // required for ember-cli-mirage
    server: true
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-underscore-dangle': 0,

    // prettier
    'prettier/prettier': 2,

    // eslint-plugin-ember
    'ember/no-empty-attrs': 2,
    'ember/no-jquery': 2,
    'ember/use-ember-get-and-set': 2,
    'ember/alias-model-in-controller': 1
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
