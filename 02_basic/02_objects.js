// ********************** O B J E C T S ***********************

// Object is datatype, used to stores items in key:value form.


// _______________ Define and create js objects using literals. _____________

const myInfo = {firstName:'Mohd', secondName:'Zain', age:21, gender:'male'};
console.log(myInfo);

// spaces and line break are not inportant.
const car = {
    companyName: 'Mahindra & Mahindra',
    model: 'Thar',
    colour: 'Black',
};
console.log(car);

// _____________________ Define objects using new keyword. ____________________
// For readability, simplicity and execution speed, use the object literal method.

const userInfo = new Object();
userInfo.name = 'Mohd Zain';
userInfo.email = 'mohammedzain4099@gmail.com';
userInfo.isLoggedIn = false;
userInfo.password = 789798;

console.log(userInfo);



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


// Objects are addressed by reference, not by value.

const item = {
    itemName: 'Ring',
    itemPrice: 20000,
    compaName: 'Jewelquick',
    materialUsed: 'silver',
    inStock: true,
}
console.log(item);

const product = item;       // product is not copy of item, it is item. Both are same.
console.log(product);

item.itemPrice = 15000;     // change also occurs in product.
console.log(item);
console.log(product);
