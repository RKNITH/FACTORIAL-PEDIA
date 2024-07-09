document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('year').textContent = new Date().getFullYear();
});

function calculateFactorial() {
    const numberInput = parseFloat(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(numberInput)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    if (numberInput < 0) {
        resultElement.textContent = `Factorial of ${numberInput} is ${gamma(numberInput + 1).toFixed(5)}`;
    } else if (numberInput % 1 !== 0) {
        resultElement.textContent = `Factorial of ${numberInput} is ${gamma(numberInput + 1).toFixed(5)}`;
    } else {
        let result = 1;
        let steps = [];
        for (let i = 1; i <= numberInput; i++) {
            result *= i;
            steps.push(`${i}! = ${result}`);
        }
        resultElement.innerHTML = `Factorial of ${numberInput} is ${result}<br>Steps:<br>${steps.join('<br>')}`;
    }
}

// Gamma function approximation using Lanczos approximation
function gamma(n) {
    const p = [
        676.5203681218851,
        -1259.1392167224028,
        771.32342877765313,
        -176.61502916214059,
        12.507343278686905,
        -0.13857109526572012,
        9.9843695780195716e-6,
        1.5056327351493116e-7
    ];

    if (n < 0.5) {
        return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
    } else {
        n -= 1;
        let x = 0.99999999999980993;
        for (let i = 0; i < p.length; i++) {
            x += p[i] / (n + i + 1);
        }
        const t = n + p.length - 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
    }
}
