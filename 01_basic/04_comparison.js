// comparison between differen datatype.

console.log('4' > 4);
console.log('4' > 3);



// comparison and equality work differently. comparison convert null into 0.
console.log(null == 0);  // equality

console.log(null > 0);   // comparison
console.log(null >= 0);
console.log(null > -1);
console.log(null < 2);



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log(undefined == null);
console.log(undefined > null);      console.log(NaN > 0);
console.log(undefined < null);

console.log('45' === 45);
