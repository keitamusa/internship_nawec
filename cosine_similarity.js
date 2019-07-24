function cosinesim(A, B) {
  var dotproduct = 0;
  var mA = 0;
  var mB = 0;
  for (i = 0; i < A.length;) {
    dotproduct += (A[i] * B[i]);
    mA += (A[i] * A[i]);
    mB += (B[i] * B[i]);
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  var similarity = (dotproduct) / (mA) * (mB)
  return similarity;
}

//.....

var array1 = [1, 0, 0, 1];
var array2 = [1, 0, 0, 0];

var p = cosinesim(array1, array2);
document.getElementById("sim").innerHTML = String(p);