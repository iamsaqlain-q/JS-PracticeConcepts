let points = new Array(10,20,30,70,50,35);
console.log(points);

//traditional for
console.log("Traditional for ")
let traditional = "";
for(let i = 0; i < points.length; i++){
    traditional +=points[i] + " ";
}
console.log(traditional);

//for in
console.log("for in")
let person = {name : "P1", id : Math.floor(Math.random()*10), age : Math.floor(Math.random()*99)}
let print = ""
for(let x in person){ //x is key
    print += person[x] + " ";
}
console.log(print);

//for of
console.log("for of")
let cars = ["Honda", "Ford", "Audi"];
let txt = "";
for(let x of cars){ // x is value
    txt += x + " \t"
}
console.log(txt)

//for of in string
console.log("for of string")
let language = "Javascript";
let str = " ";
for(let y of language){
    str += y + " ";
}
console.log(str);

//Array.forEach
console.log("For Each");
let arr = new Array(20, 35, 75, 21, 66);
let text = " "
arr.forEach(myFunction);
console.log(text);

function myFunction(value, index, array){
text += value + "\t";
}

