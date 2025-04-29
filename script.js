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

Person.hey = function() {
    console.log('Hey there')
}
Person.hey()
//felix.hey() error, is not inherited
// is not on the prototype


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

/* 
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

*/

// classes ES6

// const PersonCl = class {}

// class declaration

class PersonCl {
    constructor(fullName, birthYear){
    this.fullName = fullName
    this.birthYear = birthYear
    }
    //Methods
    calcAge() {
        console.log(2025 - this.birthYear)
    }

    get age() {
        return 2025 - this.birthYear
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name
        //else(alert(`${name} is not a full name!`))
    }
    get fullName() {
        return this._fullName
    }
    static hey()  {
        console.log('hey there')
        console.log(this)
    }
}


const felix2 = new PersonCl('Felix', 2005)
console.log(felix2)
felix2.calcAge()
console.log(felix2.age)


console.log(felix2.__proto__ === PersonCl.prototype)

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.fullName}`)
}
felix2.greet()
// Classes are not hoisted
// classes are first-class citizen
// Classes are executed in strict mode

const account = {
    owner: 'Felix',
    movements: [200, 100, 530, 120],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}
console.log(account.latest)

account.latest = 50

PersonCl.hey()


const PersonProto = {
    calcAge() {
        console.log(2025 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear= 2002
        steven.calcAge()
    }
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = 'Steven'
steven.birthYear = 1999
steven.calcAge()

console.log(steven.__proto__ === PersonProto)
const carol = Object.create(PersonProto)
carol.init('Carol', 2003)
carol.calcAge()

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

GOOD LUCK 😀
*/
/*
class car {
    constructor(brand, speed){
        this.speed = speed
        this.brand = brand
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.brand} going at ${this.speed}`)
    }

    break() {
        this.speed -= 5
        console.log(`${this.brand} going at ${this.speed}`)
    }
    
    get speedUs() {
        return this.speed / 1.6
    }
    set speedUs(speedMi) {
        this.speed = speedMi * 1.6
    }
}

const corolla = new car("toyota", 80)
*/

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course;
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const gabriel = new Student('Baias', 2002, 'ADS')

Student.prototype.constructor = Student