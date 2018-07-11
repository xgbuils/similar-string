module.exports = (stringSimilarFactory, similarity) => function(t) {
    const StringSimilar = stringSimilarFactory(similarity)

    t.test('if the needle and haystack are empty, it returns 1', function(t) {
        t.equal(new StringSimilar('').includes(''), 1)
        t.end()
    })

    t.test('if the needle is empty, it returns 1', function(t) {
        t.equal(new StringSimilar('foobar').includes(''), 1)
        t.end()
    })

    t.test('if just the haystack is empty, it returns 0', function(t) {
        t.equal(new StringSimilar('').includes('foo'), 0)
        t.end()
    })

    t.test('if string includes the same string, it returns 1', function(t) {
        t.equal(new StringSimilar('foobarfizzbuzz').includes('fizz'), 1)
        t.end()
    })

    t.test('if string does not include a quite similar string, it returns 0', function(t) {
        t.equal(new StringSimilar('foobarfizzbuzz').includes('cell'), 0)
        t.end()
    })

    t.test('if string includes a quite similar string, it returns a number between 0 and 1', function(t) {
        const includedChunk = 'fizz'
        const similarChunk = 'filz'
        const string = `foobar${includedChunk}buzz`
        t.equal(new StringSimilar(string).includes(similarChunk), similarity(includedChunk, similarChunk))
        t.end()
    })
}
