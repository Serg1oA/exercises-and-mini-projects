// https://javascript.info/variables

// Task 1
let admin;
let name;
name = "John";
admin = name;
alert(admin);

// Task 2
let ourPlanet = "Earth";
let currentUser = "John";

// Task 3
// Answer: Yes for BIRTHDAY, No for AGE.

/*************************************************/
// https://javascript.info/function-basics

// Task 1
// Answer: No, there is no difference in the behavior of the two variants.

// Task 2
function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
    return age > 18 || confirm("Did parents allow you?");
}

// Task 3
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


// Task 4

function pow(x, n) {
    let result = x;

    for (let i = 0; i < (n-1); i++) {
        result = result * x;
    }

    return "Result: " + result;
}

let xInput = prompt("Pick a number!");
while (isNaN(Number(xInput))) {
    xInput = prompt("That's not a number, try again!");
}

let nInput = prompt("And you want it to the power of...");
while (isNaN(Number(nInput)) || nInput < 1) {
    nInput = prompt("Pick an integer up from 1");
}

alert(pow(xInput, nInput));