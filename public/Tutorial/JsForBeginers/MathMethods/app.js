
function powerMethod(){

    let baseNum = document.getElementById('baseNum').value;
    let power = document.getElementById('power').value;
    let example1 = document.getElementById('example1');

    let value = Math.pow(baseNum, power);


    return example1.innerHTML = baseNum+ " to the power of: " + power +" =  " + value;
}

function squareRoot(){
    
    let squareroot = document.getElementById('squareroot').value;
    let example2 = document.getElementById('example2');

    let result = Math.sqrt(squareroot);

    return example2.innerHTML= "The square root of " +squareroot + "  =  " + result;
}

function absoluteValue(){

    let absolute = document.getElementById('absolute').value;
    let example3 = document.getElementById('example3');

    let value = Math.abs(absolute);

    return example3.innerHTML="The absolute value of "+ value  + " = "+  value;
}

function Radians(){

    let radio = document.getElementById('radio').value;
    let example4 = document.getElementById('example4');

     let angleInRadians = (radio * Math.PI/180);

     return example4.innerHTML= radio+ " degrees in radians =  " + angleInRadians;


}

function mathMinValue(){

   /*  let minvalue = document.getElementById('minvalue').value; */
     
    let example5  = document.getElementById('example5');

    let values = Math.min(1,2,3,4,5,6,-20, 7, -10);
    
    

    return example5.innerHTML= "The lowest value in the list is: " + values;


}

function mathMaxValue(){

    
    let example6 = document.getElementById('example6');

    let list = Math.max(1,2,3,4,5,6,-20, 7, -10);


    return example6.innerHTML=" The highest value in the list is: " + list;
}

function mathLogFun(){
  
    let naturalLog = document.getElementById('naturalLog').value;
    let example7 = document.getElementById('example7');

    let value = Math.log(naturalLog);


    return example7.innerHTML = "The natural log of "+ naturalLog +" =  "+ value;

    
}

function mathLogBase2Func(){

    let example8 = document.getElementById('example8');

    let value1 = document.getElementById('value1').value;

    let result = Math.log2(value1);

     return example8.innerHTML = "The log2 of: "+(value1)+" is: " + result ;
}

function mathLogBase10Func(){

    let base10 = document.getElementById('base10').value;

    let example9 = document.getElementById('example9');

    let result = Math.log10(base10);

    return example9.innerHTML="The log10 of: "+base10 + " =  "+ result;
}

function mathRoundFunc(){

    let roundResult = document.getElementById('roundResult').value;

    let example10 = document.getElementById('example10');

    let result = Math.round(roundResult);

    return example10.innerHTML="The nearest number after " + roundResult + " =  " + result;
}

function mathRandomFunc(){

    let example11 = document.getElementById('example11');

   let value = Math.random();

    return example11.innerHTML=  value;
}

function mathRandomUsingFloor(){

    let example12 = document.getElementById('example12');

    let result = Math.floor(Math.random()* 101);

    return example12.innerHTML= result;
}