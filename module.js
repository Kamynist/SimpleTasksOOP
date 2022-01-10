export class User {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }

    sayHi() {
        console.log('Hi' + this.name + " " + this.surname + " " + 'Age = ' + this.age)
    }
}