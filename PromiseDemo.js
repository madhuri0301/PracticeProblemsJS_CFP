const Sam = () => {
    return "Hey I Am Sam";
};

const Joe = () => {
   return new Promise((resolve,reject) => {
       setTimeout(() => {
           resolve ("Heyy Joe Here");
       },3000);
   })
};
const stephen = () => {
    return "Hello Stephen It Is!";
};

const callMe = async () =>{
let valOne = Sam()
console.log(valOne);

let valTwo = await Joe();
console.log(valTwo);

let valThree = stephen();
console.log(valThree);
}
callMe()