
function useCall() {
  const id1 = document.getElementById("id1");
  const id2 = document.getElementById("id2");
  const example1 = document.getElementById("example1");

  const Users = {
    Identity: function(){
      return "Full name: " + this.fullname + " <br> Password: " + this.password;
    },
  };

  const firstUser = {
    fullname: id1.value,

    password: id2.value,
  };

  return example1.innerHTML =  Users.Identity.call(firstUser);
}