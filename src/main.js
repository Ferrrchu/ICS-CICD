import { calcular } from './calcular.js'
import { borrar } from './borrar.js'

const btnCalcular = document.getElementById('btn-calcular')
const btnBorrar = document.getElementById('btn-borrar')

btnCalcular.addEventListener("click", calcular)
btnBorrar.addEventListener("click", borrar)