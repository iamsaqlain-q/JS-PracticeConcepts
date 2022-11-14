//toString
console.log('toString');
const fruits = ["Banana", "Orange", "Apple"];

console.log(fruits.toString());

//join
console.log('join');
console.log(fruits.join("*"));

//pop
console.log('pop');
fruits.pop();
console.log(fruits);

//push
console.log('push');
fruits.push("newFruits");
console.log(fruits);

//length
console.log('length');
fruits[fruits.length] = "newFruits";
console.log(fruits);

//delete
console.log('delete');
delete fruits[0];
console.log(fruits[0]);

//concat
console.log('concat');
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
