
// break
function checkBreak(){


    let id1 = document.getElementById('id1').value;
    let id2 = document.getElementById('id2').value;
    let id3 = document.getElementById('id3').value;
    let id4 = document.getElementById('id4').value;
    let id5 = document.getElementById('id5').value;
    let id6 = document.getElementById('id6').value;
    let id7 = document.getElementById('id7').value;
    let id8 = document.getElementById('id8').value;
    let id9 = document.getElementById('id9').value;
    let id10 = document.getElementById('id10').value;
    let example1 = document.getElementById('example1');
    const integers = [id1, id2, id3, id4, id5, id6, id7, id8, id9, id10];

    let allintegers ="";
    let i = 0;
    while( i < integers.length){
         if(integers[i]>=10 || integers[i]<= -1  || integers[i]==""){
            alert("Do not enter a number less than 0  or greather than 9 please.");
            break;

            // example1.innerHTML="do enter any number greater than 9".
        }
        allintegers += integers[i] +"<br>";
        i++;
    }

  example1.innerHTML = allintegers;
  example1.style.color='green';
    
}

// continue
function checkContinue(){
    let id11 = document.getElementById('id11').value;
    let id12 = document.getElementById('id12').value;
    let id13 = document.getElementById('id13').value;
    let id14 = document.getElementById('id14').value;
    let id15 = document.getElementById('id15').value;
    let id16 = document.getElementById('id16').value;
    let id17 = document.getElementById('id17').value;
    let id18 = document.getElementById('id18').value;
    let id19 = document.getElementById('id19').value;
    let id20 = document.getElementById('id20').value;
    let example2 = document.getElementById('example2');

    const integers = [id11, id12, id13, id14, id15, id16, id17, id18, id19, id20];
    let allintegers ="";
    for(let i = 0; i < integers.length; i++){
        if(integers[i]==6){

            continue;
        }
        allintegers+= integers[i] +"<br>";
    }
   example2.innerHTML = allintegers;

}