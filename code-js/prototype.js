String.prototype.getMoreValues = function () {
  let text = this.toString();
  return {
    len: text.length,
    uc: text.toUpperCase(),
    lc: text.toLowerCase(),
  };
};

let text = "Deepakkumar";
text.getMoreValues();

let text2 = "Om";

text2.getMoreValues();
// constructor function
// collection methods and properties

// inheritance
// parent class
class CollageManagement {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(this.age, this.name);
  }
}

// child class
class Student extends CollageManagement {
  constructor() {
    super();
  }
  getFees() {
    console.log(this.name, " is running ");
  }

  getTimeTable() {}
}

class Teacher extends CollageManagement {
  constructor(name, age) {
    super(name, age);
  }

  getLectureDetails() {}

  printSalarySlip() {}

  getInfo() {
    super.getInfo();
    console.log("this is teacher class");
  }
}

let student = new Student("Deepak", 36);
student.getFees();
student.getInfo();

let teacher = new Teacher("Kumar", "37");
teacher.getInfo();

// let date = new Date();
// date.getDate();
Date.now(); // static method

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  static name = "Product Class";
  static getTax() {
    console.log("this is tax method");
    console.log(this.name);
  }
}

Product.getTax();
