function add(a, b) {
    return a + b;
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
            return divine(a, b);
    }
}

let displayValue = "";

function updateDisplay() {
    document.getElementById("display").textContent = displayValue;
}