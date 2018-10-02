'use strict';

module.exports = {
  extends: 'recommended',

  rules: {
    // style
    'attribute-indentation': false,/* {
      'element-open-end': 'last-attribute',
      'mustache-open-end': 'last-attribute'
    } */,
    quotes: 'double',

    // enabled rules (in addition to 'recommended')
    'no-bare-strings': true,
    'no-duplicate-attributes': true,
    'no-inline-styles': true
  }
};
