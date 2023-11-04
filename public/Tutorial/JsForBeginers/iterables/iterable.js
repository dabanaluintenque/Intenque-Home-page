
// iteration
function checkIteration(){

    let id1 = document.getElementById('id1').value;
    let example1 = document.getElementById('example1');
    let allLetters ="";
    let word = id1;
    const char =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const characters =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    characters[0] = 65;
    characters[1] = 66;
    characters[2] = 67;
    characters[3] = 68;
    characters[4] = 69;
    characters[5] = 70;
    characters[6] = 71;
    characters[7] = 72;
    characters[8] = 73;
    characters[9] = 74;
    characters[10] = 75;
    characters[11] = 76;
    characters[12] = 77;
    characters[13] = 78;
    characters[14] = 79;
    characters[15] = 80;
    characters[16] = 81;
    characters[17] = 82;
    characters[18] = 83;
    characters[19] = 84;
    characters[20] = 85;
    characters[21] = 86;
    characters[22] = 87;
    characters[23] = 88;
    characters[24] = 89;
    characters[25] = 90;
    characters[26] = 97;
    characters[27] = 98;
    characters[28] = 99;
    characters[29] = 100;
    characters[30] = 101;
    characters[31] = 102;
    characters[32] = 103;
    characters[33] = 104;
    characters[34] = 105;
    characters[35] = 106;
    characters[36] = 107;
    characters[37] = 108;
    characters[38] = 109;
    characters[39] = 110;
    characters[40] = 111;
    characters[41] = 112;
    characters[42] = 113;
    characters[43] = 114;
    characters[44] = 115;
    characters[45] = 116;
    characters[46] = 117;
    characters[47] = 118;
    characters[48] = 119;
    characters[49] = 120;
    characters[50] = 121;
    characters[51] = 122;  

   for(let i of word){
    console.log("fist i: "+ i);
   // console.log(allLetters +=i);
       for(let j = 0; j< char.length; j++){
          //allLetters += characters[j] +"<br>";
        console.log("First j: " + char[j] + characters[j]);
        if(i==char[j]){

         allLetters+= char[j] +"- in Ascii is:  " + characters[j] +"<br>";
            console.log('i is equal char[j]');
        }
       }
       
        /*  console.log("i is: " + i);
          console.log('character[j]: '+ characters[j]);
           allLetters += "Yes";
       }
     
    if(i=='A'){
       allLetters +=characters[0] +" ";
       }
       else if(i=='B'){
        allLetters += characters[1] +" ";
       }
      console.log( allLetters += i +"<br>");   */
  }
    example1.innerHTML= allLetters;
}