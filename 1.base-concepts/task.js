"use strict"
function solveEquation(a, b, c) {
  let x = [];
  let d = (b ** 2 - 4 * a * c);
  if (d === 0) {
    x[0] = -b / 2 * a;
  }
  else if (d > 0) {
    x[0] = (- b + Math.sqrt(d)) / (2 * a);
    x[1] = (- b - Math.sqrt(d)) / (2 * a);
  }
  return x;
}

"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = [];
  let S = amount;
  let P = percent/12;
  let n = 
  let payMonth = S * (P + P / (((1 + P) ^ n) - 1));
  return totalAmount;
}

