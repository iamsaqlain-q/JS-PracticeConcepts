// Create a Map
const fruits = new Map([
    ["apples", 500],//key, value
    ["bananas", 300],
    ["oranges", 200]
  ]);

  fruits.set("apples", 200);
  
  let text = "";
  fruits.forEach (function(value, key) { //callback function
    text += key + ' = ' + value + " "
  })
  console.log(text);

  //entries()
  let list = " "
  for(let x of fruits.entries()){
    list += x + " "
  }
  console.log(list);
  list