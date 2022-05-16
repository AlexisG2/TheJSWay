//Number of days in a month
//Write a program that accepts a month number (between 1 and 12), then shows 
//the number of days of that month. Leap years are excluded. Incorrect inputs 
//must be taken into account.

function numofdays(){
    let month = Number(prompt("Enter the months number to get the days in the month"))
        if(month == 1){
            console.log("There are 31 days in the first month of the year")
        }else if(month == 2){
            console.log("There are 28 days in the second month of the year")
        }else if(month == 3){
            console.log("There are 31 days in the third month of the year")
        }else if(month == 4){
            console.log("There are 30 days in the fourth month of the year")
        }else if(month == 5){
            console.log("There are 31 days in the fifth month of the year")
        }else if(month == 6){
            console.log("There are 30 days in the sixth month of the year")
        }else if(month == 7){
            console.log("There are 31 days in the seventh month of the year")
        }else if(month == 8){
            console.log("There are 31 days in the eighth month of the year")
        }else if(month == 9){
            console.log("There are 30 days in the ninth month of the year")
        }else if(month == 10){
            console.log("There are 31 days in the tenth month of the year")
        }else if(month == 11){
            console.log("There are 30 days in the eleventh month of the year")
        }else if (month == 12){
            console.log("There are 31 days in the twelveth month of the year")
        }
}