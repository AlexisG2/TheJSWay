/* Sum of values
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case). const values = [3, 11, 7, 2, 9, 10]; */


//using forEach
const values = [3, 11, 7, 2, 9, 10];
let sum = 0
values.forEach(num => {
    sum += num})
console.log(sum)