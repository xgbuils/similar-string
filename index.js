const findSimilar = (similarityFunction, a, b) => {
    let maxSimilarity = 0
    let indexOfMax = -1
    for (let index = -a.length; index <= b.length; ++index) {
        const end = index + a.length
        const chunk = b.substring(index, end)
        const similarity = similarityFunction(chunk, a)
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity
            indexOfMax = index
        }
    }
    return {
        similarity: maxSimilarity,
        index: indexOfMax
    }
}

module.exports = similarityFunction => {
    return class SimilarString {
        constructor(string) {
            this.string = string
        }
        equals(string) {
            return similarityFunction(this.string, string)
        }
        startsWith(string) {
            const chunk = this.string.substring(0, string.length)
            return similarityFunction(chunk, string)
        }
        endsWith(string) {
            const index = this.string.length - string.length
            const chunk = this.string.substring(index)
            return similarityFunction(chunk, string)
        }
        includes(string) {
            return findSimilar(similarityFunction, string, this.string).similarity
        }
        indexOf(string) {
            return findSimilar(similarityFunction, string, this.string).index
        }
    }
}
