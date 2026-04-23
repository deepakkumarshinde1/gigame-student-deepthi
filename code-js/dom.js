// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
//document.querySelector();// only one
//document.querySelectorAll();// list element array => []

function getElement(tag) {
  try {
    element = document.querySelector(tag);
    if (element === null) {
      throw new Error("Element not found for " + tag);
    }
    console.log(tag + " found");
    return element;
  } catch (error) {
    console.error(error.message);
  }
}

/** @type {HTMLSpanElement} */
let spanTag = getElement("#counter-text");

/** @type {HTMLButtonElement} */
let buttonTag = getElement("#btn");

/** @type {HTMLUListElement} */
let ulTag = getElement("ul");

let counter = 0;
buttonTag.addEventListener("click", () => {
  spanTag.innerHTML = counter;
  counter++;
  // spanTag.style.backgroundColor = "green";
  // spanTag.style.color = "white";

  spanTag.classList.add("bg-green");
});

async function getData() {
  try {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    let data = await response.json();

    let list = "";
    for (let i = 0; i < data.length; i++) {
      list += `<li>${data[i].name}</li>`;
    }
    ulTag.innerHTML = list;

    // ulTag.innerHTML = data.map((user) => `<li>${user.name}</li>`).join("");
  } catch (error) {
    console.log(error.message);
  }
}

getData();
