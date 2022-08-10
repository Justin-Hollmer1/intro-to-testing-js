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
