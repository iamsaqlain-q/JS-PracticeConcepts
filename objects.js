let myDetails = {
    name : "Saqlain",
    surname : "Qureshi",
    isPresent : true,
    tech : "React Native",
    conmpany : "Bridgelabz",
    fullName : () => { // taking function as value but not arrow function
        return this.name + " " + this.surname + " " 

    }
}
console.log(myDetails.fullName());
// console.log(myDetails);
// console.log(myDetails.name);
// console.log(myDetails["surname"]);

//object constructor

function MyDetails(name, surname, age, company, isWorking){ // 
this.firstName = name;
this.lastName = surname;
this.age = age;
this.isWorking = isWorking;
this.company = company;
}

const myself = new MyDetails("Saqlain", "Qureshi", 23, "CodeWave", true);
console.log(myself);

let text = " ";
for(let x in myself){
    text += myself[x] + " ";
}
console.log(text);