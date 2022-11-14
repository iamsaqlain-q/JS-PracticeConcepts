this.name = "Aditya";
console.log("Global : ", this.name);

function regularFunc() {
    this.surname = "Gawde";
    console.log('Regular function name : ', this.name);
    console.log('Regular function surname : ', this.surname);

    const arrowFunc = () => { //scope is global, do not has its own this
        this.age = 25;
        console.log('Age : ', this.age);
        console.log('Name : ', this.name);
        console.log('Surname : ', this.surname);
    }
    arrowFunc();
}

// const arrowFunc = () => { //scope is global, always refer parent
//     this.age = 25;
//     console.log('Age : ', this.age);
//     console.log('Name : ', this.name);
// }
regularFunc();
// arrowFunc();