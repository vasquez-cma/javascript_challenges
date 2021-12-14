// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".


let randomNumber = Math.floor(Math.random()*10);

let number = parseInt(prompt("Guess the number from 1 to 10"));


if(randomNumber == number){
    console.log("you guess the number");
}else{
    console.log("You did not guess the number");
}

console.log(randomNumber);