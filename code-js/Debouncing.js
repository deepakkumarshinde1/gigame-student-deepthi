let element = document.querySelector("#input");
let ul = document.querySelector("#list");

const students = [
  "Sahil Patil",
  "Shubham Deshmukh",
  "Chinmay Kulkarni",
  "Sneha Jadhav",
  "Shreya Joshi",
  "Chirag Pawar",
  "Sagar Shinde",
  "Shivani More",
  "Chaitanya Kale",
  "Sanchit Gupta",
  "Shashank Verma",
  "Charul Singh",
  "Sakshi Patwardhan",
  "Shital Mane",
  "Chetan Bhagat",
  "Sohan Yadav",
  "Shweta Nair",
  "Chhavi Sharma",
  "Siddharth Gokhale",
  "Shrikant Patil",
];

function debounce(fn) {
  let timer = null;
  return function (event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(event);
    }, 500);
  };
}
element.addEventListener(
  "keyup",
  debounce(() => {
    let filterList = students.filter((user) =>
      user.toLowerCase().includes(element.value.toLowerCase()),
    );
    printList(filterList);
  }),
);

function printList(list) {
  ul.innerHTML = list.map((user) => `<li>${user}</li>`).join("");
}

printList(students);

function throttling(fn) {
  let timer = true;
  return function (event) {
    if (timer) {
      timer = false;
      setTimeout(() => {
        timer = true;
        fn(event);
      }, 1000);
    }
  };
}
window.addEventListener(
  "scroll",
  throttling(() => {
    const scrollTop = window.scrollY; //This is the position of your scroll on y axis.
    const windowHeight = window.innerHeight; // The browser page height.
    const documentHeight = document.documentElement.scrollHeight; // Content height

    console.log(scrollTop, windowHeight, documentHeight);
    const scrolledPercentage = (scrollTop + windowHeight) / documentHeight;

    if (scrolledPercentage >= 0.8) {
      console.log("User crossed 80% of page");
    }
  }),
);
