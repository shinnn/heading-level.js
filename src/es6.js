'use strict';

function headingLevel(tagName) {
  if (typeof tagName !== 'string') {
    throw new Error(`${ tagName } is not a string of tag name.`);
  }
  
  if (/^h\d/mi.test(tagName)) {
    var level = 1 * tagName.charAt(1);
    if (1 <= level && level <= 6) {
      return level;
    }
  }

  return null;
}
