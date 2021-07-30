var Jethalal = {
    wife: "Daya",
    age: 50
}
var Bhide = {
    wife: "Madhavi",
    age: 45
}
function Popatlal(a,b){
    console.log(this.wife + " Will Cook Food");
    console.log("a =" +a, "b =" +b)
}
//Call()
//Popatlal.call(Jethalal,"Hello",20); //we can pass arguments in call method

//Apply()
//Popatlal.apply(Jethalal,["Hello",20]);
 
//bind()
var fun = Popatlal.bind(Bhide);
fun("Hello",20);