var $ = require('jquery');
var Person = require('./modules/Person');

alert("test for webpack automation. Again. 123 - Yo!");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();


$("h1").remove();