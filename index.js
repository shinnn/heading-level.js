/*!
 * heading-level.js | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/heading-level.js
*/
module.exports = function headingLevel(tagName) {
  'use strict';

  if (typeof tagName !== 'string') {
    throw new TypeError(
      String(tagName) +
      ' is not a string. Expected a header tag name, e.g. "h1", "H2".'
    );
  }

  if (/^h\d/mi.test(tagName)) {
    var level = Number(tagName.charAt(1));
    if (1 <= level && level <= 6) {
      return level;
    }
  }

  return null;
};
