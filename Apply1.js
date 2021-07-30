const Student1 ={
    name:"Madhuri",
    branch: "CS",
    feature: function(Marks,PassingYear){
        console.log("Working Hard." + this.name + " is My Favourite Student. " + this.branch + " Is Her Branch And Percentage She Got Is " + Marks + ". She Passout In Year " + PassingYear + ".");

    }
}

const Student2 = {
    name: "Riya",
    branch: "Civil"
}
Student1.feature.apply(Student2,[78,2019]);

// let max = Math.max(1,2,3);
// console.log(max);

// let arrmax = Math.apply([1,2,3,4,5,6,7,8,9]);
// console.log(arrmax);