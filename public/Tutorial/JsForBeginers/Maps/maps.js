
// passing array as Map

function checkMap(){

    let example1 = document.getElementById('example1');
    let phoneNumber = new Map([
        ["Dabana", 5088180000],
        ["Jannah", 5087120000],
        ["Erwin", 50834580000]
        ]);

    let allNumbers ="";
    phoneNumber.forEach(function(value, index){
        allNumbers += index +" "+ value  +"<br>";
    });

    example1.innerHTML = allNumbers;
    
        
    

    console.log(phoneNumber.get( 'Dabana'))
}
 
 // set the map elements
 function checkSet(){
     
     let id1 = document.getElementById('id1').value;
     let id2 = document.getElementById('id2').value;
     let id3 = document.getElementById('id3').value;
     let id4 = document.getElementById('id4').value;
     let id5 = document.getElementById('id5').value;
     let id6 = document.getElementById('id6').value;
     let example2 = document.getElementById('example2');

    const number = new Map();
    number.set(id1, id2);
    number.set(id3, id4);
    number.set(id5, id6);

    let myfriendNumber ="";
    number.forEach(function(value, key){
     myfriendNumber += key +": " + value +"<br>";

    });
    example2.innerHTML = myfriendNumber;
 }

 // entries in a map
 
 function checkEntries(){
     let id7 = document.getElementById('id7').value;
     let id8 = document.getElementById('id8').value;
     let example3 = document.getElementById('example3');

     const num = new Map();
     num.set(id7, id8);
     let numbers ="";
    /* num.forEach(function(value, key){
         numbers += key +":  "+ value +"<br>";
     });*/

     for(let i of num.entries()){

         numbers += i;
     }
     example3.innerHTML = numbers;

 }


