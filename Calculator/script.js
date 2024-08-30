document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    
    let currentInput = '';
    let operator = '';
    let operand1 = null;
    let operand2 = null;
    let result = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            
            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
                operand1 = parseFloat(currentInput);
                currentInput = '';
            }
        });
    });

    equalsButton.addEventListener('click', function () {
        operand2 = parseFloat(currentInput);
        
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }
        
        display.textContent = result;
        currentInput = result.toString();
        operand1 = null;
        operand2 = null;
        operator = '';
    });

    clearButton.addEventListener('click', function () {
        display.textContent = '';
        currentInput = '';
        operator = '';
        operand1 = null;
        operand2 = null;
        result = null;
    });
});
