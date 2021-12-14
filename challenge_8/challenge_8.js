// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050


console.log("-------------");

for(var year = 2014; year <= 2050; year++){
    var d = new Date(year,0,3);

    if(d.getDay() === 3){
        console.log("The year " + year + " is wednesday, january 3th");
    }
}

console.log("-------------");