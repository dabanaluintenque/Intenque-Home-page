

let student ='{"fname": "Dabana", "Age":"23"}';
let myObject = JSON.parse(student);
console.log(myObject);

document.getElementById('example1').innerHTML ="Convert as Js Object first name is:  "+  myObject.fname;  ;

let backtoString = JSON.stringify(myObject);
console.log(backtoString);
