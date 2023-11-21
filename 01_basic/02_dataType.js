"use strict";       // treat all code as newer version of js.

// alert( 3 + 5)       // we are using node.js not browser.

console.log( 3 
            +
            4
);                  //code readability should be high.

console.log('Mohd Zain');



/*
*****************************JAVASCRIPT DATATYPE*****************************

    There are two type of datatype :

    1) Primitive datatype :
        1. Number               2. String
        3. BigInt               4. Boolean
        5. Undefined            6. Null
        7. Symbol
        

    2) Non-primitive datatype :
        1. Array
        2. Object
        3. function

*/


// 1. String

let carName1 = 'Mahindra Thar';  // using single quote
let carName2 = "Maruti Suzuki";  // using double quote

console.log(carName1, carName2);


let answer1 = "It's alright";       // using single quote in double quote
let answer2 = "He is 'Jonny'";      // using single quote in double quote
let answer3 = 'She is "Riya"';      // using double quote in single quote

console.log(answer1);
console.log(answer2);
console.log(answer3);



// 2. Number

let num1 = 354;         // without decimal
let num2 = 43.34;       // with decimal

console.log(num1, num2);

//exponential notation
let expo1 = 123e5;          // extra big
let expo2 = 123e-5;         // extra small

console.log(expo1, expo2);



// 3. Bigint.

let largeNum = BigInt(2343453438495324095732408573459845);
console.log(largeNum);
console.log(typeof largeNum);
 
let anotherLargerNum = 8965453509348059483053409857304934895n;
console.log(anotherLargerNum);
console.log(typeof anotherLargerNum);



// 4. Boolean

let x = true;
let y = false;
console.log(x, y);
console.log(typeof x, typeof y);



// 5. null

let outsideTem = null;
console.log(outsideTem);
console.log(typeof outsideTem);



// 6. undefined

let carName;
console.log(carName);

let userEmail = undefined;
console.log(userEmail);



// 7. symbol

let id = Symbol('123');

let anotherID = Symbol('123');

console.log(id === anotherID);



// 8. array

let myArray = ["Tayoto", "BMW", "Lamborgini", "Farari"];
console.log(myArray);
console.log(typeof myArray);



// 9. object

let myObj = {name: 'Mohd Zain', roll_no: 2104790100041, course: 'BTech', branch: 'CSE'};
console.log(myObj);
console.log(typeof myObj);



// 10. function
let myFun = function() {
    console.log('Hello World');
}
myFun();
console.log(typeof myFun);