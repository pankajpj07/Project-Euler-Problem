let arr = []; 
for (var i = 1; i < 1000; i++) {
  arr.push(i); //array of [1, ... ,1000]
}
const newArr = arr.filter(num => num%3 === 0 || num%5 === 0);//new array of 3 & 5 multipliers
const sum = newArr.reduce((total, index) => total+index, 0); //sum of the new array
console.log(sum); 
