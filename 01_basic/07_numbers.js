// ********************** N U M B E R ************************

let num1 = 3234.43;                 // with decimal
let num2 = 423;                     // without decimal
console.table([num1, num2]);


// scientific(exponent) notation
let bigNum = 234e5;                 
let smallNum = 345e-4;
console.table([bigNum, smallNum]);


// integer precision        // Integer are accurate upto 15 digit
let x = 999999999999999;
let y = 99999999999999999;
console.log(x);
console.log(y);


// floating precision     // floating point arithmetic is not always accurate 100%
let sum = 0.1 + 0.2;
console.log(sum);

let preciseSum = (0.1 * 10 + 0.2 * 10) / 10;        // precise sum
console.log(preciseSum);



// ****************** NaN - Not a Number ************
// NaN is reserved word indicating that a number is not a legal number.

let division = 100 / 'apple';
console.log(division);

let multiplication = 100 * 'Toyoto';
console.log(isNaN(multiplication));         // isNaN() global function

let subtraction = 34 - NaN;
console.log(subtraction);

let firstNum = NaN;
let secondNum = 45;
console.log(firstNum + secondNum);
console.log(firstNum + '45');               // it will concat

// typeof NaN is number
console.log(typeof NaN);



// ****************** Infinity / -Infinity ********************
// Infinity return if you calculate a number outside the largest possible number.

let myNumber = 2;
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
console.log(myNumber);

// division with 0 also return infinity
console.log(45 / 0);
console.log(-23 / 0);

// infinity is number 
console.log(typeof Infinity);