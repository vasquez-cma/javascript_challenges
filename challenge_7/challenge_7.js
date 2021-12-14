// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.


function lapYear(year){
    if(year % 4== 0 && year % 100 != 0 || year % 400 == 0 ){
        console.log("This is a lap year");
    }else{
        console.log("This is not a lap year");
    }
}


