module.exports = (stringSimilarFactory, similarity) => function(t) {
    const StringSimilar = stringSimilarFactory(similarity)

    t.test('if the needle and haystack are empty, it returns 1', function(t) {
        t.equal(new StringSimilar('').startsWith(''), 1)
        t.end()
    })

    t.test('if the needle is empty, it returns 1', function(t) {
        t.equal(new StringSimilar('foobar').startsWith(''), 1)
        t.end()
    })

    t.test('if just the haystack is empty, it returns 0', function(t) {
        t.equal(new StringSimilar('').startsWith('foo'), 0)
        t.end()
    })

    t.test('if string starts with the same string, it returns 1', function(t) {
        t.equal(new StringSimilar('foobar').startsWith('foo'), 1)
        t.end()
    })

    t.test('if string starts with a totally different string, it returns 0', function(t) {
        t.equal(new StringSimilar('foobar').startsWith('bar'), 0)
        t.end()
    })

    t.test('if string start with a quite different string, it returns a number between 0 and 1', function(t) {
        const startChunk = 'foo'
        const endChunk = 'bar'
        const a = startChunk + endChunk
        const b = 'poo'
        t.equal(new StringSimilar(a).startsWith(b), similarity(startChunk, b))
        t.end()
    })
}
