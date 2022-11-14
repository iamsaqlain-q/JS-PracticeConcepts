//forEach
console.log('forEach');
const numbers = [1, 2, 3];
let txt = "";
numbers.forEach(forEachFunction);

function forEachFunction(value) {
    txt += value + " ";
}
console.log(txt);

//map
console.log('map');
const numbers1 = [5, 6, 7];
const numbers2 = numbers1.map(mapFunction);

function mapFunction(value) {
    return value * 2;
}
console.log(numbers2);

//filter
console.log('filter');
const numbers3 = [19, 25, 7];
const over18 = numbers3.filter(filterFunction);

function filterFunction(value) {
    return value > 18;
}
console.log(over18);

//reduce
console.log('reduce');
const numbers4 = [19, 25, 7];
let sum = numbers4.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log(sum);

//indexOf
console.log('indexOf');
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");

console.log('Index of Apple : ', position); 
