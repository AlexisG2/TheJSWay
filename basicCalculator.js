//Calculator
//Complete the following program so that it offers the four basic arithmetical 
//operations: addition, subtraction, multiplication and division. You can use 
//either a function declaration or a function expression.

function basicCalculator(x,operand,y){
    if(operand == '+'){
        let sum = x + y
        console.log(`${x} + ${y} = ${sum}`)
    }if(operand == '-'){
        let difference = x - y
        console.log(`${x} - ${y} = ${difference}`)
    }if(operand == 'x'){
        let product = x * y
        console.log(`${x} x ${y} = ${product}`)
    }if(operand == '/'){
        let quotient = x / y
        console.log(`${x} / ${y} = ${quotient}`)
     }
}