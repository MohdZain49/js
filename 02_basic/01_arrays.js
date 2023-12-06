// ************** A R R A Y S ****************

const cars = ['Saab', 'Volvo', 'BMW', 'Suzuki'];
console.log(cars);

// access array element by index
let car = cars[2];
console.log(car);

// changing array element
cars[3] = 'Toyoto';
console.log(cars);

// arrays are special type of objects
console.log(`type of array is ${typeof cars}`);

// length property
console.log(cars.length);

// length is one more than higher index
// access last element
console.log(cars[cars.length - 1]);


// ***************************** ARRAY  METHOD,  PROPERTY  AND  OPERATOR ******************************


// 1) +++++++++++++ length property ++++++++++++++  

//  array_name.length()         // return length(size) of array
const fruits = ['Banana', 'Apple', 'Mango', 'Orange'];
console.log(fruits.length);



// 2) ++++++++++++ Array to string method +++++++++++

// toString()       // return string of array values separated by comma.
const carsManufacturer = ['Toyoto','Suzuki', 'Mahindra', 'Rolls Royce'];
const arrayString = carsManufacturer.toString();

console.log(carsManufacturer);
console.log(arrayString);



// 3) +++++++++++++ Popping and Pushing method ++++++++++++

// 1. pop()           // remove the last element of array
const faangCompanies = ['facebook(Meta)', 'Amazon', 'Apple', 'Netfilx', 'Google(Alphabet)'];
console.log(faangCompanies);

faangCompanies.pop();                   // last value removed.
console.log(faangCompanies);

let company = faangCompanies.pop();
console.log(company);                   // return the value of popped element.

company = faangCompanies.pop();
console.log(company);

console.log(faangCompanies);            // actual array change.


// 2. push()        // append new element at the last of array and return new length of array.
const webBrowser = ['chorme', 'firefox', 'safari', 'Opera'];
console.log(webBrowser);

webBrowser.push('Edge');                            // append new element.
console.log(webBrowser);

let newLength = webBrowser.push('Explorer');        // return new length of array.
console.log(webBrowser);
console.log(` new length of webBrowser array is ${newLength}`);

webBrowser.push('Brave', 'UC Browser');             // append many items.  
console.log(webBrowser);



// 4) ++++++++++++ shifting element ++++++++++++

// 1. shift()       // remove the first element and return it.
// removes the first array element and "shifts" all other elements to a lower index.
const programmingLanguages = ['C', 'C++', 'Java', 'Python', 'Javascript'];
console.log(programmingLanguages);

let individualLanguage = programmingLanguages.shift();      // remove and return first element.
console.log(individualLanguage);
console.log(programmingLanguages);

const emptyArray = [];
console.log(emptyArray.shift());                // return undefined


// 2. unshift();           // insert new element at the start of the array and return new array lenght.
const JavascriptLibraries= ['React.js', 'jQuery.js', 'Lodash', 'D3.js'];
console.log(JavascriptLibraries);

JavascriptLibraries.unshift('Moment.js');       // insert new element at the start of array.
console.log(JavascriptLibraries);

let individualLibrary = JavascriptLibraries.unshift('Axios');        // return new lenght of array.
console.log(JavascriptLibraries);
console.log(`The new length of array 'javascriptLibraries' is ${individualLibrary}`);



// 5) 