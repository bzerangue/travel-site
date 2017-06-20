// ES6 syntax
class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }
    
    
    greet() {
        console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

// Javascript - ES5 way
// module.exports = Person;

// ES6 way...
export default Person;