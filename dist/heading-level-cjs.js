/*!
 * heading-level.js | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/heading-level.js
*/
'use strict';

function headingLevel(tagName) {
  if (typeof tagName !== 'string') {
    throw new TypeError(tagName + 'is not a string.');
  }

  if (/^h\d/mi.test(tagName)) {
    var level = 1 * tagName.charAt(1);
    if (1 <= level && level <= 6) {
      return level;
    }
  }

  return null;
}

module.exports = headingLevel;
