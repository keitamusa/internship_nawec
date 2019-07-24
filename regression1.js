

function total(arr) {
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
  return data;
}

function squaring(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    data.push(arr[i] * arr[i]);
  }
  return data;
}

function a(x, y) {
  let n = x.length;
  data =
    ((total(y) * total(squaring(x))) - (total(x) * total(xy_product(x, y)))) /
    ((n * total(squaring(x))) - (total(x) * total(x)));
  return data;
}

function b(x, y) {
  let n = x.length;
  data =
    ((n * (total(xy_product(x, y)))) - (total(x) * total(y))) /
    ((n * (total(squaring(x)))) - (total(x) * total(x)))

  return data;
}

function mean(arr) {
  let x = total(arr) / arr.length;
  return x;
}

function y_prime(a, b, arr) {
  let x = mean(arr);
  let y = a + b * (x);
  return y;
}

let x = [43, 21, 25, 42, 57, 59];
let y = [99, 65, 79, 75, 87, 81];

let a_value = a(x, y);
let b_value = b(x, y);
console.log(a_value);
console.log(b_value);

console.log(y_prime(a_value, b_value, x));

