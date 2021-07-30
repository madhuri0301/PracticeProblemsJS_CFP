const Sam = () => {
    console.log("Hey I Am Sam");
};

const Joe = () => {
    setTimeout(() =>{
        console.log("Opps!");
    },3000);
    console.log("Heyy Joe here!")
};
const stephen = () => {
    console.log("Hello Stephen It Is!");
};

Sam();
Joe();
stephen();