// +++++++++++++++++++++++++++  S T R I N G    M E T H O D  +++++++++++++++++++++++++++++


// 1. *********** String length ***********

let intro = 'I am Mohd Zain.'
console.log(intro.length);                     // return lenght of string.

let str = "";
console.log(str.length);




// 2. ********** Extracting or Slicing string *********

// 1) slice(start, end)                        // return extracted or sliced part in new string.
                                               // indexing start from 0.
let text = 'I am Btech student.'
console.log(text.slice(5, 10));                // end position character not include.
console.log(text);                             // actual string not change.

let text1 = 'Apple, Mango, Banana';

console.log(text1.slice(7, 20));               // slice from position 7 to 19.

console.log(text1.slice(14));                  // return string from 14 position to end.

console.log(text1.slice(-13));                 // position counted from end

console.log(text1.slice(-13, -8));


// 2) substring(start, end)                    // return substring from start to end position.

let words = "Science and technology are advancing rapidly."
console.log(words.substring(0, 23));

console.log(words.substring(10));              // return substring from 10th position to end.

console.log(words.substring(-12));             // negative parameter treat as 0.


// 3) substr(start, extracted part length)     // return subtring from start to required length.

let message = "OpenAI is revolutionizing AI."

console.log(message.substr(10, 15));           // return substring from 10th position of lenght 15.

console.log(message.substr(10));               // return substring from 10th position to the end.

console.log(message.substring(-10));           // position count from end.



// 3. *************** Replacing String Content ************

// 1) replace()                     //replaces a specified value with another value in a string

let sentance = 'Please visit Amazon' 
let anotherSentance = sentance.replace('Amazon', 'Flipkart');

console.log(anotherSentance);           // return new string
console.log(sentance);                  // doesn't change called string

let strng = "rain rain go away, come again another day."

console.log(strng.replace('rain', 'train'));            // replace only first match

console.log(strng.replace(/rain/g, 'train'));           // replace all matches

let tag = 'Coffee is life';

console.log(tag.replace(/coffee/i, 'Tea'));             // replace case insensitive


// 2) replaceAll()

let inputString = 'The Cat is lovely animal. Cat is popular animal.'

let outputString = inputString.replaceAll('Cat', 'Dog');

console.log(outputString);



// 4. *********** converting upper and lower case *************

// 1) toUpperCase()                 // change string into upper case

let firstString = 'Hello World';
console.log(firstString);
console.log(firstString.toUpperCase());


// 2) toLowerCase()                 // change string into lower case

let secondString = 'Hello World'
console.log(secondString);
console.log(secondString.toLowerCase());



// 5. ************* JavaScript String concat *****************

// concat();

let hello = 'Hello World';
let name = 'Mohd Zain';
let plus = hello.concat(' ', name);
console.log(plus);

let someWord = 'I am';
plus = hello.concat(' ', someWord, ' ', name);
console.log(plus);



// 6. *************** Triming string ****************

// 1) trim()

let firstText = '         Hello World    ';
let secondText = firstText.trim();

console.log(firstText);
console.log('lenght firstText ' + firstText.length);

console.log(secondText);
console.log('length secondText ' + secondText.length);


// 2) trimStart()

let thirdText = firstText.trimStart();
console.log(thirdText);


// 3) trimEnd()

let fourthText = firstText.trimEnd();
console.log(fourthText);



// 7. ***************** String padding *************

// 1) padStart()    // pad string with another string until it reach a given length

text = 'zain';
let anotherText = text.padStart(8, '4');
console.log(anotherText);

text = '5';
let paddedText = text.padStart(7, 'x');
console.log(paddedText);

let number = 7;                     // pad number by converting it into string.
let stringNum = String(7);
let paddedNumber = stringNum.padStart(6, '0');
console.log(paddedNumber);


// 2) padEnd()        // pad string with another string until it reach a given length

text = '4';
anotherText = text.padEnd(6, 'a');
console.log(anotherText);

text = '3'
anotherText = text.padEnd(5, '1');
console.log(anotherText);

text = 4;                            // pad number by converting it into string.
stringNum = text.toString();
anotherText = stringNum.padEnd(6, '8');
console.log(anotherText);



// 8. ************* Extracting String Characters ***********

// 1) charAt()              // return character at specified position.

let emailAddress = 'pappu420@gmail.com';
console.log(emailAddress.charAt(4));

let userName = 'Pappu Singh';
console.log(userName.charAt(8));


// 2) charCodeAt()          // return character unicode at specified position.

let password = '34985398';
console.log(password.charCodeAt(0));

let lastName = "Johnson";
console.log(lastName.charCodeAt(3));


// 3) property access    // returns unicode of character at specified index.

let userInput = 'Programming is fun';
console.log(userInput[4]);



// 9. ************** Split string *************

// split()          // Split string into substrings using specified separator
                    // return them as an array.

let fact = "Silence speaks where words often fail."
let arrayFact = fact.split(' ')
console.log(arrayFact);

let fruits = 'Mango, Banana, Apple, Papaya';
let arrayFruits = fruits.split(',');
console.log(arrayFruits);

let avengers = 'Iron man | Captain America | Thor | Hulk | Spider man';
console.log(avengers.split('|'));

console.log(avengers.split());
console.log(avengers.split(''));



// 10. ************* Searching method **************

// 1) indexOf()               // return index(position) of first occurence

let sentence = "This is a sample sentence.";
console.log(sentence.indexOf('sample'));

let phrase1 = "Sunny day at the beach"
console.log(phrase1.indexOf('night'));          // return -1

let repeat_word = "sun sun and more sun";
console.log(repeat_word.indexOf('sun'));        // start from 0 index
console.log(repeat_word.indexOf('sun', 2));     // start from 2 index
console.log(repeat_word.indexOf('sun', 10));    // start from 10 index


// 2) lastIndexOf()         // return index of last occurence

let phrase2 = "Coding is my passion. Coding is my hobby."; 
console.log(phrase2.lastIndexOf('Coding'));
console.log(phrase2.lastIndexOf('interest'));       // return -1

let string1 = "The sun is shining, shining bright."
console.log(string1.lastIndexOf('shining', 15));
console.log(string1.lastIndexOf('shining', 20));


// 3) search()          // return index of first match

let string4 = "The cat sat on the mat, mat.";
console.log(string4.search('mat'));


// 4) match()           // return 

let text2 = "The rain in SPAIN stays mainly in the plain";
let info = text2.match('ain')
console.log(info);
console.log(info.length);


// 5) matchAll()

let text4 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text4.matchAll("Cats");
console.log(Array.from(iterator));


// 6) includes()             // return true if string contains specified value.
                             // Otherwise returns false.

let greet = "Hello world, welcome to the universe.";
console.log(greet.includes('welcome'));

let text5 = "laugh laugh out loud, life life is too short short.";

console.log(text5.includes('laugh'));         // start from 0 index
console.log(text5.includes('laugh', 5));      // start from 5 index
console.log(text5.includes('laugh', 10));     // start from 10 index

console.log(text5.includes('laugh'));               // includes() is case-sensitive
console.log(text5.includes('LAUGH'));


// 7) startsWith()       // return true if string starts with specified value.

let text6 = 'Coding is an art of problem-solving.';

console.log(text6.startsWith('Coding'));
console.log(text6.startsWith('art'));              // start from 0 index
console.log(text6.startsWith('art', 13));          // start from 13 index


// 8) endsWith()        // return true if string ends with specified value.

let text7 = "Books open doors to new worlds.";

console.log(text7.endsWith('worlds'));
console.log(text7.endsWith('doors'));
console.log(text7.endsWith('door', 17));           // start from 17 index
