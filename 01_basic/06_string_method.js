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