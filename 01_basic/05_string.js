
// Strings are used to manipulate and storing text data.


let carName1 = 'Mahindra Thar';  // using single quote
let carName2 = "Maruti Suzuki";  // using double quote

console.log(carName1, carName2);


let answer1 = "It's alright";       // using single quote in double quote
let answer2 = "He is 'Jonny'";      // using single quote in double quote
let answer3 = 'She is "Riya"';      // using double quote in single quote

console.log(answer1);
console.log(answer2);
console.log(answer3);


// Escape character or Escape sequence.

// let text = "We are so-called "Vikings" from the north.";   // Not allowed.
// console.log(text);

let text1 = "We are so-called \"Vikings\" from north." 
let text2 = 'It\'s alright.'
let text3 = 'The character \\ is backslash.'

console.log(text1);
console.log(text2);
console.log(text3);


// Template Literals use back-ticks (``) rather than the quotes ("") to define a string

let text4 = `hello world`;
console.log(text4);


// quotes inside back-ticks

let text5 = `He's often called "Johnny"`;
console.log(text5);


// multiline string

let text6 = `Galaxies swirl, 
telling tales of cosmic wonders 
in celestial silence.`

console.log(text6);

let introduction = 
`Name - Mohd Zain
Course - BTech
Branch - Computer Science and Engineering
Roll_NO - 2104790100041`

console.log(introduction);

// Interpolation
// Automatic replacing of variables with real values is called string interpolation.

// variable substitution

let firstName = 'Mohd';
let lastName = "Zain";
let fullName = `My first name is ${firstName} and last name is ${lastName}`
console.log(fullName);


// Expression substitution

let length = 3;
let width = 5;
let height = 3;

let volumeCuboid = `Volume of cuboid : ${length * width * height}`;
console.log(volumeCuboid);