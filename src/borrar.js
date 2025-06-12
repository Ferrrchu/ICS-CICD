export function borrar() {

    let op1 = parseFloat(document.getElementById('op1').value);
    let op2 = parseFloat(document.getElementById('op2').value);
    let operador = document.getElementById('operador').value;
    const elemResultado = document.getElementById('resultado');
 
    op1 = '';
    op2 = '';
    elemResultado.style.display = "none"
}