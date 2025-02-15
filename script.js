let calculation = localStorage.getItem('calculation') || '0';

function updateDisplay() {
    document.getElementById('display').innerText = calculation;
}

function appendToDisplay(value) {
    if (calculation === '0' && value !== '.') {
        calculation = '';
    }
    calculation += value;
    updateDisplay();
    localStorage.setItem('calculation', calculation);
}

function clearDisplay() {
    calculation = '0';
    updateDisplay();
    localStorage.removeItem('calculation');
}

function deleteLast() {
    calculation = calculation.slice(0, -1) || '0';
    updateDisplay();
    localStorage.setItem('calculation', calculation);
}

function calculate() {
    try {
        calculation = eval(calculation).toString();
    } catch (e) {
        calculation = 'Error';
    }
    updateDisplay();
    localStorage.setItem('calculation', calculation);
}

// Initialize display with saved calculation
updateDisplay();
