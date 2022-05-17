//VAT calculation
//Write a program that asks the user for a raw price. After that, it calculates 
//the corresponding final price using a VAT rate of 20.6%.

function finalprice(){
    let grossPrice = Number(prompt("What is the gross price?"))
    let vatTax = .2
    let needtoadd = (grossPrice * vatTax)
    let totalprice = grossPrice + needtoadd
    console.log(`Your final price is ${totalprice}`)}