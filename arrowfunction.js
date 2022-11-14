let myFunction = (a, b) => a * b;
console.log(myFunction(2,3));

let hello = " ";
hello = () => {return "Hey there";}
console.log(hello());

hello = () => "Hey there"
console.log(hello());

hello = (str) => "Hey " + str;
console.log(hello("Everyone"));

age = (a) => {if(a > 18) return "Voter" }
console.log(age(17));