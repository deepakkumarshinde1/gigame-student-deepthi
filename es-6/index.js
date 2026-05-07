//2015 => ES6

// let const
// ()=>{}
// async await
// fetch
// class

// destructuring
let array = [10, 20, 30, 40, 50];
// let num1 = array[0];
// let num2 = array[1];

let [num1, num2, ...num3] = array;

console.log(num1, num2, num3);

let student = {
  sName: "deepakkumar",
  sMarks: 30.45,
  city: "Nashik",
};

// let sName = student.sName;
// let sMarks = student.sMarks;
// let studentName = student.sName;

let { sMarks, sName: studentName, ...list } = student;
console.log(studentName, list);
console.clear();
// spread operator
let array1 = [10, 20, 30];
let array2 = [100, 200, 300];

let array3 = [1000, 2000, ...array1, 1.1, 1.2, ...array2];
console.log(array3);

let city = {
  cityName: "Nashik",
  state: "Maharashtra",
};

let _student = {
  sName: "Deepakkumar",
  age: 36,
  course: "React JS",
};

let studentDetails = { ...city, ..._student };
studentDetails.cityName = "Mumbai";
console.clear();
console.log(city);
console.log(studentDetails);

// rest parameter
function add(a, b, ...numbers) {
  console.log(numbers);
}
add(1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6);

// template literals
let cityName = "pune";
let text = `my city name is ${cityName}`;
console.clear();
console.log(text);

// let _tr = `<tr>
//                 <td>${var1}</td>
//                 <td>${var2}</td>
//                 <td>${var3}</td>
//                 <td>${var4}</td>
//                 <td>${var5}</td>
//             </tr>`;

// object literals
let productName = "Dell";
let productQty = 30;

let productDetails = {
  productName,
  productQty,
};
console.clear();
let error = { code: 500, message: "data" };
let data = { list: [10, 30] };

let response = { error, data };
console.log(response);
console.log(productDetails);

// symbols
let id = Symbol("id");

let empDetails = {
  [id]: "1234",
  name: "Deepakkumar",
  designation: "Trainer",
  exp: "15+",
};

console.clear();

console.log(Object.keys(empDetails));
console.log(Object.values(empDetails));
console.log(Object.entries(empDetails));

// set
let set = new Set([10, 20, 30, 40, 50]);
set.add(60);
set.add(10);
console.log(set); // Set(6) { 10, 20, 30, 40, 50, 60 }
set.delete(20);
console.log(set); // Set(5) { 10, 30, 40, 50, 60 }
console.log(set.has(30)); // true
console.log(set.size); // 5
set.clear();
console.log(set); // Set(0) {}

// map
let studentData = {
  sName: "Deepakkumar",
  sMarks: 30.45,
  city: "Nashik",
};

Object.entries(studentData); // [ [ 'sName', 'Deepakkumar' ], [ 'sMarks', 30.45 ], [ 'city', 'Nashik' ] ]
let map = new Map([]);
map.set("sName", "Deepakkumar");
map.set("sMarks", 30.45);
map.set("city", "Nashik");

// map.set(true, "boolean value");
map.has("sMarks"); // true
map.delete("city");
console.log(map); // Map(2) { 'sName' => 'Deepakkumar', 'sMarks' => 30.45 }
console.log(map.get("sName")); // Deepakkumar
console.log(map.size); // 2
map.clear();
console.log(map); // Map(0) { }

// map => object
let map1 = new Map([
  ["sName", "Deepakkumar"],
  ["sMarks", 30.45],
  ["city", "Nashik"],
]);
let obj = Object.fromEntries(map1);
console.log(obj); // { sName: 'Deepakkumar', sMarks: 30.45, city: 'Nashik' }

// set => array
let set1 = new Set([10, 20, 30, 40, 50]);
let arr = [...set1];
console.log(arr); // [ 10, 20, 30, 40, 50 ]

// generators
function* loop() {
  let i = 0;
  while (i < 5) {
    if (i === 4) {
      return i;
    } else {
      yield i;
    }
    i++;
  }
  // yield 10;
  // yield 20;
  // yield 30;
}

let genInstance = loop();

// getInstance.next(); // { value: 0, done: false }
// getInstance.next(); // { value: 1, done: false }
// getInstance.next(); // { value: 2, done: false }
// getInstance.next(); // { value: 3, done: false }
// getInstance.next(); // { value: 4, done: true }
// getInstance.next(); // { value: 10, done: false }
// getInstance.next(); // { value: 20, done: false }
// getInstance.next(); // { value: 30, done: false }
// getInstance.next(); // { value: undefined, done: true }

getInstance.next(); // { value: 0, done: false }
getInstance.next(); // { value: 1, done: false }
getInstance.next(); // { value: 2, done: false }
getInstance.next(); // { value: 3, done: false }
getInstance.next(); // { value: 4, done: true }

// getInstance.next(); // { value: 4, done: false }
// getInstance.next(); // { value: undefined, done: true }

// iterators
let array = [10, 20, 30, 40, 50];
let arrayIterator = array[Symbol.iterator]();
arrayIterator.next(); // { value: 10, done: false }
arrayIterator.next(); // { value: 20, done: false }
arrayIterator.next(); // { value: 30, done: false }
arrayIterator.next(); // { value: 40, done: false }
arrayIterator.next(); // { value: 50, done: false }
arrayIterator.next(); // { value: undefined, done: true }

// react topic
// foundation
// components
// props
// state
// lifecycle methods
// hooks
// routing
// redux
// thunk
// hoc
// auth & authorization
// performance optimization
// internalization
// testing
