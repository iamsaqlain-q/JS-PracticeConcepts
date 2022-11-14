
//declaration
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
//sort by a-z
console.log(fruits.sort());
//reverse z-a
console.log(fruits.reverse());

//numeric array
const nums = [1,50,100,9,3];// sort 1-9 not max
console.log(nums);
console.log(nums.sort());

//another way
nums.sort(function(a,b){return a-b});// callback function
console.log(nums);