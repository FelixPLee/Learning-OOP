'use strict';


const Person = function(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
    
    //Never do this
    // this.calcAge = function() {
    //     console.log(2025 - this.birthYear)
    // }
}

const felix = new Person('Felix', 2005)
const lucio = new Person('Lucio', 2003)
console.log(felix, lucio)

console.log(felix instanceof Person)
console.log(123 instanceof Person)

//Prototypes 
Person.prototype.calcAge = function() {
    console.log(2025 - this.birthYear)
}

felix.calcAge()

// {} linked to prototype
console.log(felix.__proto__)
console.log(lucio.__proto__ === Person.prototype) //Returns true

console.log(Person.prototype.isPrototypeOf(Person)) //Returns false????
console.log(Person.prototype.isPrototypeOf(felix)) //Returns true

//.prototypeOfLinkedObject

Person.prototype.species = 'Homo Sapiens'
console.log(felix.species, lucio.species)

console.log(felix.hasOwnProperty('firstName'))
console.log(felix.hasOwnProperty('species'))