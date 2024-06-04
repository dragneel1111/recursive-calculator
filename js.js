document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('inputField');
    const factorialButton = document.getElementById('factorialButton');
    const fibonacciButton = document.getElementById('fibonacciButton');
    const calculateButton = document.getElementById('calculateButton');
    const resultLabel = document.getElementById('resultLabel');

    calculateButton.addEventListener('click', function () {
        try {
            const n = parseInt(inputField.value);
            let result;
            if (factorialButton.checked) {
                result = factorial(n);
            } else {
                result = fibonacci(n);
            }
            resultLabel.textContent = 'Result: ' + result;
        } catch (error) {
            resultLabel.textContent = 'Enter a valid value';
        }
    });

    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
});
