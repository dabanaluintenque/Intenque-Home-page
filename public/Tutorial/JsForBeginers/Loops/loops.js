
// for loop
function checkforLoop(){

    let id1 = document.getElementById('id1').value;
    let id2 = document.getElementById('id2').value;
    let id3 = document.getElementById('id3').value;
    let id4 = document.getElementById('id4').value;
    let id5 = document.getElementById('id5').value;
    let id6 = document.getElementById('id6').value;
    let example1 = document.getElementById('example1');
    const hexLetter = [id1,id2,id3,id4,id5,id6];
    const letters = ["A","B","C","D","E","F"];
    hexLetter[0] = 10;
    hexLetter[1] = 11;
    hexLetter[2] = 12;
    hexLetter[3] = 13;
    hexLetter[4] = 14;
    hexLetter[5] = 15;
    let values ="";
    for(let i = 0; i < hexLetter.length; i++){

      if(id1 =="" || id2=="" || id3=="" || id4=="" || id5=="" || id6==""){
       
          console.log('do not leave anything empty');
       example1.innerHTML="Fill all the boxes";
       example1.style.color="red";
      }
     
      else if(id1 !="A" || id2 !="B" || id3 !="C" || id4 !="D" || id5 !="E" || id6 !="F"){

          example1.innerHTML ="Enter the correct values in each box. Upper case letter for all values. \
          <br> The values you have entered are: "+ id1 +" "+ id2 +" "+id3 +" "+ id4+" "+ id5+" "+ id6 +" incorrect values.";
          
          example1.style.color='blue';
      }
        else{

        values += letters[i] +" = " + hexLetter[i] +"<br>";

        console.log("values: " +values);

        example1.innerHTML = "Great job! <br>" +values;
        example1.style.color='green';

        }
    }

}

// for in loop

function checkforIn(){

    let id7 = document.getElementById('id7').value;
    let id8 = document.getElementById('id8').value;
    let id9 = document.getElementById('id9').value;
    let id10 = document.getElementById('id10').value;
    let id11 = document.getElementById('id11').value;
    let id12 = document.getElementById('id12').value;
    let example2 = document.getElementById('example2');
    let myIdentity ="";

    const identity ={
        Fist_name: id7,
        Last_name: id8,
        Middle_name: id9,
        age: id10,
        school: id11,
        hobby: id12
    };
    for(let i in identity){
        myIdentity += i +": "+ identity[i] +"<br>";
    }
    console.log("My Identity"+ myIdentity);
    example2.innerHTML =" Your personal information: <br>" + myIdentity;
    example2.style.color='blue';
} 

// Array.forEach()

function checkforEach(){

    let id13 = document.getElementById('id13').value;
    let id14 = document.getElementById('id14').value;
    let id15 = document.getElementById('id15').value;
    let id16 = document.getElementById('id16').value;
    let id17 = document.getElementById('id17').value;
    let example3 = document.getElementById('example3');


    const closeFriends =[id13, id14, id15, id16, id17];
    let friends ="";
    closeFriends.forEach(iterateFriends);
    example3.innerHTML ="The list of your five closest friends: <br>" + friends;
    example3.style.color='blue';
    function iterateFriends(value, index, array){

        friends+=value +"<br>";
    }
}

// for of loop

function checkforOf(){

    let id18 = document.getElementById('id18').value;
    let id19 = document.getElementById('id19').value;
    let id20 = document.getElementById('id20').value;
    let id21 = document.getElementById('id21').value;
    let id22 = document.getElementById('id22').value;
    let example4 = document.getElementById('example4');

    const courseName = [id18, id19, id20, id21, id22];

    let courses ="";

    for(let i of courseName){

        courses += i +"<br>";
    }
    example4.innerHTML ="Here is the list of your five favority classes: <br> " + courses;
    example4.style.color='green';
}

// while loop

function checkWhile(){

    let id23 = document.getElementById('id23').value;
    let id24 = document.getElementById('id24').value;
    let id25 = document.getElementById('id25').value;
    let id26 = document.getElementById('id26').value;
    let id27 = document.getElementById('id27').value;
    let example5 = document.getElementById('example5');

    const favorityProf =[id23, id24, id25, id26, id27];

    let value ="";
    let i = 0;
    while(i < favorityProf.length){

        value += favorityProf[i] +"<br>";
        i++;
    }
    example5.innerHTML =" The name of your five favofiry teachers: <br>" +value;
    example5.style.color='green';
}

// do while loop

function checkdoWhile(){
    let id28 = document.getElementById('id28').value;
    let id29 = document.getElementById('id29').value;
    let id30 = document.getElementById('id30').value;
    let id31 = document.getElementById('id31').value;
    let id32 = document.getElementById('id32').value;
    let example6 = document.getElementById('example6');
    const books =[id28, id29, id30, id31, id32];
    let allbooks ="";
    let i = 0;

    do{
        allbooks += books[i] +"<br>";
       
        i++;
    }
    while(i < books.length);

        

    example6.innerHTML = "Here is your list: <br>" + allbooks;
    example6.style.color ='green';
}