
// arrow func ex:

let createFunction = (x, y) => x + y ;
console.log(createFunction(10,3));

// first Example;
let id1 = document.getElementById('id1');
let example1= document.getElementById('example1');
let myFunction = () => {
    return example1.innerHTML = id1.value;
}

let shorterway = () => "This is another way to write the above function";
console.log(shorterway());

// end

// second example

let myFunction2 = (value) => "Say something " + value;
console.log(myFunction2("my friend"));

let id2 = document.getElementById('id2');
let example2 = document.getElementById('example2');
let arrowFunc = (complete) => example2.innerHTML + complete;
let arrowWithParameter = () => example2.innerHTML= arrowFunc(id2.value) +".";
example2.style.color ='green';


// end
