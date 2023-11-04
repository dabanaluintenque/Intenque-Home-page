
let bin = 13;
let bin2 = 0;
//console.log( bin >>> bin2)
//console.log(bin.toString(2))


// convert into binary
  


function convertToBinary(){

   let id1 = document.getElementById('id1').value;
   let example1 = document.getElementById('example1');

   // toString(2). 2 mean return the base number in
   return example1.innerHTML = id1 +" in binary = " +(id1 >>> 0).toString(2);
}

// convert into Decimal
function convertToDecimal(){

    let id2 = document.getElementById('id2').value;
    let example2 = document.getElementById('example2');

  
  // Note: 
  //parseInt(id2, 2)  id is the binary value the user enter & 2 is in the binary conversion.
  //toString(10) 10 mean return the base number in decimal form.
   example2.innerHTML =id2 + ": in decimal: "+ parseInt(id2,2).toString(10);



}

// convert from decimal to hex

function convertDecimalToHex(){

let id3 = document.getElementById('id3').value;
let example3 = document.getElementById('example3');
let res = example3.innerHTML = id3 +" in hex is: "+  (id3>>>0).toString(16);

 
   return res;
}

// convert from hex to decimal

function convertHexToDecimal(){
  let id4 = document.getElementById('id4').value;
  let example4 = document.getElementById('example4');
  
  
  return example4.innerHTML = id4 +" in Decimal is: " +parseInt(id4, 16).toString(10);
}
//console.log(convertHexToDecimal());

