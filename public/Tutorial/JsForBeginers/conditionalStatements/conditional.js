

function checkIf(){

let study = document.getElementById('study').value;

let example1 = document.getElementById('example1');

let value = 5;


if(study > value){

 example1.innerHTML= "Good job student! Your study hours is: "+ study;

  }
}

// else condition

function checkElse(){

    let example3 = document.getElementById('example3');
    let id3 = document.getElementById('id3').value;
    let AinHex = 10;

    if(id3==AinHex){
        return example3.innerHTML="That is correct the value of letter A in hex = "+ AinHex;
    }

    else{

        return example3.innerHTML ="Wrong answer. The value of A in Hex is not = "+id3;
    }
}

// else if condition
function checkElseIf(){

    let example4 = document.getElementById('example4');
    let id4 = document.getElementById('id4').value;
    let Binhex = 11;
    let Cinhex = 12;
    

    if(id4 == Binhex){
     example4.innerHTML ="Yeah! the value of B in hex = "+ Binhex;
     example4.style.color="blue";
    }
    else if(id4 ==Cinhex){
        example4.innerHTML ="Good job! The value of C in hex = "+ Cinhex;
        example4.style.color='green';
    }

    else{

        example4.innerHTML="Incorrect answer for both cases. The value of B or C != "+ id4;
        example4.style.color ='red';
    }


}

// Global variable
const daysofweek = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
let date = new Date();
 let x = document.getElementById('example2');
 x.innerHTML="If today is: " +daysofweek[date.getDay()] +" what day of the week will it be 7 days from today?";
 x.style.color='red';
// function check day of the week
function ternaryOperator(){
    let example2 = document.getElementById('example2');
    let id1 = document.getElementById('id1').value;
    let todayDate = daysofweek[date.getDay()];
    let result = ((parseInt(id1) + parseInt(date.getDay()))% 7==date.getDay())? "Seven days from today will be: "+ daysofweek[date.getDay()]: "Double check the number you entered if is divisible by 7";
    console.log((id1 + date.getDay()) % 7);
    console.log(date.getDay());
    console.log(daysofweek[date.getDay()]);
    console.log(parseInt(id1) + parseInt(date.getDay()));
     example2.style.color ="blue";
    return example2.innerHTML = result ;
   
}

// switch statement

function checkSwitch(){
    let example5 = document.getElementById('example5');
    let id5 = document.getElementById('id5').value;

    example5.style.color='blue';

    switch((parseInt(id5) + parseInt(date.getDay())) % 7){

        case 0:
            example5.innerHTML ="Sunday";

            break;
        case 1:
            example5.innerHTML ="Monday";
            break;
        case 2:
            example5.innerHTML ="Tuesday";
            break;
        case 3: 
            example5.innerHTML ="Wednesday";
            break;
        case 4: 
            example5.innerHTML ="Thrusday";
            break;
        case 5: 
            example5.innerHTML ="Friday";
            break;
        case 6:
            example5.innerHTML ="Saturday";
            break;
        default:
            example5.innerHTML = "none of the case above applies";

    }

    console.log("id5: "+ id5);
    console.log("date.getDay: "+ date.getDay());
    //x = date.getDay();
   // console.log('x: '+ x);
   console.log('id5 + getDay()');
    console.log(parseInt(id5) + parseInt(date.getDay()));
    console.log("id5 + getDay() % 7");
    console.log((parseInt(id5) + parseInt(date.getDay()))% 7);
}


