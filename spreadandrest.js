//spread
const company = "Bridgelabz";

console.log([...company]); //each character as array value
console.log(...company); //each character as separate variable
console.log(...company[3]); //character at position 3
console.log({...company}); //each character as object(key, value) 

const myName = ["Qureshi", "is", "my"];
const aboutMe = ["Saqlain", ...myName, "name."]; //can join two array using spread

console.log(aboutMe);

//rest
// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { // rest will be as last argument, only one in function
    return otherInfo;
  }
  
  //firstName, lastName will be first two values other values are otherInfo
  console.log(myBio("Saqlain", "Qureshi", 23, "Full-Stack Developer", "Male"));