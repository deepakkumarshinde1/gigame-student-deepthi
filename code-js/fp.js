function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}

function composition(f1, f2) {
  let a = 10;
  let b = 20;
  return f1(f2(a, b), b);
}

let result = composition(multi, multi);
console.log(result);
console.clear();

// function addNumber(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

let addNumber = (a) => (b) => (c) => a + b + c;

console.log(addNumber(10)(20)(30));
