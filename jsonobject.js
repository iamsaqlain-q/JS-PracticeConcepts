const myJSON = '{"name":"John", "age":30, "car":2}';
const myObj = JSON.parse(myJSON);
//JSON.stringify

let text = "";
for (const x in myObj) {
  text += myObj[x] + " ";
}
console.log(text);