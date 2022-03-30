/* Musketeers
Write a program that:
Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop. */

const musketeers =["Athos", "Porthos", "Aramis"]

// Looping through the array and console.logging each element
for(let i = 0; i <= musketeers.length - 1; i++){
    console.log(`${musketeers[i]}`)}

//added another element to the array 

musketeers.push("D'Artagnan")

//Loop through the array using the forEach method

musketeers.forEach(musketeer => {
    console.log(musketeer)})

//removal of an element using the splice method

musketeers.splice(2,1)

// Loop through the array using the For Of method

for(const musketeer of musketeers){
    console.log(musketeer)}