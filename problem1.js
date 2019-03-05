/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

let arr = []; 
for (var i = 1; i < 1000; i++) {
  arr.push(i); //array of [1, ... ,1000]
}
const newArr = arr.filter(num => num%3 === 0 || num%5 === 0);//new array of 3 & 5 multipliers
const sum = newArr.reduce((total, index) => total+index, 0); //sum of the new array
console.log(sum); 
