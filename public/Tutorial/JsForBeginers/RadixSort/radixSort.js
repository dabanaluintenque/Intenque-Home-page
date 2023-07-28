
// Display my name and title
function Assignment4 (){

    const id = document.getElementById('id#4').innerHTML
    ="Name: Dabana";
}
Assignment4()

// finding max value first
function maxValue(list, number){

    let max = list[0];
    for (let i = 1; i < number; i ++)
        if(list[i] > max)
        max = [list[i]];

        return max;
}

// counting sort of list [] number by number

function countSort(list, number, index){
    let output = new Array(number); 
    let i;
    let count = new Array(10);
    for(let i = 0; i< 10; i++)
     count[i] = 0;
    
    // Store the value of count
    for(i = 0; i < number; i++)
        count[Math.floor(list[i]/ index) % 10] ++;

    // the actual position of i

    for (i = 1; i<10; i++)
        count[i] += count[i-1];

    for (i = number-1; i>= 0; i--){
        output[count[Math.floor(list[i]/ index) % 10] -1] = list
    }

    for( i = 0; i < number ; i++)
    list[i] = output[i];
    
}

//here I am sorting the list

    function radixSort( list, number){

        // return the max value
        let maxval = maxValue(list, number);
        
        for (let index = 1; Math.floor(maxval/index) > 0; index *=10)

        countSort(list, number, index);

    }
       let list = [77, 177, 200, 900, 7, 13, 15,5, 100, 17];
       let number = list.length;
       console.log(radixSort(list, number))
