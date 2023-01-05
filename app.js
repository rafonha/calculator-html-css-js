let a = document.getElementById("firstNumber").value;
let b = document.getElementById("secondNumber").value;
let sumRes = document.getElementById("sum");
let subtractRes = document.getElementById("minus");
let multiplicationRes = document.getElementById("multiplication");
let divisionRes = document.getElementById("division");
let powerRes = document.getElementById("power");
let squareRes = document.getElementById("squareRoot");
let percentageRes = document.getElementById("percentage");
let averageRes = document.getElementById("average");


const sum = (a, b) => {
    sumRes.innerHTML = a + b;
    console.log("valor de sumRes", sumRes)  
};

const subtraction = (a, b) => {
    subtractRes.innerHTML = a - b;
};

const multiplication = (a, b) => {
    multiplicationRes.innerHTML = a * b;
};

const division = (a, b) => {
    divisionRes.innerHTML = a / b;
};

const power = (a, b) => {
    powerRes.innerHTML = Math.pow(a, b);
};

const squareRoot = (a, b) => {
    squareRes.innerHTML = Math.sqrt((a * a) + (b * b));
};

const percentage = (a, b) => {
    percentageRes.innerHTML = a % b;
};

const average = (a, b) => {
    averageRes.innerHTML = (a + b)/2;
};

const calculate = (a, b) => {
    preventDefault();
    console.log("estou em calculate");
    sum(a, b);
    subtraction(a, b);
    multiplication(a, b);
    division(a, b);
    power(a, b);
    squareRoot(a, b);
    percentage(a, b);
    average(a, b);
}