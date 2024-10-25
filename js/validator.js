// console.log(document.getElementById('fecha'))
// console.log(document.getElementsByClassName('clase'))
// console.log(document.getElementsByTagName('input'))

// console.log(document.querySelector('input'))
// console.log(document.querySelectorAll('input'))
// console.log(document.querySelector('#fecha'))
// console.log(document.querySelectorAll('#fecha'))
// console.log(document.querySelector('.clase'))
// console.log(document.querySelectorAll('.clase'))

// console.log(document.querySelector('form button'))
// let input =(document.getElementById('fecha'))
// console.log(input)

import { registrarTiempos } from "../controllers/ControllerTiempos.js";
import{listarProyectos, filtrarPorEmpresas, filtrarPorProyectos, filtrarPorTipoProyecto } from "../controllers/Controllerproyectos.js";

let btnRegistrar =document.getElementById("btnRegistrar")
if (btnRegistrar){
btnRegistrar.addEventListener("click",registrarTiempos )
}
let listaProyectos = document.getElementById("listarProyectos")
if(listaProyectos){
    listaProyectos.addEventListener("click",listarProyectos)
}