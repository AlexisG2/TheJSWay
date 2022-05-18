//Minimalistic calculator
//Write a program that displays the results of adding, subtracting, multiplying 
//and dividing 6 by 3.

function displayresults(){
    let numone = 6
    let numtwo = 3
    
    let quotient = 6 / 3
    let multiply = 6 * 3
    let add = 6 + 3
    let subtract = 6 - 3

    console.log(`${numone} / ${numtwo} = ${quotient}`)
    console.log(`${numone} * ${numtwo} = ${multiply}`)
    console.log(`${numone} + ${numtwo} = ${add}`)
    console.log(`${numone} - ${numtwo} = ${subtract}`)
}