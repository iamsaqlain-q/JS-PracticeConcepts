// Create a Set
const letters = new Set(["a","b",null,2,undefined]);//unique values

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value + " ";
})
console.log(text);
console.log(letters.values());// iterate through all values in set