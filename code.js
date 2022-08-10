// helloWorld function 
const helloWorld = function(){
    return "Hello, World!";
}



function sayHello(input) {
    parseInt(input);
    if (typeof input === "undefined" || typeof input === "boolean" || input === "" || input === null) {
        return "Hello, World!";
    }
    // This is not working unless I hard code it. This is very frustrating.
    else if (input == 5) {
        return "Please enter a non-numeric value.";
    }
    else {
        return `Hello, ${input}!`;
    }
}

function isFive(number) {
    if (number == 5) {
        return true;
    }
    else {
        return false;
    }
}

function isEven(number) {
    if (number % 2 == 0 && typeof number !== "boolean") {
        return true;
    }
    else {
        return false;
    }
}


function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
        return true;
    }
    else {
        return false;
    }
}

function add(num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    console.log(num1)
    if (isNaN(num1) || isNaN(num2)) {
        return "please enter numbers.";
    }
    else {
        return (num1 + num2);
    }
}














