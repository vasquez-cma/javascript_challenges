// Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 

function getMultiplication(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 * number2;

    alert("The result of the multiplication beetween this two numbers is: " + result);
}

function getDivision(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 / number2;

    alert("The result of the division beetween this two numbers is: " + result);
}