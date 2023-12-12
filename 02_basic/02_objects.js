// ********************** O B J E C T S ***********************

// Object is datatype, used to stores items in key:value form.

// Define and create js objects using literals.
const myInfo = {firstName:'Mohd', secondName:'Zain', age:21, gender:'male'};
console.log(myInfo);

// spaces and line break are not inportant.
const car = {
    companyName: 'Mahindra & Mahindra',
    model: 'Thar',
    colour: 'Black',
};
console.log(car);



// ******************* Object properties ****************

// Each item/Key:value pair in object is property.
// Properties are the attributes about object

const book = {
    title: "The Great Gatsby",                  // first property.
    author: "F. Scott Fitzgerald",              // second property.
    year: 1925,                                 // third property,
};

console.log(book.title);                        // access using dot
console.log(book['author']);                    // access using square bracket



// ***************** Object methods ***********************

// Methods are stored in properties as function definitions.
// Methods are actions that performed on objects.

const studentResult = {
    maths: 75,
    science: 78,
    english: 80,
    hindi: 83,
    SST: 69,
    percentage: function() {
        return calculatePercentage = (this.maths + this.science + this.english + this.hindi + this.SST)/5;
    },
};

console.log(`Percentage of student is ${studentResult.percentage()}%`);       // accessing percentage method.
console.log(`function definition : \n${studentResult.percentage}`);           // return function definition.
