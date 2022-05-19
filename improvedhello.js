//Improved hello
//Write a program that asks the user for his first name and his last name. The 
//program then displays them in one sentence.

function personalizedgreetings(){
    let fname = prompt("What is your first name?")
    let lname = prompt("What is your last name?")

    console.log(`Greetings, ${fname} ${lname}`)
}