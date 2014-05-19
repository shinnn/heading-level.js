'use strict';

var headingLevel = require(process.cwd() + '/dist/heading-level-node.js');
var assert = require('assert');

describe('headingLevel()', () => {
  it('should extract heading level from tag name.', () => {
    assert.strictEqual(headingLevel('h1'), 1);
  });
  it('should extract heading level from tag name of upper case.', () => {
    assert.strictEqual(headingLevel('H2'), 2);
  });
  it('should return null if it takes a non-standard tag name.', () => {
    assert.strictEqual(headingLevel('3h'), null);
  });
  it('should return null if it takes a non-standard heading tag name.', () => {
    assert.strictEqual(headingLevel('h0'), null);
    assert.strictEqual(headingLevel('h7'), null);
  });
  it('should return null if it takes a non-heading tag name.', () => {
    assert.strictEqual(headingLevel('div'), null);
  });
  it('should throw an error if it takes a non-string value.', () => {
    assert.throws(() => headingLevel(1));
  });
});
