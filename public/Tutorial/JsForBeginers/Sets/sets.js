
// set passing array
function checkSet(){
   let example1 = document.getElementById('example1');
    const naturalNumbers =new Set([1,2,3,4,5,6,7,8,9,10,11,12,13]);

    // we can also add this it will work

    /*naturalNumbers.add(14);
    naturalNumbers.add(15);  */

    let allnaturalNumbers ="";
    naturalNumbers.forEach(displayNumbers);
    example1.innerHTML = allnaturalNumbers + "..., infinity";
     // example1.innerHTML = allnaturalNumbers + "<br> " + naturalNumbers.size;


    function displayNumbers(value){
        allnaturalNumbers += value +", " ;
    } 
   
}

// add to a set 
function checkSetAdd(){
    let id1 = document.getElementById('id1').value;
    let id2 = document.getElementById('id2').value;
    let id3 = document.getElementById('id3').value;
    let id4 = document.getElementById('id4').value;
    let id5 = document.getElementById('id5').value;
    let example2 = document.getElementById('example2');
    const fruits = new Set();
    fruits.add(id1);
    fruits.add(id2);
    fruits.add(id3);
    fruits.add(id4);
    fruits.add(id5);
    let fruitList ="";
    fruits.forEach(displayFruits);
    example2.innerHTML = fruitList;
    function displayFruits(value){
        fruitList += value +"<br>";
    }
}

// add variable to a set

function checkAddVariable(){
    let id6 = document.getElementById('id6').value;
    let id7 = document.getElementById('id7').value;
    let example3 = document.getElementById('example3');

    const students = new Set(["Jorge","Dabana","Reece","Kent","Himanshu"]);
    const newStudent = id6;
    const anothernew = id7;
    students.add(id6);
    students.add(id7);
    let studentList ="";
    students.forEach(displayStudents);
    example3.innerHTML = studentList;

    function displayStudents(value, index, array){

        studentList += value +'<br>';
    }
}