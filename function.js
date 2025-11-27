//function greet(name){
//  console.log("Salam", name);
//}


//greet('Faheem');


function sum(a, b, fnToCall) {
  let result =  a + b;
  fnToCall(result);
}

function resultDisplay(data) {
  console.log("Sum's result is " + data);
}

let a = sum(3, 4, resultDisplay);
