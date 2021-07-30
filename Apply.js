 function fullname()  {
        return this.firstname + " " + this.lastname;
    }

const person1 = {
    firstname: "Madhuri",
    lastname: "patil"
}
fullname.apply(person1);