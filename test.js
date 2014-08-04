'use strict';

var assert = require('assert');

var headingLevel = require('require-main')();

describe('headingLevel()', function() {
  it('should extract heading level from tag name.', function() {
    assert.strictEqual(headingLevel('h1'), 1);
  });
  it('should extract heading level from tag name of upper case.', function() {
    assert.strictEqual(headingLevel('H2'), 2);
  });
  it('should return null if it takes a non-standard tag name.', function() {
    assert.strictEqual(headingLevel('3h'), null);
  });
  it('should return null if it takes a non-standard heading tag name.', function() {
    assert.strictEqual(headingLevel('h0'), null);
    assert.strictEqual(headingLevel('h7'), null);
  });
  it('should return null if it takes a non-heading tag name.', function() {
    assert.strictEqual(headingLevel('div'), null);
  });
  it('should throw an error if it takes a non-string value.', function() {
    assert.throws(headingLevel.bind(null, 1), TypeError);
  });
});
