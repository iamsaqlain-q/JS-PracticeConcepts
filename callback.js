// Create array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) { // what is callback here?
      myArray.push(x);
    }
  }
  return myArray;
}

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0); // callback() as arrow function

// Display positive numbers
console.log(posNumbers);