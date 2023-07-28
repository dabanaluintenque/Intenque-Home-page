



function regularReverse(...args){
  
 //  let  words = ['a','b','c'];
    let firstLetter = 0;

   // console.log(words[firstLetter])

    let lastLetter = args.length-1;
   console.log('lastLetter: '+ lastLetter);

    while(firstLetter < lastLetter){

         let temporary = args[firstLetter];
         console.log('temporary: ' +temporary);

        args[firstLetter++] = args[lastLetter];

        // [firstLetter++] = lastLetter;

         args[lastLetter--] = temporary;

  return args;




    }

}

 /*

  public void reverse(int[] data, int low , int high){


    if(low < high){
     
     int temp = data[low]

     data[low] = data[high]

     reverse(low + 1, high -1)
    }
  }
 */






function DisplayRegularReverse(){

 let recursiveReverse = document.getElementById('recursiveReverse').value;
 let second = document.getElementById('secondWord').value;
  

 
 let reverseId = document.getElementById('reverseId');

//console.log(regularReverse());

console.log("D : is " + second);

return  reverseId.innerHTML = regularReverse(recursiveReverse, second);


}



 






 
 



