'use strict';
/*
 * compilation via Browserlist
 * https://github.com/ai/browserslist
 * tooling: http://browserl.ist/
 */

const browsers = ['last 1 Chrome versions', 'last 1 Firefox versions'];

const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  // '> 0.5%' /* http://browserl.ist/?q=%3E+0.5%25 */
  browsers.push('last 1 Safari versions');
  browsers.push('ie 11');
}

module.exports = {
  browsers
};
