console.log("Check");

function getCar(name, price){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("It Is Available");
            resolve({namevalue: name, priceevalue: price})
        }, 5000);
    })
}
function Bookplace(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name)
            resolve(["Mumbai","Pune","Nandurbar"])
        },6000)
    })
}
function BookHotel(hotel){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(hotel)
            resolve(["Meera","Surya"])
        },6000)
    })
}

const person = getCar("Madhuri",5000);
const hotel= Bookplace(person);
const Place = BookHotel(hotel);
console.log(Place)

console.log("Done");