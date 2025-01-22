class Car {
  constructor(name) {
    this.brand = name;
  }
  //create a method named "present"
  present () {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("ford");
mycar.present();