# heading-level.js

[![Bower version](https://badge.fury.io/bo/heading-level.svg)](http://badge.fury.io/bo/heading-level)
[![NPM version](https://badge.fury.io/js/heading-level.svg)](http://badge.fury.io/js/heading-level)
[![Build Status](https://travis-ci.org/shinnn/heading-level.js.svg?branch=master)](https://travis-ci.org/shinnn/heading-level.js)
[![devDependency Status](https://david-dm.org/shinnn/heading-level.js/dev-status.svg)](https://david-dm.org/shinnn/heading-level.js#info=devDependencies)

Extract a valid heading level (1 - 6) from a tag name

```javascript
headingLevel('h1'); //=> 1
headingLevel('H6'); //=> 6

headingLevel('h0'); //=> null
headingLevel('h7'); //=> null
headingLevel('div'); //=> null

// ... <h1 id='blog-title'></h1> ...
var elm = document.getElementById('blog-title');
headingLevel(elm.tagName); //=> 1
```

## Installation

### Install with package manager

#### [npm](https://www.npmjs.org/)

```
npm i --save heading-level
```

#### [Bower](http://bower.io/)

```
bower i --save heading-level
```

#### [Component](http://component.io/)

```
component install shinnn/heading-level.js
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/heading-level.js/master/dist/heading-level.js "view raw")

## API

### headingLevel(tagName)

Return: `Number` (1 - 6) or `null`

It returns a `Number` of heading level, when the argument is a [heading tag name](http://www.w3.org/TR/html-markup/elements.html), such as `"h3"` and `"H4"`.

It returns `null` when the argument is not a heading tag name.

It throws an error when the argument is not a `String`.

```javascript
var result = [];
for(var i = 0; i <= 7; i++) {
  result.push(headingLevel('h' + i));
}

result; //=> [null, 1, 2, 3, 4, 5, 6, null]
```

```javascript
var foo = document.createElement('h1');
var bar = document.createElement('div');

headingLevel(foo.tagName); //=> 1
headingLevel(bar.tagName); //=> null
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
