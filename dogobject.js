/* Complete the following program to add the dog object definition. */

const dog = {
    Size: "Large",
    Species: "Great Dane",
    Name: "Jeronimo",

    bark(){
        return "BARK!";
    }
}

console.log(`${dog.Name} is a ${dog.Species} dog measuring ${dog.Size}`);
console.log(`Look, a cat! ${dog.Name} barks: ${dog.bark()}`);