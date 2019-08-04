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

// (function () {

//     function termFreqMap(str) {
//         var words = str.split(' ');
//         var termFreq = {};
//         words.forEach(function (w) {
//             termFreq[w] = (termFreq[w] || 0) + 1;
//         });
//         return termFreq;
//     }

//     function addKeysToDict(map, dict) {
//         for (var key in map) {
//             dict[key] = true;
//         }
//     }

//     function termFreqMapToVector(map, dict) {
//         var termFreqVector = [];
//         for (var term in dict) {
//             termFreqVector.push(map[term] || 0);
//         }
//         return termFreqVector;
//     }

//     function vecDotProduct(vecA, vecB) {
//         var product = 0;
//         for (var i = 0; i < vecA.length; i++) {
//             product += vecA[i] * vecB[i];
//         }
//         return product;
//     }

//     function vecMagnitude(vec) {
//         var sum = 0;
//         for (var i = 0; i < vec.length; i++) {
//             sum += vec[i] * vec[i];
//         }
//         return Math.sqrt(sum);
//     }

//     function cosineSimilarity(vecA, vecB) {
//         return vecDotProduct(vecA, vecB) / (vecMagnitude(vecA) * vecMagnitude(vecB));
//     }

//     Cosinesimilarity = function textCosineSimilarity(strA, strB) {
//         var termFreqA = termFreqMap(strA);
//         var termFreqB = termFreqMap(strB);

//         var dict = {};
//         addKeysToDict(termFreqA, dict);
//         addKeysToDict(termFreqB, dict);

//         var termFreqVecA = termFreqMapToVector(termFreqA, dict);
//         var termFreqVecB = termFreqMapToVector(termFreqB, dict);

//         return cosineSimilarity(termFreqVecA, termFreqVecB);

//     }
// })();


function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function xy_product(arr1, arr2) {

    let data = [];
    for (let i = 0; i < arr1.length; i++) {
        data.push(arr1[i] * arr2[i]);
    }
    let total = sum(data);
    return total;
}

function squaring(arr) {
    let data = [];
    for (let i = 0; i < arr.length; i++) {
        data.push(arr[i] * arr[i]);
    }
    let total = sum(data);
    return total;
}

function squareroot(number) {
    let result = 0;
    result = Math.sqrt(number);
    return result;
}

let a = [3, 8, 7, 5, 2, 9];
let b = [10, 8, 6, 6, 4, 5];

let sum_of_ab = xy_product(a, b);
let sum_of_a_squared = squareroot(squaring(a));
let sum_of_b_squared = squareroot(squaring(b));

let cosine_similarity = sum_of_ab / (sum_of_a_squared * sum_of_b_squared);

console.log(cosine_similarity);
