//From Celsius to Fahrenheit degrees
//Write a program that asks for a temperature in Celsius degrees, then displays 
//it in Fahrenheit degrees.

function changingtemp(){
    let cTemp = Number(prompt("What is the temp in celsius?"))
    let fTemp = (cTemp * 9/5) + 32
    console.log(`${fTemp}`)
}