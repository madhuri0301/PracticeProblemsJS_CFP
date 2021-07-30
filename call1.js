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
Student1.feature.call(Student2,78,2019);