
// testing RegExp.

const text = "Today was a good day.";
let findText = /was/i;

//console.log(findText.test(text));
//console.log(text.search(findText));


// RegExg search function

function regSearch(){
    //const text=" Today was a good day.";
   // console.log("good is in the possition:  "+text.search(/good/i));
    let id1 =document.getElementById('id1').value;
    let id2 = document.getElementById('id2').value;
    let example1 = document.getElementById('example1');
    if(id1.includes(id2)){
    // console.log(id1.includes(id2));  //includes return true if the word exist otherwise it returns false.
     example1.innerHTML = id2 +":  is in the position. "+ id1.search(id2);
     example1.style.color='green';
    }
    else{

         example1.innerHTML = id2 + ": Does not exist in the phase.";
        example1.style.color ='red';
    }

  
}

// RegExp replace function
const text2 = "Hard work pays off.";
console.log("replacing the word off: "+text2.replace(/off/i,"if you are consistent") );

function regReplace(){

    let id3 = document.getElementById('id3').value;
    let id4 = document.getElementById('id4').value;
    let id5 = document.getElementById('id5').value;
    let example2 = document.getElementById('example2');

  if(id3.includes(id4)){
      
  example2.innerHTML ="The original sentence: "+ id3 +"<br>" + "Replaced with: "+ id3.replace(id4,id5);
  example2.style.color='green';
  }
  else{

      example2.innerHTML = "The word to replace does not exist. Try again";
      example2.style.color ='red';
  }
  
}

// Testing modifiers

// i modifier
const Q = "What is an Amendment? R: a change in constituion and an addtion in constitution."
console.log('i modifier: '+ Q.search(/amendment/i));

// g modifier
const q = "What we call the first ten amendments to the constituion \
  We call the fist ten amendments the Bill of rights";
let patern = q.match(/cal/g);
console.log('g modifier: '+ patern);

// gi modifier
const gimod ="What is one right or freedom from the First Amandment? \
           One right or freedom from the first amandment is freedom to speech";
console.log("gi modifier: "+ gimod.match(/amandment/gi));

console.log('m modifier: '+ gimod.match(/the/m));


// digit Patterns

function digitPattern(){
    let id6 = document.getElementById('id6').value;
    let example3 = document.getElementById('example4');

    example3.innerHTML = id6;
}



