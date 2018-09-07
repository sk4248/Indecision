class Person {
    constructor(name='anonymous', age=0){
  this.name =name;
  this.age = age;

    }
     getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}


class traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
        

    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
   let description = super.getDescription();
   if(this.hasHomeLocation){
       description += ` and he is  visiting from ${this.homeLocation}`;
   }
   return description;
    }

}

const me = new Person('sreekanth', 25);
const un = new Person();
console.log(me.getDescription());
console.log(un.getDescription());

const sree = new traveller ('sreekanth korampally',25,"hyderabad");
console.log(sree.getGreeting());