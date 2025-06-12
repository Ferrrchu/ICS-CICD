import { suma } from './suma.js';

export function calcular() {
    console.log("a")

    const op1 = parseFloat(document.getElementById('op1').value);
    const op2 = parseFloat(document.getElementById('op2').value);
    const operador = document.getElementById('operador').value;
    const elemResultado = document.getElementById('resultado');

    if (isNaN(op1) || isNaN(op2)) {
        elemResultado.textContent = 'Por favor, ingresa dos números válidos.';
        return;
    }

    let resultado;

    switch (operador) {
        case '+':
            resultado = suma(op1,op2)
            break;
        case '-':
            resultado = op1 - op2;
            break;
        case '*':
            resultado = op1 * op2;
            break;
        case '/':
            if (op2 !== 0) {
                resultado = op1 / op2;
            } else {
                elemResultado.textContent = "Error: división por cero";
                return
            }
            break;
    }

    elemResultado.textContent = "Resultado: " + resultado;
    elemResultado.style.display = "block" 
}