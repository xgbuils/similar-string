const leven = require('leven')
const stringSimilarFactory = require('../')
const similarity = (a, b) => {
    const len = Math.max(a.length, b.length)
    return len === 0 ? 1 : (len - leven(a, b)) / len
}

const test = require('tape')
const tapSpec = require('tap-spec')

const equals = require('./equals')
const startsWith = require('./startsWith')
const endsWith = require('./endsWith')
const includes = require('./includes')
const indexOf = require('./indexOf')

const testSuites = [
    ['equals', equals],
    ['startsWith', startsWith],
    ['endsWith', endsWith],
    ['includes', includes],
    ['indexOf', indexOf]
]

test('similar-string', function(t) {
    testSuites.forEach(([name, testSuite]) => t.test(name, testSuite(stringSimilarFactory, similarity)))
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
