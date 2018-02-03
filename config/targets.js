/*
 * compilation via Browserlist
 * https://github.com/ai/browserslist
 * tooling: http://browserl.ist/
 */

let browsers;
if (process.env.EMBER_ENV === 'development') {
  // development performance optimization: transpile for developers browsers
  browsers = ['last 1 Chrome versions', 'last 1 Firefox versions'];
} else {
  browsers = [
    // '> 0.5%' /* http://browserl.ist/?q=%3E+0.5%25 */
    'last 1 Chrome versions',
    'last 1 Firefox versions',
    'last 1 Safari versions'
  ];
}

module.exports = {
  browsers
};
