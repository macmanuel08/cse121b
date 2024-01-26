/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const number1Input = Number(document.getElementById('add1').value);
  const number2Input = Number(document.getElementById('add2').value);

  const sum = add(number1Input, number2Input);
  document.getElementById('sum').value = sum;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
  return number1 - number2;
}

const subtractNumbers = function() {
  const number1Input = Number(document.getElementById('subtract1').value);
  const number2Input = Number(document.getElementById('subtract2').value);

  const difference = subtract(number1Input, number2Input);
  document.getElementById('difference').value = difference;
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
  const factor1Input = Number(document.getElementById('factor1').value);
  const factor2Input = Number(document.getElementById('factor2').value);

  const product = multiply(factor1Input, factor2Input);
  document.getElementById('product').value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers() {
  const dividend = Number(document.getElementById('dividend').value);
  const divisor = Number(document.getElementById('divisor').value);

  const quotient = divide(dividend, divisor).toFixed(2);
  document.getElementById('quotient').value = quotient;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', () => {
  const subtotal = Number(document.getElementById('subtotal').value);
  const member = document.getElementById('member').checked;
  let total;

  if (member) {
    total = subtotal - (subtotal * 0.20);
  } else {
    total = subtotal;
  }

  document.getElementById('total').innerHTML = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
const oddArray = numbersArray.filter(number => number % 2 != 0);
document.getElementById('odds').innerHTML = oddArray;

/* Output Evens Only Array */
const evenArray = numbersArray.filter(number => number % 2 == 0);
document.getElementById('evens').innerHTML = evenArray;

/* Output Sum of Org. Array */
const sum = numbersArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
const multiples = numbersArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = multiples;

/* Output Sum of Multiplied by 2 Array */
const multiples2 = numbersArray.map(number => number * 2);
const sumOfMultiplied = multiples2.reduce((sum, number) => sum + number);

document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;