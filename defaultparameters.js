function multiply(a, b = 1){
    return a * b;
}

console.log(multiply(5, 2)); // b will become 2
console.log(multiply(5)); // b will be 1 by default

function multiply(a, b) {
    return a * b;
  }
  
  multiply(5, 2); // 10 
  multiply(5); // b's value would be undefined when evaluating multiply would return NaN.