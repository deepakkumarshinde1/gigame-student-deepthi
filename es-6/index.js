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
// map
// generators
// iterators
