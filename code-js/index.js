let text1 = "deepak";
text1 = "deepakkumar";

const text2 = "deepak";
// text2 = "deepak";

// scopes
// global
let sName = "deepak";

// block
if (true) {
  let sName = "deepthi";
  console.log(sName);
}
sName = "kumar";
// function

function funName(n1, n2, n3 = 0, n4 = 0, n5 = 0) {
  console.log(n1, n2, n3, n4, n5);
}

funName(10, 20, 30);

function fun(n1) {
  let result = n1 * 2; // lexical scope
  console.log("hello world");

  function child() {
    result++;
    console.log(result);
  } // closures
  return child;
}

let child = fun(100);
child();
child();

let child1 = fun(200);
child1();
child1();

// There are several operations which we can perform with JavaScript.

// States are basically used to handle a data inside a component.

// JavaScript also comes with some more function.

// general functions
function funOne() {}
// function expression.
let funTwo = function () {};
funTwo();

// callback function.
// A callback is a function which is called in another function call.
// A function when passed as a parameter is called as a callback function.
function funThree(a) {
  a();
}

funThree(funTwo);
// Arrow function
let funFour = (callback) => {
  callback();
};
funFour(() => {});
// immediately invoke function expression.

(function (a) {
  // code
})(10);

// So we will learn asynchronous JavaScript now.

// WEB APIs
// Set timeout,Set interval, fetch method, XHR ( Ajax ),Promises, async await .
// Set , Map , Symbols, Generators

console.log("Hello");
setTimeout(() => {
  console.log("Hey");
}, 0); // 1000ms === 1s

let counter = 10;
let intervalId = setInterval(() => {
  counter--;
  console.log("interval " + counter);
  if (counter === 0) {
    clearInterval(intervalId);
  }
}, 1000);
console.log("Hi");
