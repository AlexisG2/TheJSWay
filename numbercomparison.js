//Number comparison
//Write a program that accepts two numbers, then 
//compares their values and displays an appropriate 
//message in all cases.

function comparenums(n1,n2){
    if(n1 < n2){
        console.log(`${n1} is less than ${n2}`)
    }else if(n1 > n2){
        console.log(`${n1} is greater than ${n2}`)
    }else if(n1 === n2){
        console.log(`${n1} is equal to ${n2}`)
    }else if(n2 < n1){
        console.log(`${n2} is less than ${n1}`)
    }else if(n2 > n1){
        console.log(`${n2} is greater than ${n1}`)
    }else if (n2 === n1){
        console.log(`${n2} is equal to ${n1}`)
    }else{
        console.log(`These cannot be compared`)
    }
}