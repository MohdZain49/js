let score = true;
// console.log(typeof score);

let valueInNumber = Number(score);                  //convert to number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33asd" => NaN
// true => 1, false => 0
// "zain" => NaN
// null => 0
// undefined => NaN



let isLoggedIn = 43;

let booleanIsLoggedIn = Boolean(isLoggedIn);        //convert to boolean
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// 234 => true
// "" => false, "zain" => true
// null => false
// undefined => false

let someNumber = undefined;

let stringNumber = String(someNumber);              // convert to string
// console.log(stringNumber);
// console.log(typeof stringNumber);


// 33 => 33
// true => true
// false => false
// null => null
// undefined => undefined


// ******************************OPERATION*******************************


let value = 45;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(3 ** 2);
console.log(4 / 2);
console.log(5 % 3);

let str1 = "Hello "
let str2 = "Mohd Zain"
let str3 = str1 + str2;
console.log(str3)


console.log('3' + 4);
console.log(3 + '4');
console.log(3 + 4 + '5');
console.log("6" + "7" + 5);
console.log("6" + "7" + 5 + 4);
console.log(4 + '4' + 4);

console.log(+true);
console.log(+"");