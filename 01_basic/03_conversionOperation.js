let score = true;
// console.log(typeof score);

let valueInNumber = Number(score);              //convert to number
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

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// 33 => 33
// true => true
// false => false
// null => null
// undefined => undefined
