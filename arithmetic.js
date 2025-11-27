function calculateArithmetic(a, b, typeOfCalculation){
    if (typeOfCalculation == "sum"){
        return a + b;
    }
    if (typeOfCalculation == "sub"){
        return a - b;
    }
    if (typeOfCalculation == "multiply"){
        return a * b;
    }
    if (typeOfCalculation == "divide"){
        return a / b;
    }
    displayResult(typeOfCalculation);
}

function displayResult(data) {
  console.log(data);
}

let calculation = calculateArithmetic(3, 5, "sum")  
console.log(calculation);