let resultDisplay = document.getElementById('result');
let historyDisplay = document.getElementById('history');
let currentInput = "";

function append(value) {
    if (resultDisplay.innerText === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearAll() {
    currentInput = "";
    historyDisplay.innerText = "";
    resultDisplay.innerText = "0";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    resultDisplay.innerText = currentInput || "0";
}

function calculate() {
    try {
        let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        historyDisplay.innerText = currentInput + " =";
        let result = eval(expression);
        if (!Number.isInteger(result)) {
            result = result.toFixed(4).replace(/\.?0+$/, "");
        }
        currentInput = result.toString();
        resultDisplay.innerText = currentInput;
    } catch (error) {
        resultDisplay.innerText = "Error";
        currentInput = "";
    }
}