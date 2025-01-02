let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let explanation = document.getElementById('explanation');
let clear = document.getElementById('clear');

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) calculateResult();

    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculateResult() {
    if (currentOperation === null || displayValue === '') return;
    secondOperand = parseFloat(displayValue);

    switch (currentOperation) {
        case '+':
            displayValue = firstOperand + secondOperand;
            break;
            
        case '-':
            displayValue = firstOperand - secondOperand;
            break;

        case '*':
            displayValue = firstOperand * secondOperand;
            break;

        case '/':
            displayValue = firstOperand / secondOperand;
            break;
    }

    if (displayValue === Infinity) {
        explanation.style.display = 'block';
        explanation.innerHTML =
          '<strong>Explanation:</strong> <br> Division by zero is undefined in mathematics. In programming, it returns Infinity to indicate a value beyond limits.<br> click <b>Clear</b> button to refresh';
    } 

    clear.addEventListener('click', () => {
        explanation.style.display = 'none';
    });

    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

