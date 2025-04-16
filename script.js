'use strict';


const Person = function(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
    
    //Never do this
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear)
    // }
}

const felix = new Person('Felix', 2005)
const lucio = new Person('Lucio', 2003)
console.log(felix)
console.log(lucio)

console.log(felix instanceof Person)
console.log(123 instanceof Persons)