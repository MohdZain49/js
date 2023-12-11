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



// 5) ++++++++++++ delete operator +++++++++++++++

const bots = ['Alexa', 'Siri', 'Google Assistant'];
delete bots[2];         // delete the element 2 and leaves hole at that position.
console.log(bots);



// 6) ++++++++++++ merging array (concatenating) +++++++++++

// concat()  // combine two or more array and return new merged array.
const desktopOS = ['Window', 'Mach', 'Linux', 'Unix'];
const mobileOS = ['Android', 'IOS'];
let operatingSystems = desktopOS.concat(mobileOS); 

console.log(operatingSystems);
console.log(desktopOS);         // not change
console.log(mobileOS);          // not change

const someOtherOS = ['MS-DOS', 'Fedora'];
operatingSystems = desktopOS.concat(mobileOS, someOtherOS);  // merging multiple arrays.
console.log(operatingSystems);

operatingSystems = operatingSystems.concat('Debian');   
console.log(operatingSystems);                               // merging value.



// 7) +++++++++++++++ Flattening array ++++++++++++++++++

// Flattening an array is the process of reducing the dimensionality of an array.

// flat() creates new array with sub-array elements concatenated to specified depth.
const computerScienceSub = [['DSA', 'COA', 'DSTL'], ['OS', 'Micro.', 'TAFL'], ['DBMS', 'DAA', 'CD']];
console.log(computerScienceSub);                        

const totalSubjects = computerScienceSub.flat(1);               // depeth is 1.
console.log(totalSubjects);

const subjectsAndLabs = [['DSA', 'COA', 'DSTL'], ['OS', 'Micro.', 'TAFL'],
['DBMS', 'DAA', 'CD', ['DBMS lab', 'CD lab', 'DAA lab']]];
console.log(subjectsAndLabs.flat(2));;                          // depeth is 2.

const someNumbers = [[2, 4, 8, [-2, -3, -8, [4, 9, 0]]], [5, 3, 7, [-1, -8, -9, [7, 4, 6]]]];
console.log(someNumbers.flat(Infinity));                        // depeth is infinity.



// 8) +++++++++++++ Splicing and Slicing ++++++++++++++++

// 1. splice(start, deleteCount, item1, item2, .....);

// Removes elements from an array and, if necessary, inserts new elements in their place.
// return array of deleted elements.

const ITCompanies = ['IBM', 'Microsoft', 'Infosys', 'Cisco', 'Wipro'];
console.log(ITCompanies);

// insert new element from position 2 but no remove.
let companies = ITCompanies.splice(2, 0, 'TCS', 'Accenture');     // return empty array because no element delete.
console.log(ITCompanies);
console.log(companies);

// insert new element from position 2 and remove 2 element
companies = ITCompanies.splice(2, 2, 'Adobe', 'Delloite');      // return array of deleted element.
console.log(ITCompanies);
console.log(`deleted items : ${companies}`);

// removing 2 elements from position 3 and insert no new element.
companies = ITCompanies.splice(3, 2);                           // return array of deleted element.
console.log(ITCompanies);
console.log(companies);


// 2. slice(starting_index, ending_index: exclusive );              // Returns a copy of a section of an array.

const socialMedia = ['Youtube', 'Whatsapp', 'Facebook', 'Instagram', 'Twitter(X)'];
let apps = socialMedia.slice(2, 4); 

console.log(apps);
console.log(socialMedia);                       // not remove any element.

// omit second argument.
apps = socialMedia.slice(2);                    // slice rest of the array.
console.log(apps);                 

// undefined first argument.
apps = socialMedia.slice( undefined , 2);       // slice start at 0 index.
console.log(apps);

// omit both argument.
apps = socialMedia.slice();                     // return copy of whole array.
console.log(apps);

// negative indices.
apps = socialMedia.slice(-3, -1);              
console.log(apps);

apps = socialMedia.slice(2, 3, 'snapchat');              
console.log(apps);
console.log(socialMedia);

/* _____________________ difference between splice() and slice() ______________________

 # splice method can add new element.      |    # slice method can't add new element                    
 # splice method return deleted elements.  |    # slice method return copy of element.
 # splice method change array.             |    # slice method don't change array.   

*/