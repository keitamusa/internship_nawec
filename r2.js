function sum(arr) {
  let x = 0.0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i];
  }
  return x;
}

function mean(arr) {
  return sum(arr) / arr.length;
}

function residual(arr) {
  let p = [arr.length];
  let m = mean(arr);
  for (let i = 0; i < arr.length; i++) {
    p.push(arr[i] - m);
  }
  return p;
}

function xy_product(arr1, arr2) {
  let data = [arr1.length];
  for (let i = 0; i < arr1.length; i++) {
    data.push(arr1[i] * arr2[i]);
  }
  return data;
}

function standardDev(arr1, fig) {
  let n = [];
  n = arr1;
  let arr_length = n.length;
  let std = Math.sqrt((fig / arr_length), 2)
  return std;
  // var su = sum(residal(arr));

}

function residualSquare(arr) {
  let result = [arr.length];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}

function similarities(...arr) {
  var cosine_similarity = [];

  /**
 * passing unknown number of parameters
 * assuming each parameter is a document.
 * 
 * 1 -> index it
 * 2 -> process each index of a document
 */
  for (var index = 0; index < arr.length; index++) {
    /**
     * now process each document
     */
    for (var doc = 0; doc < arr[index].length; doc++) {
      /**
       * get the cosine similarities for each document
       */
      cosine_similarity[doc] = Math.cos(arr[doc]);
    }
    return cosine_similarity;
  }

}

cos = similarities(2, 3, 4, 5);
let x = [5.2, 5.7, 5.0, 4.2];
let y = [1, 2, 3, 4];

let x_residual = [];
let y_residual = [];
let x_by_y_residual = [];
let x_residual_sqrt = [];
let y_residual_sqrt = [];

x_residual = residual(x);
y_residual = residual(y);
x_by_y_residual = xy_product(x_residual, y_residual);

let sum_of_x_residual = sum(x_residual);
let sum_of_y_residual = sum(y_residual);
let sum_of_x_by_y_residual = sum(x_by_y_residual);

x_residual_sqrt = residualSquare(x_residual);
y_residual_sqrt = residualSquare(y_residual);
let std_dev_of_x = standardDev(x, sum(x_residual_sqrt));
let std_dev_of_y = standardDev(x, sum(y_residual_sqrt));

let r2 = Math.sqrt(((sum_of_x_by_y_residual) / (std_dev_of_x * std_dev_of_y)), 2) / (x.length);

// console.log(x_residual_sqrt);
// console.log(y_residual_sqrt);
// console.log(x_residual);
// console.log(y_residual);
// console.log(x_by_y_residual);
// console.log(sum_of_x_residual);
// console.log(sum_of_y_residual);
// console.log(sum_of_x_by_y_residual);
// console.log(std_dev_of_x);
// console.log(std_dev_of_y);

// console.log(r2);
console.log("computing the cosine similarities");
console.log(cos);