//argument objects are no longer bound with the arrow functions
const add =(a,b)=>{
   return (a+b);
  // console.log(arguments);

}
console.log(add(1+98));






//This keyword doesn't work with arrow functions

const user = {
    name : "sreekanth",
    cities:["Hyderabad","Rochester","Dallas"],

    //ES6 method definition syntax
    printPlacesLived(){
        const cityMessages = this.cities.map((city)=>{
            return this.name + " has lived in " + city;
        })
        return cityMessages;
        }
    }

console.log(user.printPlacesLived());

const multiplier = {
    //numbers - array of numbers
    numbers:[2,5,7],
    multiplyBy:6,
    multiply(){
        const multiplied = this.numbers.map((num)=>{
            return num * this.multiplyBy;
        })
return multiplied;
    }
}
console.log(multiplier.multiply());