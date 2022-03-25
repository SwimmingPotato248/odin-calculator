function add(a, b) {
    return +a + +b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divine(a, b) {
    return a / b;
}

function operate(a, b, operation) {
    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) return "ERROR!";
            return divine(a, b);
    }
}


function updateDisplay(displayValue) {
    document.getElementById("display").textContent = displayValue;
}

let currentTotal = 0;
let currentOperator = "";
let currentNum = "";

const numbers = document.querySelectorAll(".number");
numbers.forEach(e => {
    e.addEventListener("click", () => {
        currentNum += e.textContent;
        updateDisplay(currentNum);
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach(e => {
    e.addEventListener("click", () => {
        equal();
        currentOperator = e.textContent;
    })
})

function equal() {
    if (currentTotal === 0 || currentOperator === "") {
        currentTotal = parseInt(currentNum);
    } else if (currentNum !== "" && currentOperator !== "") {
        currentTotal = operate(currentTotal, currentNum, currentOperator);
        }
    currentNum = "";
    updateDisplay(currentTotal);
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", equal)

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    currentTotal = 0;
    currentNum = "";
    currentOperator = "";
    updateDisplay(currentTotal);
})

updateDisplay(currentTotal)