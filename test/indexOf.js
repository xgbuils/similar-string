module.exports = (stringSimilarFactory, similarity) => function(t) {
    const StringSimilar = stringSimilarFactory(similarity)

    t.test('if the needle and haystack are empty, it returns 0', function(t) {
        t.equal(new StringSimilar('').indexOf(''), 0)
        t.end()
    })

    t.test('if the needle is empty, it returns 0', function(t) {
        t.equal(new StringSimilar('foobar').indexOf(''), 0)
        t.end()
    })

    t.test('if just the haystack is empty, it returns -1', function(t) {
        t.equal(new StringSimilar('').indexOf('foo'), -1)
        t.end()
    })

    t.test('if string includes the same string, it returns the index where is found', function(t) {
        t.equal(new StringSimilar('foobarfizzbuzz').indexOf('fizz'), 6)
        t.end()
    })

    t.test('if string does not include a quite similar string, it returns -1', function(t) {
        t.equal(new StringSimilar('foobarfizzbuzz').indexOf('cell'), -1)
        t.end()
    })

    t.test('if string includes a quite similar string, it returns the index of first chunk with the maximum similarity', function(t) {
        const includedChunk = 'fizz'
        const similarChunk = 'lfiz'
        const string = `foobar${includedChunk}buzz`
        t.equal(new StringSimilar(string).indexOf(similarChunk), 5)
        t.end()
    })
}
