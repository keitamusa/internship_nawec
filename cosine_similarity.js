// function similarities(...arr) {
//   var cosine_similarity = [];

//   /**
//  * passing unknown number of parameters
//  * assuming each parameter is a document.
//  * 
//  * 1 -> index it
//  * 2 -> process each index of a document
//  */
//   for (var index = 0; index < arr.length; index++) {

//     //now process each document
//     for (var doc = 0; doc < arr[index].length; doc++) {

//       //get the cosine similarities for each document
//       cosine_similarity[doc] = Math.cos(arr[doc]);
//     }
//     return cosine_similarity;
//   }

// }

// cos = similarities(2, 3, 4, 5);
// let x = [5.2, 5.7, 5.0, 4.2];
// let y = [1, 2, 3, 4];

// console.log("computing the cosine similarities");
// console.log(cos);

(function () {

    function termFreqMap(str) {
        var words = str.split(' ');
        var termFreq = {};
        words.forEach(function (w) {
            termFreq[w] = (termFreq[w] || 0) + 1;
        });
        return termFreq;
    }

    function addKeysToDict(map, dict) {
        for (var key in map) {
            dict[key] = true;
        }
    }

    function termFreqMapToVector(map, dict) {
        var termFreqVector = [];
        for (var term in dict) {
            termFreqVector.push(map[term] || 0);
        }
        return termFreqVector;
    }

    function vecDotProduct(vecA, vecB) {
        var product = 0;
        for (var i = 0; i < vecA.length; i++) {
            product += vecA[i] * vecB[i];
        }
        return product;
    }

    function vecMagnitude(vec) {
        var sum = 0;
        for (var i = 0; i < vec.length; i++) {
            sum += vec[i] * vec[i];
        }
        return Math.sqrt(sum);
    }

    function cosineSimilarity(vecA, vecB) {
        return vecDotProduct(vecA, vecB) / (vecMagnitude(vecA) * vecMagnitude(vecB));
    }

    Cosinesimilarity = function textCosineSimilarity(strA, strB) {
        var termFreqA = termFreqMap(strA);
        var termFreqB = termFreqMap(strB);

        var dict = {};
        addKeysToDict(termFreqA, dict);
        addKeysToDict(termFreqB, dict);

        var termFreqVecA = termFreqMapToVector(termFreqA, dict);
        var termFreqVecB = termFreqMapToVector(termFreqB, dict);

        return cosineSimilarity(termFreqVecA, termFreqVecB);
    }
})();

vect_a = [2, 1, 0, 2, 0, 1, 1, 1];
vect_b = [2, 1, 1, 1, 1, 0, 1, 1];