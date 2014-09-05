'use strict';

var test = require('tape');

var headingLevel = require('require-main')();

test('headingLevel()', function(t) {
  t.plan(6);

  t.strictEqual(
    headingLevel('h1'), 1,
    'should extract heading level from tag name.'
  );

  t.strictEqual(
    headingLevel('H2'), 2,
    'should extract heading level from tag name of upper case.'
  );

  t.strictEqual(
    headingLevel('3h'), null,
    'should return null if it takes a non-standard tag name.'
  );

  t.ok(
    headingLevel('h0') === null && headingLevel('h7') === null,
    'should return null if it takes a non-standard heading tag name.'
  );

  t.strictEqual(
    headingLevel('div'), null,
    'should return null if it takes a non-heading tag name.'
  );

  t.throws(
    headingLevel.bind(null, 1), /TypeError/,
    'should throw an error if it takes a non-string value.'
  );
});
