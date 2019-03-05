/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

function factorsOf(n) {
    var factors = [];
    for (var i = 2; i <=Math.sqrt(n); i++) {
        if (n % i === 0) {
        factors.push(i);
          factors.push(n/i);
        }
    }
   return factors;
}
function primeFactors(factors){
  var prime=[];
  for (var i = 0; i <factors.length; i++) {
        isPrime=true;
      for (var j=0;j<factors.length;j++){
        if(factors[i]%factors[j]===0 && i!==j)
          isPrime=false;
      }
      if(isPrime){
        prime.push(factors[i]);
      }
    }
    return prime;
}
var factors=factorsOf(50);
console.log(factors);
var prime=primeFactors(factors);
console.log(prime);
console.log(Math.max(...prime));
