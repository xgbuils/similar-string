module.exports = (stringSimilarFactory, similarity) => function(t) {
    const StringSimilar = stringSimilarFactory(similarity)

    t.test('if the two strings are empty, it returns 1', function(t) {
        t.equal(new StringSimilar('').equals(''), 1)
        t.end()
    })

    t.test('if strings are equal, it returns 1', function(t) {
        t.equal(new StringSimilar('foo').equals('foo'), 1)
        t.end()
    })

    t.test('if string are totally different, it returns 0', function(t) {
        t.equal(new StringSimilar('foo').equals('bar'), 0)
        t.end()
    })

    t.test('if string quite different, it returns a number between 0 and 1', function(t) {
        const a = 'foo'
        const b = 'poo'
        t.equal(new StringSimilar(a).equals(b), similarity(a, b))
        t.end()
    })
}
