module.exports = (stringSimilarFactory, similarity) => function(t) {
    const StringSimilar = stringSimilarFactory(similarity)

    t.test('if the needle and haystack are empty, it returns 1', function(t) {
        t.equal(new StringSimilar('').endsWith(''), 1)
        t.end()
    })

    t.test('if the needle is empty, it returns 1', function(t) {
        t.equal(new StringSimilar('foobar').endsWith(''), 1)
        t.end()
    })

    t.test('if just the haystack is empty, it returns 0', function(t) {
        t.equal(new StringSimilar('').endsWith('foo'), 0)
        t.end()
    })

    t.test('if string ends with the same string, it returns 1', function(t) {
        t.equal(new StringSimilar('foobar').endsWith('bar'), 1)
        t.end()
    })

    t.test('if string end with a totally different string, it returns 0', function(t) {
        t.equal(new StringSimilar('foobar').endsWith('foo'), 0)
        t.end()
    })

    t.test('if string end with a quite different string, it returns a number between 0 and 1', function(t) {
        const startChunk = 'foo'
        const endChunk = 'bar'
        const a = startChunk + endChunk
        const b = 'car'
        t.equal(new StringSimilar(a).endsWith(b), similarity(endChunk, b))
        t.end()
    })
}
