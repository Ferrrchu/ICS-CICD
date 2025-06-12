export function borrar() {
    
    document.getElementById('op1').value = '';
    document.getElementById('op2').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('operador').value = '+';

    document.getElementById('resultado').style.display = "none"
}