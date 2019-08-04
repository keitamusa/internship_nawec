
function intersection(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {
      let result = 0;
      if (arr1[i] === arr2[j]) {
        result = arr2[j];
        return result;
      }
    }
  }
}

function A_plus_B(arr1, arr2) {

  let num1 = arr1.unshift();
  let num2 = arr2.unshift();
  if (num1 != result && num2 != result) {
    let total = 0;
    total = num1 + num2;
    return total;
  }
}

let result = intersection([3, 8, 7, 5, 6, 2, 9], [3, 10, 8, 6, 6, 4, 5]);
let ab = A_plus_B([3, 8, 7, 5, 6, 2, 9], [3, 10, 8, 6, 6, 4, 5]);
let jaccard_similarity = result / (ab - result);
console.log(jaccard_similarity);