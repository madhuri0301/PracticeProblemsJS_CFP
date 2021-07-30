const Student1 ={
    name:"Madhuri",
    branch: "CS"
}

const Student2 = {
    name: "Riya",
    branch: "Civil"
}

const Student3 = {
    name: "Pranali",
    branch: "Mechanical"
}

function feature (){
    console.log("Working Hard." + this.name + " is My Favourite Student. " + this.branch + " Is Her Branch.");
}

let Student = feature.bind(Student1);
Student();