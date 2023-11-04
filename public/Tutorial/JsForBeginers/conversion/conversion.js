
// Convert String to number

console.log("convert a String to a number.")
let pi = "3.14";
let text =" ";
let empty ="";
let space = "77 13";

console.log("Number py:  " + Number(pi));
console.log("Number text: " + Number(text));
console.log("Number empty: " + Number(empty));
console.log("Number space: "+ Number(space));


console.log('-------------------------------');
// convert number to string
console.log("convert a number to string.")

let pi2 = 3.14;
let number = 77;
let otherNumber = 13;

console.log("pi2 as String(): "+ String(pi2));
console.log("pi2 as toString(): "+ pi2.toString());
console.log("number as String(): "+ String(number));
console.log("number as toString(): "+ number.toString());
console.log("otherNumber as String(): "+ String(otherNumber));
console.log("otherNumber as toString(): "+ otherNumber.toString());

console.log('-------------------------------');
// converting Dates to Numbers

console.log('Converting Dates to number');
d = new Date();
// it returns the numbers of milliseconds ins Jan 01 1970
console.log("d.getTime: "+ d.getTime());
console.log("Number(d): "+ Number(d));


console.log('--------------------------------');
// converting boolean to a number

console.log('converting a boolean to a number');
let x = false;
let y = true;
console.log('Number(x): '+ Number(x));
console.log('Number(y): '+ Number(y));


console.log(8<<3);