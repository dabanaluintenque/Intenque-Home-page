

function modifyTable(){

  const t2 = document.getElementById('t2');
    if(t2.firstChild.nodeValue =='tree'){
    t2 ='two';
  }

  else{
    t2.firstChild.nodeValue ="three";
  }
}

// Add event listener to Table

const element = document.getElementById('outside');
element.addEventListener('click', modifyTable, false);