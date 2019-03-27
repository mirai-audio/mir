'use strict';

module.exports = {
  extends: 'recommended',

  rules: {
    // style
    'attribute-indentation': false /* {
      'element-open-end': 'last-attribute',
      'mustache-open-end': 'last-attribute'
    } */,

    // enabled rules (in addition to 'recommended')
    'no-bare-strings': true, // encourage translated strings
    'no-implicit-this': {
      // encourage use of angle bracket syntax
      allow: ['head-layout']
    }
  }
};
