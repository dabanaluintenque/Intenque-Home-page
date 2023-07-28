
// Example # 1

class Student{

    constructor(fullname, age){

        this.fullname = fullname;
        this.age  = age;
    }

    addAdmin(){

        let adminstrator ="Mr. Intenque";
        return adminstrator;
    }
}

let toDisplay = () =>{
let id1 = document.getElementById('id1').value;
console.log("id1: "+ id1);

let id2 = document.getElementById('id2').value;
console.log("id2: "+ id2);
let example1 = document.getElementById('example1');
example1.style.color='blue';
const mystudent = new Student(id1, id2);

return example1.innerHTML ="Thanks for register to my tutorial. <br> " + "Fullname: " +mystudent.fullname +"<br>" +"Age: " + mystudent.age;

//console.log(mystudent.fullanme);
//console.log(mystudent.age);
}


// second example

let checkMethod = () =>{
    let example2 = document.getElementById('example2');
    const getAdminObject = new Student(0,0);
    example2.innerHTML= toDisplay()+"<br>"+"Admistrator is: "+ getAdminObject.addAdmin();
    example2.style.color='green';
    
}
