
const example1 = document.getElementById("example1");
function Display (something){
   //const example1 = document.getElementById("example1");
   return example1.innerHTML = something;
}

async function School(){

   const id1 = document.getElementById("id1").value;
   
   return example1.innerHTML = id1;
}

School().then(

    function(value){

        Display(value);
    },

    function(error){

        Display(error);
    }
);

