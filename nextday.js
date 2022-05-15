//Following day
//Write a program that accepts a day name from the user, then shows the name of 
//the following day. Incorrect inputs must be taken into account.

function nextday(){
    let day = prompt("What day is it?")
    let currentday = day.toLowerCase()
    if(currentday == 'monday'){
        console.log("Tuesday")
    }else if(currentday == 'tuesday'){
        console.log("Wednesday")
    }else if(currentday == 'wednesday'){
        console.log("Thursday")
    }else if(currentday == 'thursday'){
        console.log("Friday")
    }else if(currentday == 'friday'){
        console.log("Saturday")
    }else if(currentday == 'saturday'){
        console.log("Sunday")
    }else if(currentday == 'sunday'){
        console.log("Monday")
    }else{
         console.log("Not a day.")
    }
}