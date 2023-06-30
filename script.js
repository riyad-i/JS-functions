sayHello('Alex');

//* declare a function or function definition

// regular function declaration
function sayHello(name) { // declaring the parameter name
    console.log(`Hello ${name}`);
}


// function expression
const sayBye = function(friend, pet) {
    console.log(`Good Bye my friend ${friend} and his pet ${pet}`);
}

sayBye('John');





let username = 'Clement';

//* call or execute the function
sayHello('John'); // passing the argument of the string 'john'
sayHello(username);

sayHello('Mark');

sayBye('John', 'bolt');


console.log('============================================');

// function add(num1, num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 + num2);
//     }else {
//         console.log('Arguments needs to be numbers');
//     }

// }

// regular function
function add(num1, num2) {
        console.log(num1 + num2);
}
add(1, 2);

// arrow function
const addTwoNumbers = (num1, num2) => console.log(num1 + num2);
addTwoNumbers(2,2);

// arrow function with no parameters
const sayHelloWorld = () => console.log('Hello World!');

// arrow function with one parameter
const sayHelloAgain = name => console.log(`Hello ${name}`); 
sayHelloAgain('Mark');

console.log('=================================');

//* return keyword

function multiply(num1, num2) {
    return num1 * num2; // returns the value outside of the function
}

const result = multiply(3, 5);
console.log(result);


const subtract = (num1, num2) => num1 - num2;

const total = subtract(10, 5);
console.log(total);


function areBothEven(n1, n2) {
    // console.log( !(n1%2));
    return !(n1 % 2) && !(n2 % 2);
}

const isEven = areBothEven(2, 2);
console.log(isEven);

// return a array
function myArray(n1, n2) {
    return [n1+n2];
}

const arr = myArray(3,3);
console.log(arr);

// return an object
function studentInfo(studentName, cohort) {
    return {
        name: studentName,
        cohort: cohort
    }
}

const s1 = studentInfo('John', '101-2023');

console.log(s1);