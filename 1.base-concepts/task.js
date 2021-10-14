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
  const amountMonth = (date.getFullYear() - new Date().getFullYear()) * 12 - (+new Date().getMonth()) + date.getMonth(); //считаем колличество месяцев в кредите
  let percentMonth = +percent / 100 / 12; // считаем процент в месяц
  let payMouth = (+amount - +contribution) * (percentMonth + percentMonth / (Math.pow((1 + percentMonth), amountMonth) - 1)); // считаеем тело кредита+проценты в месяц
  let totalAmount = +payMouth * +amountMonth; // считаем все расходы клиента 
  { console.log(Number(totalAmount.toFixed(2))) }
  return (Number(totalAmount.toFixed(2)))
}
