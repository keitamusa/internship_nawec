function sum(arr) {
  var x = 0.0;
  for (var i = 0; i < arr.length; i++) {
    x += arr[i];
  }
  return x;
}

function mean(arr) {
  return sum(arr) / arr.length;
}

function residual(arr) {
  var p = [];
  var m = mean(arr);
  for (var i = 0; i < arr.length; i++) {
    p.push(arr[i] - m);
  }
  return p;
}

function xy(arr1, arr2) {
  var z = [];
  if (arr1.length != arr2.length) {
    console.log("arrays are not of the same length");
  } else {
    for (var i = 0; i < arr1.length; i++) {
      z.push(arr1[i] * arr2[i]);
    }
  }
  return z;
}

function x_square(arr) {
  var x = [];
  for (var i = 0; i < arr.length; i++) {
    x.push(arr[i] * arr[i]);
  }
  return x;
}

function b(x, y) {
  var n = x.length;
  var sum_xy = sum(xy(x, y));

  return (
    ((n * (sum_xy - sum(x) * sum(y)))) / (n * (Math.pow(sum(x), 2) - sum(x_square(x))))
  );
}

function a(x, y) {
  var sum_y;
}

var x = [32, 20, 28, 29];
var y = [30, 34, 32, 28];

var x_y = xy(x, y);
var result = sum(x) / x.length;
var avg = mean(x);
var res = residual(x);

console.log(b(x, y));
console.log(x_y);
console.log(res);
console.log(avg);
console.log(result);

// function linearRegression(y, x) {
//   var lr = {};
//   var n = y.length;
//   var sum_x = 0;
//   var sum_y = 0;
//   var sum_xy = 0;
//   var sum_x_all_sqr = 0;

//   for (var i = 0; i < y.length; i++) {
//     sum_x += x[i];
//     sum_y += y[i];
//     sum_xy += x[i] * y[i];
//     sum_x_sqr_all += x[i] * x[i];

//   }

// m = ( n*(sum_xy - (sum_x * sum_y)) / ( n*(sum_x) - (n*(sum_x_all_sqr)) )

// lr["slope"] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
// lr["intercept"] = (sum_y - lr.slope * sum_x) / n;
// lr["r2"] = Math.pow(
//   (n * sum_xy - sum_x * sum_y) /
//     Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)),
//   2
// );
// return lr;
// }

// var known_y = [1, 2, 3, 4];
// var known_x = [5.2, 5.7, 5.0, 4.2];

// var result = linearRegression(known_y, known_x);

// console.log(result);
