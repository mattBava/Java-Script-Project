//First Cosole Log
//console.log('Hello World');

//Creation of variables
//let name = 'Matthew';
//console.log(name);

//Creation of Constant Variable
//const interestRate = 0.3;

//Different types of variables
//let word = 'String';
//let number =00; //Number
//let bool = false; // Boolean
//let undef = Null; // Its null can be changed to anything

// Reference Types
//let person = {
//name:'Matt',
//number: 22
//};

//Dot Notation
//person.name = 'John';
//console.log(person.name);

//Bracket Notation
//person['name'] = 'Karen';
//console.log(person.name);

//creation of Arrays
let selectedColors =  ['red', 'blue'];
selectedColors[2] = 'green';
document.write(selectedColors[0]);
document.write(selectedColors.length);

//Preforming task
function greet(name, lastName) {
    document.write('Hello ' + name +' ' + lastName);
    
}
greet('john', 'bava');

// Calculating a Value
function square(number){
    return number * number;
}

let numbers =square(2);
document.writeln(numbers);
document.writeln('Test');