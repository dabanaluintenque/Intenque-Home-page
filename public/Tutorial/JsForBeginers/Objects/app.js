
const objectDefinition= {

    definition: "In an object we store value as name: value pairs. (where name is the object property and value is the property name."
};
function answer(){

 document.getElementById('example1').innerHTML = objectDefinition.definition;

}

const student = {
    firstName: "Dabana",
    lastName: "Intenque",
     age:       23,
     gpa: 3.7,
     school: "Bridgewater State University",
     email: "student.edu",
     work: "TTC (Teaching Technology Center)",


    information: function(){

   
     
     let info = document.getElementById('example2').innerHTML= "Student information: "+"<br>"+ "first Name: " +this.firstName.replace(student.firstName,"Jorge")+"<br>"+" Last Name: "+
     this.lastName+ "<br>"+"  Age: "+this.age+"<br>"+" GPA: "+this.gpa+"<br>"+"  school: "+this.school+"<br>"+"  Email: "+this.email+"<br>"+"  Work: "+this.work;

      
     
   
     return info;

     }
};  


function getInfo(){

     return student.information();
}





/*
const person= {
     name: "jorge",
     age: 22
};

 console.log(person.name.replace("jorge","student"));  */

 function mutableObject(){

     const id1 = document.getElementById('id1').value;
     const id2 = document.getElementById('id2').value;
     const id3 = document.getElementById('id3').value;
     const id4 = document.getElementById('id4').value;
     const example3 = document.getElementById('example3');

   const student = {

      fullname: id1,
            age: id2,
            id : id3,

       identity: function(){

          return (

               "name: " +this.fullname +"<br> age: "+ this.age +" <br> id: "+ this.id
          )
       }
    }; 

  // This line show that objects are Mutable
  const firstStudent = student;

   firstStudent.fullname = id4;


    return example3.innerHTML = student.identity();
 }

function addNewProperty(){

 const id5 = document.getElementById('id5').value;
 const example4 = document.getElementById('example4');
 const student = {};

 student.email = id5;
 
 
 return example4.innerHTML = mutableObject() +"<br> email: " + student.email;

}

