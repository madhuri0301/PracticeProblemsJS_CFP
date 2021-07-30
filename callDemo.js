var Madhuri = {
    Branch: "CS",
    passingYear: 2020

}
var Mayur = {
    Branch:"Civil",
    passingYear: 2018
}
function Bridgelabz(){
        console.log(this.Branch + " Student Please Come!!");
}
Bridgelabz.call(Madhuri);
