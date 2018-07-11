# similar-string

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

This library provides string extrapolated relations based on string similarity range between 0 and 1.

## Install

``` bash
npm install similar-string --save
```

## Why?

There are several assertions with strings like:

``` JavaScript
const _ = require('lodash')

const x = 'foobar'
const y = 'foo'

x === y // Is string x the same as y?
x.includes(y) // Does x include the string y?
_.startsWith(x, y) // Does x starts with prefix y
_.endsWith(x, y) // Does x ends with the suffix y
```

These assertions could be `true` or `false`. This package provides the same relations based on fuzzy logic. Then, we don't  have boolean results. Instead of that, we have a [0, 1] range to know the partial truth value:

``` JavaScript
const stringDistance = require('leven') // stringDistance('abc', 'edc') === 2
const stringSimilarity = (a, b) => {
	const maxLength = Math.max(a.length, b.length)
	return maxLength === 0 ? 1 : (maxLength - stringDistance(a, b)) / maxLength
} // stringSimilarity('abc', 'edc') === 0.3333333

const SimilarString = require('similar-string')(stringSimilarity)

const x = new SimilarString('foobar')
const y = 'poo'

x.equals(y) // 0.3333333333333333
x.includes(y) // 0.6666666666666666
x.startsWith(y) // 0.6666666666666666
x.endsWith(y) // 0
```

## Support
- Node.js >=6

## License
MIT

  [1]: https://travis-ci.org/xgbuils/similar-string.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/similar-string
  [3]: https://badge.fury.io/js/similar-string.svg
  [4]: https://badge.fury.io/js/similar-string
  [5]: https://coveralls.io/repos/github/xgbuils/similar-string/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/similar-string?branch=master
  [7]: https://david-dm.org/xgbuils/similar-string.svg
  [8]: https://david-dm.org/xgbuils/similar-string