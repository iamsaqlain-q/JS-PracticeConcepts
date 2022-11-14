class Vehicle{
    constructor(type, company){
        this.type = type;
        this.company = company;
    }

    bike = () => { return "My Vehicle is " + this.type + " of " + this.company + " company"}
    car = () => { return "My Vehicle is " + this.type + " of " + this.company + " company"}
}

let bikeObj = new Vehicle("Bike", "Honda");
let carObj = new Vehicle("Car", "Hyundai");
console.log(bikeObj.bike());
console.log(carObj.car());

// inheritance
class Car {
    constructor(brand) {
      this.brand = brand; // don't know why used carname here?
    }
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(brand, model) {
      super(brand);
      this.model = model;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());