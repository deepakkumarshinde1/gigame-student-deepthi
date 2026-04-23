console.log("welcome");

// logic must be async
// try catch block ... for exception handling

/*
async function div(a, b) {
  if (b == 0) {
    return Promise.reject("Can't divide by zero");
  } else {
    let result = a / b;
    return Promise.resolve(result);
  }
}
*/
function div(a, b) {
  try {
    if (b == 0) {
      throw new Error("Can't divide by zero");
    } else {
      let result = a / b;
      console.log(result);
    }
  } catch (error) {
    console.error(error.message);
  }
}

getData();
console.log("---- start -----");
div(10, 0);
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
console.log("---- stop -----");

/*
    async function handelData(){
        try{
            let result = await p1();
            let r2 = await p2()
            let r3 = await p3()
            let r4 = await p4;
            print(result)
        }catch(error){
            
        }
    }
*/

// call api
async function getData() {
  try {
    let url = "https://jsonplaceholder.typicode.in/users";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
