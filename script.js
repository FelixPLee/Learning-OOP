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


//prototype chain
console.log(felix.__proto__.__proto__) //Obj
console.log(felix.__proto__.__proto__.__proto__) //null

console.dir(Person.prototype.constructor)

const arr = [3, 4, 5, 3, 4, 5, 5, 3]
console.log(arr.__proto__) //Array
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__)


//cool but avoid using
Array.prototype.unique = function() {
    return [...new Set(this)]
}
console.log(arr.unique())

const h1 = document.querySelector('.h1')

/////////Challenge///////////


const Car = function(brand, speed){
    this.brand = brand
    this.speed = speed
}

Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(`${this.brand} going at ${this.speed}`)
}

Car.prototype.brake = function() {
    this.speed -= 5
    console.log(`${this.brand} going at ${this.speed}`)
}

const BMW = new Car('BMW', 120)
const Mercedes = new Car('Mercedes', 95)

console.log(`${BMW.brand} going at ${BMW.speed}`)
BMW.accelerate()
BMW.brake()
Mercedes.accelerate()
Mercedes.brake()

// classes ES6

// const PersonCl = class {}

// class declaration

class PersonCl {
    constructor(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
    }
    //Methods
    calcAge() {
        console.log(2025 - this.birthYear)
    }
}


const felix2 = new PersonCl('felix', 2005)
console.log(felix2)
felix2.calcAge()

console.log(felix2.__proto__ === PersonCl.prototype)

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`)
}
felix2.greet()
// Classes are not hoisted
// classes are first-class citizen
// Classes are executed in strict mode