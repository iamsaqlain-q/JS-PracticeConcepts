console.log('Logical & : ');
console.log(true && true); // true
console.log(false && true); // false
console.log(10 > 0 && 10 < 50); // true

console.log('& opearator in if block : ');
let value_1 = 10;
let value_2 = -10;
if(value_1 > 0 && value_2 > 0){
    console.log("Both values are positive");
}
else{
    console.log("Either one or both the values are negative");
}

console.log('Logical || : ');
console.log(false || false); // false
console.log(false || true); // true
console.log(10 < 0 || 10 > 50); // false

console.log('|| opearator in if block : ');
let value_3 = -10;
let value_4 = -55;
if(value_3 > 0 || value_4 > 0){
    console.log("Either one or both the values are positive.");
}else{
    console.log("Both the values are negative.");
}

console.log('Logical ! : ');
console.log(!true); // false
console.log(!10); // false
console.log(!0); // true

console.log('! opearator in if block : ');
const value_5 = 5;
const value_6 = -1;

if(!(value_5 < 0 || value_6 < 0)){
    console.log(true)
}
else{
    console.log(false);
}

console.log('Ternary Condition : ');
const age = 23;
const voter = age >= 18 ? "Eligible for Vote" : "Not eligible for Vote!";
console.log(voter); 