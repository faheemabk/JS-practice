function calculateArithmetic(a, b, arithmeticfinalfunction, displayAnswer){
    let ans = arithmeticfinalfunction(a,b)
    return ans;
}

function displayAnswer(){
    console.log(ans);
}

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}


let finalans = calculateArithmetic(2,3,sub);

displayAnswer();