// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today  = new Date();

let weekDay = today.toLocaleString("default",{weekday:"long"});

console.log("Today is " + weekDay);
console.log("Current time is " + today.toLocaleTimeString());

