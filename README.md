# heading-level.js

[![NPM version](https://img.shields.io/npm/v/heading-level.svg)](https://www.npmjs.org/package/heading-level)
[![Bower version](https://img.shields.io/bower/v/heading-level.svg)](https://github.com/shinnn/heading-level.js/releases)
[![Build Status](https://travis-ci.org/shinnn/heading-level.js.svg?branch=master)](https://travis-ci.org/shinnn/heading-level.js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/heading-level.js.svg)](https://coveralls.io/r/shinnn/heading-level.js)
[![devDependency Status](https://david-dm.org/shinnn/heading-level.js/dev-status.svg)](https://david-dm.org/shinnn/heading-level.js#info=devDependencies)

Extract a valid heading level (1 - 6) from a tag name

```javascript
headingLevel('h1'); //=> 1
headingLevel('H6'); //=> 6

headingLevel('h0'); //=> null
headingLevel('h7'); //=> null
headingLevel('div'); //=> null

// ... <h1 id='blog-title'></h1> ...
const elm = document.getElementById('blog-title');
headingLevel(elm.tagName); //=> 1
```

## Installation

### Install with package manager

#### [npm](https://www.npmjs.com/)

```
npm install heading-level
```

#### [Bower](http://bower.io/) 

```
bower install heading-level
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/heading-level.js/master/browser.js "view raw")

## API

### headingLevel(tagName)

Return: `Number` (1 - 6) or `null`

It returns a `Number` of heading level, when the argument is a [heading tag name](https://www.w3.org/TR/html-markup/elements.html), such as `"h3"` and `"H4"`.

It returns `null` when the argument is not a heading tag name.

It throws an error when the argument is not a `String`.

```javascript
const result = [];
for(let i = 0; i <= 7; i++) {
  result.push(headingLevel('h' + i));
}

result; //=> [null, 1, 2, 3, 4, 5, 6, null]
```

```javascript
const foo = document.createElement('h1');
const bar = document.createElement('div');

headingLevel(foo.tagName); //=> 1
headingLevel(bar.tagName); //=> null
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
